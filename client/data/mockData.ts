import { ScheduleBlock, Task, UserStats } from "@/types";

export const mockUser: UserStats = {
  name: "Alex",
  level: 12,
  xp: 2450,
  xpToNextLevel: 3000,
  coins: 780,
  streak: 12,
  studyHoursToday: 4.5,
};

export const mockSchedule: ScheduleBlock[] = [
  { id: "s1", time: "06:30", title: "Wake Up", category: "Personal", completed: true },
  { id: "s2", time: "07:00", title: "Exercise", category: "Health", completed: true },
  { id: "s3", time: "09:00", title: "DSA — Arrays", category: "Study", completed: true },
  { id: "s4", time: "11:00", title: "College", category: "Work", completed: false },
  { id: "s5", time: "17:00", title: "React Project", category: "Coding", completed: false },
  { id: "s6", time: "20:00", title: "Revision", category: "Study", completed: false },
];

export const mockTasks: Task[] = [
  {
    id: "t1",
    title: "Complete DBMS normalization",
    description: "Revise 1NF, 2NF, 3NF with examples",
    category: "Study",
    priority: "high",
    difficulty: "hard",
    estimatedMinutes: 45,
    dueTime: "5:00 PM",
    xp: 60,
    coins: 25,
    completed: false,
  },
  {
    id: "t2",
    title: "Push React project to GitHub",
    category: "Coding",
    priority: "medium",
    difficulty: "medium",
    estimatedMinutes: 20,
    dueTime: "6:30 PM",
    xp: 25,
    coins: 10,
    completed: false,
  },
  {
    id: "t3",
    title: "30 minute evening run",
    category: "Health",
    priority: "medium",
    difficulty: "easy",
    estimatedMinutes: 30,
    xp: 10,
    coins: 5,
    completed: true,
  },
  {
    id: "t4",
    title: "Read 20 pages of Atomic Habits",
    category: "Personal",
    priority: "low",
    difficulty: "easy",
    estimatedMinutes: 25,
    xp: 10,
    coins: 5,
    completed: false,
  },
];

export const mockDoThisNow: Task = {
  id: "now-1",
  title: "Revise DBMS Normalization",
  description: "You have 30 minutes free before your next block.",
  category: "Study",
  priority: "high",
  difficulty: "hard",
  estimatedMinutes: 30,
  xp: 60,
  coins: 25,
  completed: false,
};

export const categoryColors: Record<string, string> = {
  Study: "bg-[hsl(348,69%,80%)]",
  Coding: "bg-[hsl(40,67%,73%)]",
  Health: "bg-[hsl(135,23%,72%)]",
  Personal: "bg-[hsl(350,80%,94%)]",
  Work: "bg-muted",
  Project: "bg-[hsl(40,67%,73%)]",
};
