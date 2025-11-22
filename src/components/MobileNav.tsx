import { Home, Dumbbell, TrendingUp, User } from "lucide-react";
import { NavLink } from "./NavLink";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Início", path: "/" },
  { icon: Dumbbell, label: "Treino", path: "/workout" },
  { icon: TrendingUp, label: "Evolução", path: "/progress" },
  { icon: User, label: "Perfil", path: "/profile" },
];

export const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-strong border-t border-border z-50">
      <div className="flex items-center justify-around h-20 px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors"
            activeClassName="text-primary"
          >
            {({ isActive }) => (
              <>
                <item.icon
                  className={cn("w-6 h-6", isActive ? "text-primary" : "text-muted-foreground")}
                />
                <span
                  className={cn(
                    "text-xs font-medium",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
