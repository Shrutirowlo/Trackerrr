import { LucideIcon, Sparkles } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
}

export default function Placeholder({
  title,
  description = "This section isn't built out yet. Keep chatting with FocusForge to design it exactly how you want.",
  icon: Icon = Sparkles,
}: PlaceholderProps) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
          <Icon className="h-6 w-6 text-[hsl(350,45%,50%)]" strokeWidth={1.75} />
        </div>
        <h1 className="text-xl font-bold text-foreground">{title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
