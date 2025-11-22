import { cn } from "@/lib/utils";
import { ReactNode, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  strong?: boolean;
}

export const GlassCard = ({ children, className, strong = false, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg p-6",
        strong ? "glass-strong" : "glass",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
