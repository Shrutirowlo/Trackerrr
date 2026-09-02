import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Home,
  CalendarDays,
  BookOpen,
  Flame,
  Moon,
  Target,
  Trophy,
  Coins,
  BarChart3,
  Bot,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", to: "/", icon: Home },
  { label: "My Day", to: "/day", icon: CalendarDays },
  { label: "Study", to: "/study", icon: BookOpen },
  { label: "Habits", to: "/habits", icon: Flame },
  { label: "Sleep", to: "/sleep", icon: Moon },
  { label: "Goals", to: "/goals", icon: Target },
  { label: "Achievements", to: "/achievements", icon: Trophy },
  { label: "Rewards", to: "/rewards", icon: Coins },
  { label: "Analytics", to: "/analytics", icon: BarChart3 },
  { label: "Assistant", to: "/assistant", icon: Bot },
];

const mobileNavItems = [
  { label: "Home", to: "/", icon: Home },
  { label: "Day", to: "/day", icon: CalendarDays },
  { label: "Study", to: "/study", icon: BookOpen },
  { label: "Goals", to: "/goals", icon: Target },
  { label: "More", to: "/settings", icon: Settings },
];

function NavLink({
  to,
  label,
  icon: Icon,
  active,
}: {
  to: string;
  label: string;
  icon: typeof Home;
  active: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
        active
          ? "bg-secondary text-[hsl(350,45%,40%)]"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
      <span>{label}</span>
    </Link>
  );
}

export default function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r border-sidebar-border bg-sidebar px-4 py-6 lg:flex lg:flex-col">
          <div className="mb-8 flex items-center gap-2 px-2">
            <span className="text-xl font-bold tracking-tight text-foreground">
              FocusForge
            </span>
            <span aria-hidden>🌸</span>
          </div>

          <nav className="flex flex-1 flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                {...item}
                active={location.pathname === item.to}
              />
            ))}
          </nav>

          <div className="mt-4 border-t border-sidebar-border pt-4">
            <NavLink
              to="/settings"
              label="Settings"
              icon={Settings}
              active={location.pathname === "/settings"}
            />
          </div>
        </aside>

        <div className="flex min-h-screen w-full flex-col">
          <header className="flex items-center justify-between border-b border-border bg-background/80 px-4 py-3 backdrop-blur lg:hidden">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-foreground">
                FocusForge
              </span>
              <span aria-hidden>🌸</span>
            </div>
          </header>

          <main className="flex-1 pb-20 lg:pb-0">
            <Outlet />
          </main>

          <nav className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-between border-t border-border bg-card px-2 py-2 shadow-[0_-4px_16px_-8px_rgb(41_37_38_/_0.12)] lg:hidden">
            {mobileNavItems.map((item) => {
              const active = location.pathname === item.to;
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 text-[11px] font-medium",
                    active ? "text-[hsl(350,45%,45%)]" : "text-muted-foreground",
                  )}
                >
                  <Icon
                    className="h-5 w-5"
                    strokeWidth={active ? 2 : 1.75}
                    fill={active ? "hsl(var(--secondary))" : "none"}
                  />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
