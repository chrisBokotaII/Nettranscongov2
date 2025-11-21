import React, { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { StatsScreen } from './components/StatsScreen';
import { Footer } from './components/Footer';
import { questions } from './data/questions';
import { Mode, Difficulty, Category, Question, ScoreHistoryItem, QuizSession } from './types';

function App() {
  const [mode, setMode] = useState<Mode>('home');
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  
  // Track current settings
  const [currentCategoryFilter, setCurrentCategoryFilter] = useState<Category | 'Mixed'>('Mixed');
  const [currentDifficulty, setCurrentDifficulty] = useState<Difficulty>('Mixed');
  
  // Holds session data when resuming
  const [resumeData, setResumeData] = useState<QuizSession | undefined>(undefined);

  const startQuiz = (selectedMode: 'study' | 'exam', difficulty: Difficulty, category: Category | 'Mixed') => {
    // Starting fresh, remove any old session
    localStorage.removeItem('nettranscongo_current_session');
    setResumeData(undefined);

    let filtered = questions;
    
    // Filter by Difficulty
    if (difficulty !== 'Mixed') {
      filtered = filtered.filter(q => q.difficulty === difficulty);
    }

    // Filter by Category
    if (category !== 'Mixed') {
      filtered = filtered.filter(q => q.category === category);
    }

    if (filtered.length === 0) {
      alert("Aucune question disponible pour cette combinaison.");
      return;
    }

    // Shuffle questions
    filtered = [...filtered].sort(() => Math.random() - 0.5); 

    setActiveQuestions(filtered);
    setCurrentCategoryFilter(category);
    setCurrentDifficulty(difficulty);
    setScore(0);
    setUserAnswers({});
    setMode(selectedMode);
    window.scrollTo(0, 0);
  };

  const resumeQuiz = (session: QuizSession) => {
    setActiveQuestions(session.questions);
    setCurrentCategoryFilter(session.categoryFilter);
    setCurrentDifficulty(session.difficulty);
    setResumeData(session); // Pass the session data to QuizScreen
    setMode(session.mode);
    window.scrollTo(0, 0);
  };

  const handleFinish = (finalScore: number, answers: Record<number, string>) => {
    setScore(finalScore);
    setUserAnswers(answers);
    
    // Save to LocalStorage History
    const historyItem: ScoreHistoryItem = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      score: finalScore,
      total: activeQuestions.length,
      mode: mode as 'study' | 'exam',
      difficulty: currentDifficulty,
      category: currentCategoryFilter
    };

    try {
      const existingHistory = JSON.parse(localStorage.getItem('nettranscongo_history') || '[]');
      const newHistory = [historyItem, ...existingHistory].slice(0, 50); // Keep last 50
      localStorage.setItem('nettranscongo_history', JSON.stringify(newHistory));
      
      // Clear current session progress as it's now finished
      localStorage.removeItem('nettranscongo_current_session');
    } catch (e) {
      console.error("Failed to save history", e);
    }

    setMode('result');
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setMode('home');
    window.scrollTo(0, 0);
  };

  const goToStats = () => {
    setMode('stats');
    window.scrollTo(0, 0);
  }

  const isQuizActive = mode === 'study' || mode === 'exam';

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Header 
        onHome={goHome} 
        onStats={goToStats} 
        showNav={!isQuizActive} 
      />
      
      <main className="flex-1 pt-4">
        {mode === 'home' && (
          <Home 
            onStart={startQuiz} 
            onResume={resumeQuiz}
            onStats={goToStats} 
          />
        )}

        {(mode === 'study' || mode === 'exam') && (
          <QuizScreen 
            questions={activeQuestions} 
            mode={mode} 
            categoryFilter={currentCategoryFilter}
            difficulty={currentDifficulty}
            initialSession={resumeData}
            onFinish={handleFinish} 
            onExit={goHome}
          />
        )}

        {mode === 'result' && (
          <ResultScreen 
            score={score} 
            total={activeQuestions.length} 
            answers={userAnswers}
            questions={activeQuestions}
            onRetry={() => goHome()} 
            onHome={goHome} 
          />
        )}

        {mode === 'stats' && (
          <StatsScreen onBack={goHome} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;