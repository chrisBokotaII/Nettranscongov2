import React from 'react';
import { Button } from './Button';
import { Award, RefreshCw, Home, CheckCircle, AlertCircle } from 'lucide-react';
import { Question } from '../types';

interface ResultScreenProps {
  score: number;
  total: number;
  answers: Record<number, string>;
  questions: Question[];
  onRetry: () => void;
  onHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ 
  score, 
  total, 
  answers,
  questions,
  onRetry, 
  onHome 
}) => {
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 70; // CompTIA standard roughly

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8 animate-fade-in">
      
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center space-y-4">
        <div className={`inline-flex items-center justify-center p-4 rounded-full ${passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'} mb-2`}>
          <Award size={48} />
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900">
          {passed ? "Félicitations !" : "Continuez vos efforts !"}
        </h2>
        
        <div className="text-6xl font-extrabold text-blue-700">
          {percentage}%
        </div>
        
        <p className="text-slate-600">
          Vous avez obtenu {score} sur {total} questions correctes.
          {passed ? " Vous êtes sur la bonne voie pour la certification." : " Révisez les concepts clés et réessayez."}
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">Révision des Réponses</h3>
        {questions.map((q, idx) => {
          const userAnswerId = answers[q.id];
          const isCorrect = userAnswerId === q.correctAnswerId;
          
          return (
            <div key={q.id} className={`p-4 rounded-xl border ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
              <div className="flex gap-3">
                <div className="mt-1 flex-shrink-0">
                   {isCorrect ? <CheckCircle className="text-green-600" size={20} /> : <AlertCircle className="text-red-600" size={20} />}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">Question {idx + 1}</p>
                  <p className="text-slate-800 mb-2">{q.text}</p>
                  
                  <div className="text-sm space-y-1">
                    {!isCorrect && (
                      <p className="text-red-700">
                        <span className="font-bold">Votre réponse:</span> {q.options.find(o => o.id === userAnswerId)?.text || "Aucune"}
                      </p>
                    )}
                    <p className="text-green-700">
                      <span className="font-bold">Bonne réponse:</span> {q.options.find(o => o.id === q.correctAnswerId)?.text}
                    </p>
                  </div>
                  
                  <div className="mt-3 text-sm text-slate-600 bg-white/60 p-3 rounded border border-slate-200/50">
                    <span className="font-bold block mb-1 text-slate-700">Explication :</span>
                    {q.explanation}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button onClick={onRetry} fullWidth variant="primary">
          <RefreshCw size={20} /> Réessayer
        </Button>
        <Button onClick={onHome} fullWidth variant="outline">
          <Home size={20} /> Retour à l'accueil
        </Button>
      </div>
    </div>
  );
};