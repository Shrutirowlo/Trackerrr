import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CalendarDays,
  BookOpen,
  Flame,
  Moon,
  Target,
  Trophy,
  Coins,
  BarChart3,
  Bot,
  Settings as SettingsIcon,
} from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import Index from "./pages/Index";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route
              path="/day"
              element={<Placeholder title="My Day" icon={CalendarDays} />}
            />
            <Route
              path="/study"
              element={<Placeholder title="Study" icon={BookOpen} />}
            />
            <Route
              path="/habits"
              element={<Placeholder title="Habits" icon={Flame} />}
            />
            <Route
              path="/sleep"
              element={<Placeholder title="Sleep" icon={Moon} />}
            />
            <Route
              path="/goals"
              element={<Placeholder title="Goals" icon={Target} />}
            />
            <Route
              path="/achievements"
              element={<Placeholder title="Achievements" icon={Trophy} />}
            />
            <Route
              path="/rewards"
              element={<Placeholder title="Rewards" icon={Coins} />}
            />
            <Route
              path="/analytics"
              element={<Placeholder title="Analytics" icon={BarChart3} />}
            />
            <Route
              path="/assistant"
              element={<Placeholder title="AI Assistant" icon={Bot} />}
            />
            <Route
              path="/settings"
              element={<Placeholder title="Settings" icon={SettingsIcon} />}
            />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
