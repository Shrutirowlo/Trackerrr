import { Plus, BookOpen, Moon, CalendarPlus, Target, Flame } from "lucide-react";
import { toast } from "sonner";

const actions = [
  { label: "Add Task", icon: Plus },
  { label: "Add Habit", icon: Flame },
  { label: "Add Goal", icon: Target },
  { label: "Study Session", icon: BookOpen },
  { label: "Add Sleep", icon: Moon },
  { label: "Timetable Block", icon: CalendarPlus },
];

export default function QuickActions() {
  return (
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 no-scrollbar sm:mx-0 sm:flex-wrap sm:px-0">
      {actions.map(({ label, icon: Icon }) => (
        <button
          key={label}
          onClick={() => toast(`${label} — coming soon`)}
          className="flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground shadow-soft transition-colors hover:bg-muted"
        >
          <Icon className="h-3.5 w-3.5 text-[hsl(350,45%,55%)]" strokeWidth={2} />
          {label}
        </button>
      ))}
    </div>
  );
}
