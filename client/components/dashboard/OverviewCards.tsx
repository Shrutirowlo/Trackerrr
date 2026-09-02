import { BookOpen, CheckCircle2 } from "lucide-react";

interface OverviewCardsProps {
  progressPercent: number;
  tasksCompleted: number;
  tasksTotal: number;
  studyHours: number;
}

export default function OverviewCards({
  progressPercent,
  tasksCompleted,
  tasksTotal,
  studyHours,
}: OverviewCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <CheckCircle2 className="h-4 w-4 text-[hsl(350,45%,55%)]" strokeWidth={1.75} />
          Today's Progress
        </div>
        <div className="mt-3 text-3xl font-bold text-foreground">
          {progressPercent}%
        </div>
        <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          {tasksCompleted} / {tasksTotal} tasks completed
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <BookOpen className="h-4 w-4 text-[hsl(40,67%,50%)]" strokeWidth={1.75} />
          Study Time
        </div>
        <div className="mt-3 text-3xl font-bold text-foreground">
          {studyHours}h
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Logged across today's sessions
        </p>
      </div>
    </div>
  );
}
