import React, { useState, useEffect } from 'react';
import { Question, Category, QuizSession, Difficulty } from '../types';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';
import { ArrowRight, ArrowLeft, Check, BookOpen, BarChart, X, RefreshCcw, AlertTriangle } from 'lucide-react';

interface QuizScreenProps {
  questions: Question[];
  mode: 'study' | 'exam';
  categoryFilter: Category | 'Mixed';
  difficulty: Difficulty;
  initialSession?: QuizSession; // Optional prop for resuming
  onFinish: (score: number, answers: Record<number, string>) => void;
  onExit: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ 
  questions, 
  mode, 
  categoryFilter, 
  difficulty,
  initialSession, 
  onFinish, 
  onExit 
}) => {
  // Initialize state from initialSession if available, otherwise defaults
  const [currentIdx, setCurrentIdx] = useState(initialSession?.currentIdx || 0);
  const [answers, setAnswers] = useState<Record<number, string>>(initialSession?.answers || {});
  const [timer, setTimer] = useState(initialSession?.timer || 60 * 10);
  
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showQuitModal, setShowQuitModal] = useState(false);

  const currentQuestion = questions[currentIdx];
  const isLastQuestion = currentIdx === questions.length - 1;

  // Sync local selection state when question changes or on mount
  useEffect(() => {
    const savedAnswer = answers[questions[currentIdx].id];
    setSelectedOption(savedAnswer || null);
    
    if (mode === 'study' && savedAnswer) {
      setShowFeedback(true);
    } else {
      setShowFeedback(false);
    }
  }, [currentIdx, questions, answers, mode]);

  // Timer logic
  useEffect(() => {
    if (mode === 'exam') {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            calculateAndFinish(answers); 
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [mode, answers]);

  // Auto-save Session logic
  useEffect(() => {
    // Create session object
    const session: QuizSession = {
      questions,
      answers,
      currentIdx,
      mode,
      timer,
      categoryFilter,
      difficulty,
      timestamp: Date.now()
    };
    
    // Save to localStorage
    localStorage.setItem('nettranscongo_current_session', JSON.stringify(session));
  }, [answers, currentIdx, timer, mode, questions, categoryFilter, difficulty]);

  const handleOptionSelect = (optionId: string) => {
    if (showFeedback && mode === 'study') return;
    setSelectedOption(optionId);
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    if (window.confirm("Êtes-vous sûr de vouloir recommencer ce test depuis le début ? Toute progression actuelle sera perdue.")) {
      setCurrentIdx(0);
      setAnswers({});
      setTimer(60 * 10);
      setSelectedOption(null);
      setShowFeedback(false);
      // Local storage will be updated automatically by the useEffect
    }
  };

  const handleQuitClick = () => {
    setShowQuitModal(true);
  };

  const confirmQuit = () => {
    setShowQuitModal(false);
    onExit();
  };

  const handleMainAction = () => {
    // Study Mode Logic
    if (mode === 'study' && !showFeedback) {
      if (!selectedOption) return;
      const newAnswers = { ...answers, [currentQuestion.id]: selectedOption };
      setAnswers(newAnswers);
      return; 
    }

    // Navigation Logic
    let currentAnswers = answers;
    if (mode === 'exam' && selectedOption) {
      currentAnswers = { ...answers, [currentQuestion.id]: selectedOption };
      setAnswers(currentAnswers);
    }

    if (isLastQuestion) {
      calculateAndFinish(currentAnswers);
    } else {
      setCurrentIdx(prev => prev + 1);
    }
  };

  const calculateAndFinish = (finalAnswers: Record<number, string>) => {
    let score = 0;
    questions.forEach(q => {
      if (finalAnswers[q.id] === q.correctAnswerId) {
        score++;
      }
    });
    
    // Clear session from storage upon completion
    localStorage.removeItem('nettranscongo_current_session');
    
    onFinish(score, finalAnswers);
  };

  const getOptionStyles = (optionId: string) => {
    const base = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 ";
    
    if (mode === 'study' && showFeedback) {
      if (optionId === currentQuestion.correctAnswerId) {
        return base + "bg-green-50 border-green-500 text-green-800";
      }
      if (optionId === selectedOption && optionId !== currentQuestion.correctAnswerId) {
        return base + "bg-red-50 border-red-500 text-red-800 opacity-75";
      }
      return base + "bg-white border-slate-200 text-slate-400 opacity-50";
    }

    if (selectedOption === optionId) {
      return base + "bg-blue-50 border-blue-600 text-blue-900 shadow-sm ring-1 ring-blue-600";
    }

    return base + "bg-white border-slate-200 hover:border-blue-300 text-slate-700 hover:bg-slate-50";
  };

  const getDifficultyColor = (diff: string) => {
    switch(diff) {
      case 'Easy': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Hard': return 'bg-red-100 text-red-700';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  const getMainButtonLabel = () => {
    if (mode === 'study' && !showFeedback) return "Vérifier";
    if (isLastQuestion) return mode === 'exam' ? "Terminer" : "Résultats";
    return "Suivant";
  };

  return (
    <div className="max-w-3xl mx-auto p-4 pb-24">
      {/* Top Bar with Progress and Restart */}
      <div className="flex items-start gap-4 mb-2">
        <ProgressBar 
          current={currentIdx} 
          total={questions.length} 
          mode={mode} 
          timer={mode === 'exam' ? timer : undefined}
        />
        <button 
          onClick={handleRestart}
          className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          title="Recommencer le test"
        >
          <RefreshCcw size={20} />
        </button>
      </div>

      <div className="space-y-6">
        {/* Question Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
          
          {/* Category Progress Indicator */}
          {categoryFilter !== 'Mixed' && (
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide">
                <span>Progression {categoryFilter}</span>
                <span>{Math.round(((currentIdx + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-slate-800 transition-all duration-500"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-wide uppercase">
              {currentQuestion.category}
            </span>
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${getDifficultyColor(currentQuestion.difficulty)}`}>
              <BarChart size={12} /> {currentQuestion.difficulty}
            </span>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
            {currentQuestion.text}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map(option => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              className={getOptionStyles(option.id)}
              disabled={showFeedback && mode === 'study'}
            >
              <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 
                ${selectedOption === option.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'}
                ${mode === 'study' && showFeedback && option.id === currentQuestion.correctAnswerId ? '!border-green-500 !bg-green-500 !text-white' : ''}
              `}>
                {(mode === 'study' && showFeedback && option.id === currentQuestion.correctAnswerId) ? <Check size={12} strokeWidth={4} /> : 
                 (selectedOption === option.id && <div className="w-2 h-2 bg-white rounded-full" />)}
              </div>
              <span className="font-medium">{option.text}</span>
            </button>
          ))}
        </div>

        {/* Study Mode Explanation */}
        {mode === 'study' && showFeedback && (
          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl animate-fade-in">
            <div className="flex items-start gap-3">
              <BookOpen className="text-blue-700 mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-bold text-blue-900 mb-1">Explication</h4>
                <p className="text-blue-800 text-sm leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-40">
        <div className="max-w-3xl mx-auto flex gap-3">
          
          <Button 
            variant="outline" 
            onClick={handlePrev} 
            disabled={currentIdx === 0}
            className="px-4"
            aria-label="Question précédente"
          >
            <ArrowLeft size={20} />
          </Button>

          <Button 
            variant="outline" 
            onClick={handleQuitClick} 
            className="px-4 border-red-100 text-red-600 hover:bg-red-50 hover:border-red-200"
            aria-label="Quitter l'examen"
          >
            <X size={20} className="sm:mr-2" />
            <span className="hidden sm:inline">Quitter</span>
          </Button>
          
          <Button 
            variant="primary" 
            onClick={handleMainAction} 
            disabled={!selectedOption && !showFeedback} 
            className="flex-1"
          >
            {getMainButtonLabel()} <ArrowRight size={18} />
          </Button>
        </div>
      </div>

      {/* Quit Confirmation Modal */}
      {showQuitModal && (
        <div className="fixed inset-0 bg-slate-900/50 z-[60] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl space-y-4">
            <div className="flex items-center gap-3 text-yellow-600 mb-2">
              <div className="bg-yellow-100 p-2 rounded-full">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Pause ou Abandon ?</h3>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Votre progression est sauvegardée automatiquement. Vous pourrez reprendre ce test plus tard depuis l'écran d'accueil.
            </p>

            <div className="flex gap-3 pt-2">
              <Button variant="outline" onClick={() => setShowQuitModal(false)} fullWidth>
                Rester
              </Button>
              <Button variant="primary" onClick={confirmQuit} fullWidth className="bg-blue-700">
                Quitter
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};