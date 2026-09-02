import { ScheduleBlock } from "@/types";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ScheduleTimelineProps {
  blocks: ScheduleBlock[];
  onToggle: (id: string) => void;
}

export default function ScheduleTimeline({
  blocks,
  onToggle,
}: ScheduleTimelineProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <h2 className="text-sm font-semibold text-foreground">
        Today's Schedule
      </h2>

      {blocks.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">
          No blocks planned yet.
        </p>
      ) : (
        <ul className="mt-4 space-y-1">
          {blocks.map((block) => (
            <li key={block.id}>
              <button
                onClick={() => onToggle(block.id)}
                className="group flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left transition-colors hover:bg-muted"
              >
                <span className="w-12 shrink-0 text-xs font-medium text-muted-foreground">
                  {block.time}
                </span>
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.5px]",
                    block.completed
                      ? "border-success bg-success text-success-foreground"
                      : "border-border text-transparent",
                  )}
                >
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span className="flex-1">
                  <span
                    className={cn(
                      "block text-sm font-medium",
                      block.completed
                        ? "text-muted-foreground line-through"
                        : "text-foreground",
                    )}
                  >
                    {block.title}
                  </span>
                </span>
                <span className="shrink-0 rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {block.category}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
