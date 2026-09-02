import { Task } from "@/types";
import { Button } from "@/components/ui/button";
import { Zap, Coins, Check } from "lucide-react";

interface DoThisNowProps {
  task: Task;
  completed: boolean;
  onStart: () => void;
}

export default function DoThisNow({ task, completed, onStart }: DoThisNowProps) {
  return (
    <div className="rounded-2xl border border-border bg-secondary p-5 shadow-soft sm:p-6">
      <div className="flex items-center gap-2 text-sm font-semibold text-[hsl(350,45%,40%)]">
        <Zap className="h-4 w-4" strokeWidth={2} />
        Do this now
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        {task.description ?? `Estimated ${task.estimatedMinutes} minutes`}
      </p>

      <h3 className="mt-1 text-lg font-bold text-foreground">{task.title}</h3>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
          <span>+{task.xp} XP</span>
          <span className="flex items-center gap-1 text-[hsl(40,60%,45%)]">
            <Coins className="h-3.5 w-3.5" strokeWidth={2} />+{task.coins}
          </span>
        </div>

        <Button
          onClick={onStart}
          disabled={completed}
          className="rounded-xl bg-primary px-5 text-primary-foreground hover:bg-primary/90"
        >
          {completed ? (
            <>
              <Check className="h-4 w-4" /> Completed
            </>
          ) : (
            "Start now →"
          )}
        </Button>
      </div>
    </div>
  );
}
