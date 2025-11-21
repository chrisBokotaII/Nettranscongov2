import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { BookOpen, Clock, ShieldCheck, Monitor, Wifi, BarChart2, Check, Wrench, Layers, History, Trash2, Calendar, ArrowRight, PlayCircle, XCircle } from 'lucide-react';
import { Difficulty, Category, ScoreHistoryItem, QuizSession } from '../types';

interface HomeProps {
  onStart: (mode: 'study' | 'exam', difficulty: Difficulty, category: Category | 'Mixed') => void;
  onResume: (session: QuizSession) => void;
  onStats: () => void;
}

export const Home: React.FC<HomeProps> = ({ onStart, onResume, onStats }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>('Mixed');
  const [category, setCategory] = useState<Category | 'Mixed'>('Mixed');
  const [history, setHistory] = useState<ScoreHistoryItem[]>([]);
  const [savedSession, setSavedSession] = useState<QuizSession | null>(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem('nettranscongo_history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Error loading history", e);
      }
    }

    const session = localStorage.getItem('nettranscongo_current_session');
    if (session) {
      try {
        setSavedSession(JSON.parse(session));
      } catch (e) {
        console.error("Error loading session", e);
      }
    }
  }, []);

  const clearHistory = () => {
    if (window.confirm("Voulez-vous vraiment effacer tout l'historique ?")) {
      localStorage.removeItem('nettranscongo_history');
      setHistory([]);
    }
  };

  const discardSession = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("Voulez-vous abandonner la session en cours ?")) {
      localStorage.removeItem('nettranscongo_current_session');
      setSavedSession(null);
    }
  };

  const difficulties: { id: Difficulty; label: string; color: string }[] = [
    { id: 'Easy', label: 'Facile', color: 'bg-green-100 text-green-700 border-green-200' },
    { id: 'Medium', label: 'Moyen', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
    { id: 'Hard', label: 'Difficile', color: 'bg-red-100 text-red-700 border-red-200' },
    { id: 'Mixed', label: 'Mixte (Tous)', color: 'bg-slate-100 text-slate-700 border-slate-200' },
  ];

  const categories: { id: Category | 'Mixed'; label: string; icon: React.ReactNode }[] = [
    { id: 'Mixed', label: 'Tout', icon: <Layers size={18} /> },
    { id: 'Hardware', label: 'Hardware', icon: <Monitor size={18} /> },
    { id: 'Network', label: 'Réseau', icon: <Wifi size={18} /> },
    { id: 'Security', label: 'Sécurité', icon: <ShieldCheck size={18} /> },
    { id: 'Troubleshooting', label: 'Dépannage', icon: <Wrench size={18} /> },
  ];

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('fr-CD', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8 animate-fade-in">
      
      <div className="text-center space-y-4 mt-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Maîtrisez l'IT à la congolaise
        </h2>
        <p className="text-lg text-slate-600">
          Préparez vos certifications CompTIA A+ et Network+ avec des scénarios adaptés à la réalité technologique de la RDC.
        </p>
      </div>

      {/* Resume Session Banner */}
      {savedSession && (
        <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in ring-2 ring-blue-300 ring-offset-2 ring-offset-slate-50">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-blue-200 font-semibold text-sm uppercase tracking-wide">
              <PlayCircle size={16} className="animate-pulse" /> Session en cours détectée
            </div>
            <h3 className="text-xl font-bold">Reprendre votre test ?</h3>
            <p className="text-blue-200 text-sm">
              {savedSession.mode === 'study' ? 'Mode Étude' : 'Mode Examen'} • {savedSession.currentIdx + 1}/{savedSession.questions.length} questions • {Math.round((savedSession.currentIdx / savedSession.questions.length) * 100)}% complété
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
             <button 
              onClick={discardSession}
              className="px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-700 text-blue-200 transition-colors flex items-center gap-2 text-sm font-semibold"
            >
              <XCircle size={16} /> Abandonner
            </button>
            <Button 
              variant="primary" 
              onClick={() => onResume(savedSession)}
              className="bg-white text-blue-900 hover:bg-blue-50 border-transparent w-full sm:w-auto relative overflow-hidden"
            >
              <span className="relative flex h-3 w-3 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Reprendre <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      )}

      {/* Difficulty Selection */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <BarChart2 className="text-slate-400" size={20} />
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            1. Niveau de difficulté
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {difficulties.map((d) => (
            <button
              key={d.id}
              onClick={() => setDifficulty(d.id)}
              className={`
                relative p-3 rounded-xl border-2 text-sm font-bold transition-all duration-200 flex flex-col items-center justify-center gap-2
                ${difficulty === d.id 
                  ? `${d.color} border-current ring-1 ring-offset-1 ring-slate-200` 
                  : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200 hover:bg-slate-50'}
              `}
            >
              {difficulty === d.id && (
                <div className="absolute top-1 right-1">
                  <Check size={14} />
                </div>
              )}
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Selection */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="text-slate-400" size={20} />
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            2. Catégorie (Optionnel)
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`
                px-4 py-2 rounded-full border text-sm font-medium transition-all flex items-center gap-2
                ${category === c.id
                  ? 'bg-slate-800 text-white border-slate-800 shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'}
              `}
            >
              {c.icon}
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mode Selection */}
      <div>
        <div className="flex items-center gap-2 mb-4 px-1">
          <Clock className="text-slate-400" size={20} />
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            3. Mode d'examen
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 transition-all group relative overflow-hidden cursor-pointer" onClick={() => onStart('study', difficulty, category)}>
            <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-700 mb-4 group-hover:scale-110 transition-transform relative z-10">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">Mode Étude</h3>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed relative z-10">
              Apprenez à votre rythme. Feedback immédiat et explications détaillées.
            </p>
            <Button onClick={(e) => { e.stopPropagation(); onStart('study', difficulty, category); }} fullWidth variant="primary" className="relative z-10">
              Commencer la Révision
            </Button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-yellow-400 transition-all group cursor-pointer" onClick={() => onStart('exam', difficulty, category)}>
            <div className="bg-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center text-yellow-700 mb-4 group-hover:scale-110 transition-transform">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Mode Examen</h3>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              Conditions réelles. Chronomètre actif, score à la fin.
            </p>
            <Button onClick={(e) => { e.stopPropagation(); onStart('exam', difficulty, category); }} fullWidth variant="secondary">
              Lancer un Examen Blanc
            </Button>
          </div>
        </div>
      </div>

      {/* Footer / Stats Section */}
      <div className="pt-6 border-t border-slate-200">
        {history.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <History className="text-slate-400" size={20} />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Activité Récente
                </h3>
              </div>
              <button onClick={clearHistory} className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1 font-medium px-2 py-1 rounded hover:bg-red-50 transition-colors">
                <Trash2 size={12} /> Effacer
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-4">
              <div className="divide-y divide-slate-100">
                {history.slice(0, 3).map((item) => (
                  <div key={item.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${item.mode === 'study' ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'}`}>
                        {item.mode === 'study' ? <BookOpen size={16} /> : <Clock size={16} />}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <span>{item.score} / {item.total}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded border ${
                            item.score/item.total >= 0.7 ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'
                          }`}>
                            {Math.round((item.score/item.total) * 100)}%
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                           <span className="flex items-center gap-0.5"><Calendar size={10} /> {formatDate(item.timestamp)}</span>
                           <span>•</span>
                           <span>{item.category === 'Mixed' ? 'Tout' : item.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <Button onClick={onStats} fullWidth variant="outline" className="bg-white border-slate-300 hover:border-blue-400 text-slate-700">
          <BarChart2 size={18} /> Statistiques & Progression <ArrowRight size={16} className="ml-auto" />
        </Button>
      </div>
    </div>
  );
};