import React from 'react';
import { Wifi, Globe, BarChart2 } from 'lucide-react';

interface HeaderProps {
  onHome: () => void;
  onStats: () => void;
  showNav?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onHome, onStats, showNav = true }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 text-blue-700 cursor-pointer hover:opacity-80 transition-opacity" 
          onClick={onHome}
        >
          <div className="bg-blue-700 text-white p-2 rounded-lg">
            <Wifi size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight leading-none">NetTransCongo</h1>
            <p className="text-xs text-slate-500 font-medium">CompTIA Training DRC</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {showNav && (
            <button 
              onClick={onStats}
              className="p-2 text-slate-500 hover:text-blue-700 hover:bg-slate-100 rounded-full transition-colors"
              title="Statistiques"
              aria-label="Voir les statistiques"
            >
              <BarChart2 size={24} />
            </button>
          )}
          <Globe className="text-slate-300" size={24} />
        </div>
      </div>
    </header>
  );
};