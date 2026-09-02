import { useMemo, useState } from "react";
import { toast } from "sonner";
import StatusBar from "@/components/dashboard/StatusBar";
import OverviewCards from "@/components/dashboard/OverviewCards";
import QuickActions from "@/components/dashboard/QuickActions";
import ScheduleTimeline from "@/components/dashboard/ScheduleTimeline";
import DoThisNow from "@/components/dashboard/DoThisNow";
import TaskList from "@/components/dashboard/TaskList";
import {
  mockDoThisNow,
  mockSchedule,
  mockTasks,
  mockUser,
} from "@/data/mockData";

const XP_LEVEL_UP_AMOUNT = 3000;

export default function Index() {
  const [user, setUser] = useState(mockUser);
  const [tasks, setTasks] = useState(mockTasks);
  const [schedule, setSchedule] = useState(mockSchedule);
  const [doThisNowDone, setDoThisNowDone] = useState(false);

  const today = useMemo(
    () =>
      new Date().toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
      }),
    [],
  );

  const grantReward = (xp: number, coins: number) => {
    setUser((prev) => {
      let newXp = prev.xp + xp;
      let newLevel = prev.level;
      let newXpToNext = prev.xpToNextLevel;

      if (newXp >= prev.xpToNextLevel) {
        newXp -= prev.xpToNextLevel;
        newLevel += 1;
        newXpToNext = XP_LEVEL_UP_AMOUNT;
        toast.success(`✨ Level up! You've reached Level ${newLevel}.`);
      }

      return {
        ...prev,
        xp: newXp,
        level: newLevel,
        xpToNextLevel: newXpToNext,
        coins: prev.coins + coins,
      };
    });
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;
        const nowCompleted = !task.completed;
        if (nowCompleted) {
          grantReward(task.xp, task.coins);
          toast(`✓ Completed — +${task.xp} XP, +${task.coins} 🪙`);
        }
        return { ...task, completed: nowCompleted };
      }),
    );
  };

  const toggleScheduleBlock = (id: string) => {
    setSchedule((prev) =>
      prev.map((block) =>
        block.id === id ? { ...block, completed: !block.completed } : block,
      ),
    );
  };

  const startDoThisNow = () => {
    if (doThisNowDone) return;
    setDoThisNowDone(true);
    grantReward(mockDoThisNow.xp, mockDoThisNow.coins);
    toast(`🎉 Session complete! +${mockDoThisNow.xp} XP, +${mockDoThisNow.coins} 🪙`);
  };

  const completedTasks = tasks.filter((t) => t.completed).length;
  const completedSchedule = schedule.filter((s) => s.completed).length;
  const totalItems = tasks.length + schedule.length;
  const totalCompleted = completedTasks + completedSchedule + (doThisNowDone ? 1 : 0);
  const totalItemsWithNow = totalItems + 1;
  const progressPercent = Math.round((totalCompleted / totalItemsWithNow) * 100);

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-[26px]">
          Good morning, {user.name} 🌸
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{today}</p>
        <p className="mt-2 text-sm font-medium text-foreground/80">
          Let's make today count.
        </p>
      </header>

      <div className="space-y-6">
        <StatusBar
          level={user.level}
          xp={user.xp}
          xpToNextLevel={user.xpToNextLevel}
          streak={user.streak}
          coins={user.coins}
        />

        <QuickActions />

        <OverviewCards
          progressPercent={progressPercent}
          tasksCompleted={completedTasks}
          tasksTotal={tasks.length}
          studyHours={user.studyHoursToday}
        />

        <DoThisNow
          task={mockDoThisNow}
          completed={doThisNowDone}
          onStart={startDoThisNow}
        />

        <ScheduleTimeline blocks={schedule} onToggle={toggleScheduleBlock} />

        <TaskList tasks={tasks} onToggle={toggleTask} />
      </div>
    </div>
  );
}
