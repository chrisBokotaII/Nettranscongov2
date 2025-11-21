
export type Mode = 'home' | 'study' | 'exam' | 'result' | 'stats';
export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Mixed';
export type Category = 'Hardware' | 'Network' | 'Security' | 'Troubleshooting';

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  category: Category;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  text: string;
  options: Option[];
  correctAnswerId: string;
  explanation: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: Record<number, string>; // questionId -> optionId
  isFinished: boolean;
  mode: Mode;
  timeRemaining: number; // in seconds
}

export interface ScoreHistoryItem {
  id: string;
  timestamp: number;
  score: number;
  total: number;
  mode: 'study' | 'exam';
  difficulty: Difficulty;
  category: Category | 'Mixed';
}

export interface QuizSession {
  questions: Question[];
  answers: Record<number, string>;
  currentIdx: number;
  mode: 'study' | 'exam';
  timer: number;
  categoryFilter: Category | 'Mixed';
  difficulty: Difficulty;
  timestamp: number;
}