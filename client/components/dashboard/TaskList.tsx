import { Task } from "@/types";
import { cn } from "@/lib/utils";
import { Check, Coins } from "lucide-react";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
}

const priorityStyle: Record<Task["priority"], string> = {
  high: "text-[hsl(4,55%,55%)] bg-[hsl(4,60%,95%)]",
  medium: "text-[hsl(40,55%,42%)] bg-[hsl(40,60%,93%)]",
  low: "text-[hsl(135,20%,38%)] bg-[hsl(135,25%,93%)]",
};

export default function TaskList({ tasks, onToggle }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
        <p className="text-2xl">✨</p>
        <p className="mt-2 text-sm font-semibold text-foreground">
          Your day is clear!
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Add a task to start earning XP.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <h2 className="text-sm font-semibold text-foreground">Today's Tasks</h2>

      <ul className="mt-4 divide-y divide-border">
        {tasks.map((task) => (
          <li key={task.id} className="py-3 first:pt-1 last:pb-1">
            <button
              onClick={() => onToggle(task.id)}
              className="flex w-full items-start gap-3 text-left"
            >
              <span
                className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-[1.5px] transition-colors",
                  task.completed
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-transparent",
                )}
              >
                <Check className="h-3 w-3" strokeWidth={2.5} />
              </span>

              <span className="flex-1">
                <span
                  className={cn(
                    "block text-sm font-medium",
                    task.completed
                      ? "text-muted-foreground line-through"
                      : "text-foreground",
                  )}
                >
                  {task.title}
                </span>
                <span className="mt-1 flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[11px] font-medium capitalize",
                      priorityStyle[task.priority],
                    )}
                  >
                    {task.priority}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {task.category} · {task.estimatedMinutes} min
                  </span>
                </span>
              </span>

              <span className="flex shrink-0 flex-col items-end gap-1 text-[11px] font-semibold">
                <span className="text-foreground">+{task.xp} XP</span>
                <span className="flex items-center gap-0.5 text-[hsl(40,60%,45%)]">
                  <Coins className="h-3 w-3" strokeWidth={2} />+{task.coins}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
