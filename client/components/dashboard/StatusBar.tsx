import { Flame, Coins } from "lucide-react";

interface StatusBarProps {
  level: number;
  xp: number;
  xpToNextLevel: number;
  streak: number;
  coins: number;
}

export default function StatusBar({
  level,
  xp,
  xpToNextLevel,
  streak,
  coins,
}: StatusBarProps) {
  const percent = Math.min(100, Math.round((xp / xpToNextLevel) * 100));

  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
      <div className="flex min-w-[180px] flex-1 items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft sm:flex-none">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-[hsl(350,45%,45%)]">
          {level}
        </div>
        <div className="min-w-[120px] flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-xs font-semibold text-foreground">
              Level {level}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {xp.toLocaleString()} / {xpToNextLevel.toLocaleString()} XP
            </span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft">
        <Flame className="h-4 w-4 text-[hsl(40,67%,55%)]" strokeWidth={1.75} />
        <span className="text-sm font-semibold text-foreground">{streak}</span>
        <span className="text-xs text-muted-foreground">day streak</span>
      </div>

      <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft">
        <Coins className="h-4 w-4 text-[hsl(40,67%,55%)]" strokeWidth={1.75} />
        <span className="text-sm font-semibold text-foreground">{coins.toLocaleString()}</span>
      </div>
    </div>
  );
}
