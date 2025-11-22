import { GlassCard } from "@/components/GlassCard";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import {
  Dumbbell,
  TrendingUp,
  Trophy,
  Flame,
  Calendar,
  PlayCircle,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-primary p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-primary-foreground">
              Olá, João! 💪
            </h1>
            <p className="text-primary-foreground/80 text-sm mt-1">
              Vamos treinar hoje?
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <span className="text-lg">🔥</span>
          </div>
        </div>

        {/* Weekly Goal */}
        <GlassCard strong className="border-primary-foreground/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-primary-foreground/90 font-medium">
              Meta Semanal
            </span>
            <span className="text-sm text-primary-foreground font-bold">
              3/5 treinos
            </span>
          </div>
          <Progress value={60} className="h-2 bg-primary-foreground/20" />
          <p className="text-xs text-primary-foreground/80 mt-2">
            Mais 2 treinos para bater sua meta!
          </p>
        </GlassCard>
      </div>

      {/* Stats Grid */}
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            title="Treinos no Mês"
            value="12"
            icon={Dumbbell}
            trend="+3 vs mês anterior"
            trendUp
            iconColor="text-primary"
          />
          <StatCard
            title="Sequência"
            value="5 dias"
            icon={Flame}
            trend="Recorde pessoal!"
            trendUp
            iconColor="text-secondary"
          />
        </div>

        {/* Today's Workout */}
        <GlassCard strong>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-bold text-lg">Treino de Hoje</h3>
              <p className="text-sm text-muted-foreground">Treino A - Peito e Tríceps</p>
            </div>
            <PlayCircle className="w-6 h-6 text-primary" />
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Supino Reto</p>
                <p className="text-xs text-muted-foreground">4x12 repetições</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Supino Inclinado</p>
                <p className="text-xs text-muted-foreground">3x12 repetições</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Tríceps Pulley</p>
                <p className="text-xs text-muted-foreground">3x15 repetições</p>
              </div>
            </div>
          </div>

          <Button variant="gradient" className="w-full" size="lg">
            Iniciar Treino
          </Button>
        </GlassCard>

        {/* Achievements */}
        <GlassCard>
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-secondary" />
            Conquistas Recentes
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-success mx-auto flex items-center justify-center mb-2">
                <Flame className="w-8 h-8 text-accent-foreground" />
              </div>
              <p className="text-xs font-medium">5 Dias</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto flex items-center justify-center mb-2">
                <Dumbbell className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="text-xs font-medium">10 Treinos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-secondary mx-auto flex items-center justify-center mb-2">
                <Calendar className="w-8 h-8 text-secondary-foreground" />
              </div>
              <p className="text-xs font-medium">1º Mês</p>
            </div>
          </div>
        </GlassCard>
      </div>

      <MobileNav />
    </div>
  );
};

export default Dashboard;
