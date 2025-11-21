import React, { useMemo } from 'react';
import { ArrowLeft, TrendingUp, Award, Target, Activity, BarChart2 } from 'lucide-react';
import { Button } from './Button';
import { ScoreHistoryItem } from '../types';

interface StatsScreenProps {
  onBack: () => void;
}

export const StatsScreen: React.FC<StatsScreenProps> = ({ onBack }) => {
  const history: ScoreHistoryItem[] = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('nettranscongo_history') || '[]');
    } catch {
      return [];
    }
  }, []);

  // Calculate Stats
  const totalTests = history.length;
  
  const averageScore = useMemo(() => {
    if (totalTests === 0) return 0;
    const totalPercent = history.reduce((acc, item) => acc + (item.score / item.total), 0);
    return Math.round((totalPercent / totalTests) * 100);
  }, [history, totalTests]);

  const bestScore = useMemo(() => {
    if (totalTests === 0) return 0;
    return Math.max(...history.map(item => Math.round((item.score / item.total) * 100)));
  }, [history, totalTests]);

  // Prepare Data for Line Chart (Chronological)
  // We take the last 20 tests and reverse them to show oldest -> newest left to right
  const chartData = useMemo(() => {
    return [...history].reverse().slice(-20).map(item => ({
      date: new Date(item.timestamp).toLocaleDateString('fr-CD', { month: 'short', day: 'numeric' }),
      percent: Math.round((item.score / item.total) * 100),
      mode: item.mode
    }));
  }, [history]);

  // SVG Configuration
  const chartHeight = 100;
  const chartWidth = Math.max(chartData.length * 60, 300); // Slightly wider spacing
  
  // ViewBox adds padding: -20 top, +50 bottom to fit labels
  const viewBox = `0 -20 ${chartWidth} ${chartHeight + 50}`;

  // Prepare Data for Category Performance Bar Chart
  const categoryStats = useMemo(() => {
    const stats: Record<string, { total: number; count: number }> = {};
    
    history.forEach(item => {
      const cat = item.category === 'Mixed' ? 'Général' : item.category;
      if (!stats[cat]) stats[cat] = { total: 0, count: 0 };
      stats[cat].total += (item.score / item.total);
      stats[cat].count += 1;
    });

    return Object.entries(stats)
      .map(([name, data]) => ({
        name,
        average: Math.round((data.total / data.count) * 100),
        count: data.count
      }))
      .sort((a, b) => b.average - a.average);
  }, [history]);

  // Render Empty State
  if (totalTests === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6 space-y-8 text-center animate-fade-in">
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center">
          <div className="bg-slate-100 p-4 rounded-full mb-4 text-slate-400">
            <BarChart2 size={48} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Pas encore de données</h2>
          <p className="text-slate-500 mb-8">Complétez quelques quiz pour voir apparaître vos statistiques et votre progression ici.</p>
          <Button onClick={onBack}>
            <ArrowLeft size={20} /> Retour à l'accueil
          </Button>
        </div>
      </div>
    );
  }

  // Helper to calculate X position
  const getX = (index: number) => {
    if (chartData.length <= 1) return chartWidth / 2;
    return (index / (chartData.length - 1)) * chartWidth;
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-8 pb-24 animate-fade-in">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
          <Activity className="text-blue-600" />
          Tableau de Bord
        </h2>
        <Button variant="outline" onClick={onBack} className="!px-3">
          <ArrowLeft size={20} /> <span className="hidden sm:inline">Retour</span>
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
            <Target size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Tests Complétés</p>
            <p className="text-2xl font-bold text-slate-900">{totalTests}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Moyenne Globale</p>
            <p className="text-2xl font-bold text-slate-900">{averageScore}%</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="bg-yellow-100 p-3 rounded-xl text-yellow-600">
            <Award size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Meilleur Score</p>
            <p className="text-2xl font-bold text-slate-900">{bestScore}%</p>
          </div>
        </div>
      </div>

      {/* Progression Chart (SVG Line Chart) */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="text-slate-400" size={20} />
            Évolution des Scores
          </h3>
          
          <div className="flex gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
              <span className="text-slate-600">Étude</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <span className="text-slate-600">Examen</span>
            </div>
          </div>
        </div>
        
        <div className="h-64 w-full relative overflow-x-auto custom-scrollbar">
          <svg className="h-full w-full min-w-[600px]" viewBox={viewBox} preserveAspectRatio="none">
            {/* Grid Lines */}
            {[0, 25, 50, 75, 100].map(y => (
              <line 
                key={y} 
                x1="0" 
                y1={chartHeight - y} 
                x2={chartWidth} 
                y2={chartHeight - y} 
                stroke="#f1f5f9" 
                strokeWidth="1" 
              />
            ))}
            
            {/* Line Path (Neutral Color) */}
            {chartData.length > 1 && (
              <path
                d={`M ${chartData.map((d, i) => 
                  `${getX(i)} ${chartHeight - d.percent}`
                ).join(' L ')}`}
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}

            {/* Data Points & Labels */}
            {chartData.map((d, i) => {
              const color = d.mode === 'study' ? '#2563eb' : '#eab308'; // Blue for Study, Yellow for Exam
              return (
                <g key={i}>
                  {/* Dot */}
                  <circle
                    cx={getX(i)}
                    cy={chartHeight - d.percent}
                    r="5"
                    fill={color}
                    stroke="white"
                    strokeWidth="2"
                    className="drop-shadow-sm transition-all hover:r-6"
                  />
                  
                  {/* Percentage Label (Above) */}
                  <text
                    x={getX(i)}
                    y={chartHeight - d.percent - 12}
                    textAnchor="middle"
                    className="text-[10px] font-bold"
                    fill={color}
                  >
                    {d.percent}%
                  </text>

                  {/* Date Label (Below) */}
                  <text
                    x={getX(i)}
                    y={chartHeight - d.percent + 15}
                    textAnchor="middle"
                    className="text-[9px] fill-slate-400 font-medium"
                  >
                    {d.date}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Category Breakdown (Bar Chart) */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <BarChart2 className="text-slate-400" size={20} />
          Performance par Catégorie
        </h3>
        
        <div className="space-y-4">
          {categoryStats.map((cat) => (
            <div key={cat.name}>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span className="text-slate-700 flex items-center gap-2">
                  {cat.name}
                  <span className="text-xs font-normal text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                    {cat.count} quiz
                  </span>
                </span>
                <span className={cat.average >= 70 ? 'text-green-600' : 'text-slate-600'}>
                  {cat.average}%
                </span>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${
                    cat.average >= 80 ? 'bg-green-500' : 
                    cat.average >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${cat.average}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};