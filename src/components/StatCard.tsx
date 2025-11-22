import { LucideIcon } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  iconColor?: string;
}

export const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendUp,
  iconColor = "text-primary",
}: StatCardProps) => {
  return (
    <GlassCard className="flex items-start gap-4">
      <div className={cn("p-3 rounded-lg bg-muted/50", iconColor)}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        {trend && (
          <p
            className={cn(
              "text-xs mt-1",
              trendUp ? "text-accent" : "text-destructive"
            )}
          >
            {trend}
          </p>
        )}
      </div>
    </GlassCard>
  );
};
