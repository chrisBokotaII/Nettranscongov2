import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  mode: 'study' | 'exam';
  timer?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, mode, timer }) => {
  const progress = Math.round(((current) / total) * 100);

  return (
    <div className="w-full space-y-2 mb-6">
      <div className="flex justify-between text-sm font-medium text-slate-500">
        <span>Question {current + 1} / {total}</span>
        {mode === 'exam' && timer !== undefined && (
          <span className={`${timer < 60 ? 'text-red-600 animate-pulse' : 'text-blue-700'}`}>
            {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
          </span>
        )}
        {mode === 'study' && (
          <span className="text-blue-600">Mode Étude</span>
        )}
      </div>
      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};