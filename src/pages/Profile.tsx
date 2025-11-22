import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import {
  User,
  Settings,
  Trophy,
  Bell,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header with Profile */}
      <div className="bg-gradient-primary p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center text-3xl">
            👤
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary-foreground">
              João Silva
            </h1>
            <p className="text-primary-foreground/80 text-sm">
              joao@email.com
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-2 py-1 bg-primary-foreground/20 rounded text-xs text-primary-foreground font-medium">
                Nível Intermediário
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-foreground">45</p>
            <p className="text-xs text-primary-foreground/80">Dias Ativo</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-foreground">12</p>
            <p className="text-xs text-primary-foreground/80">Badges</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-foreground">5</p>
            <p className="text-xs text-primary-foreground/80">Sequência</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-4 space-y-4">
        {/* Account Section */}
        <GlassCard strong>
          <h3 className="font-bold mb-4">Conta</h3>
          <div className="space-y-1">
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-primary" />
                <span>Editar Perfil</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-primary" />
                <span>Configurações</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-primary" />
                <span>Notificações</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </GlassCard>

        {/* Achievements */}
        <GlassCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Conquistas</h3>
            <Trophy className="w-5 h-5 text-secondary" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-lg flex items-center justify-center text-2xl ${
                  i < 5
                    ? "bg-gradient-primary"
                    : "bg-muted opacity-30"
                }`}
              >
                {i < 5 ? "🏆" : "🔒"}
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Support */}
        <GlassCard>
          <h3 className="font-bold mb-4">Suporte</h3>
          <div className="space-y-1">
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-muted-foreground" />
                <span>Central de Ajuda</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </GlassCard>

        {/* Logout */}
        <Button
          variant="destructive"
          size="lg"
          className="w-full"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Sair
        </Button>
      </div>

      <MobileNav />
    </div>
  );
};

export default Profile;
