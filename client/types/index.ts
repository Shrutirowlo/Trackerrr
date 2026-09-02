export type Difficulty = "easy" | "medium" | "hard" | "very-hard";
export type Priority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  description?: string;
  category: string;
  priority: Priority;
  difficulty: Difficulty;
  estimatedMinutes: number;
  dueTime?: string;
  xp: number;
  coins: number;
  completed: boolean;
}

export interface ScheduleBlock {
  id: string;
  time: string;
  title: string;
  category: string;
  completed: boolean;
}

export interface UserStats {
  name: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  coins: number;
  streak: number;
  studyHoursToday: number;
}
