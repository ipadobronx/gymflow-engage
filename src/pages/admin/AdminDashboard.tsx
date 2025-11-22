import { GlassCard } from "@/components/GlassCard";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import {
  Users,
  TrendingUp,
  AlertTriangle,
  Activity,
  Search,
  Plus,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary p-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-primary-foreground mb-2">
            Dashboard Admin
          </h1>
          <p className="text-primary-foreground/80">
            Gerencie sua academia e monitore seus alunos
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Alunos Ativos"
            value="127"
            icon={Users}
            trend="+12 este mês"
            trendUp
            iconColor="text-primary"
          />
          <StatCard
            title="Em Risco de Churn"
            value="8"
            icon={AlertTriangle}
            trend="7+ dias sem treinar"
            trendUp={false}
            iconColor="text-destructive"
          />
          <StatCard
            title="Frequência Média"
            value="3.2"
            icon={Activity}
            trend="treinos/semana"
            trendUp
            iconColor="text-accent"
          />
          <StatCard
            title="Taxa de Retenção"
            value="94%"
            icon={TrendingUp}
            trend="+5% vs mês anterior"
            trendUp
            iconColor="text-secondary"
          />
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Buscar aluno..."
              className="h-12 pl-10"
            />
          </div>
          <Button
            variant="gradient"
            size="lg"
            onClick={() => navigate("/admin/students/new")}
          >
            <Plus className="w-5 h-5 mr-2" />
            Novo Aluno
          </Button>
        </div>

        {/* At Risk Students */}
        <GlassCard strong>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-xl">Alunos em Risco</h3>
            <AlertTriangle className="w-6 h-6 text-destructive" />
          </div>
          <div className="space-y-3">
            {[
              { name: "Maria Santos", days: 14, phone: "(11) 99999-1111" },
              { name: "Pedro Costa", days: 10, phone: "(11) 99999-2222" },
              { name: "Ana Silva", days: 8, phone: "(11) 99999-3333" },
            ].map((student, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                onClick={() => navigate(`/admin/students/${i}`)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                    <span className="text-lg">⚠️</span>
                  </div>
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {student.phone}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-destructive">
                    {student.days} dias
                  </p>
                  <p className="text-xs text-muted-foreground">sem treinar</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            Ver Todos
          </Button>
        </GlassCard>

        {/* Recent Activity */}
        <GlassCard>
          <h3 className="font-bold text-xl mb-4">Atividade Recente</h3>
          <div className="space-y-3">
            {[
              { user: "João Silva", action: "Completou treino A", time: "5 min atrás" },
              { user: "Carla Lima", action: "Registrou avaliação física", time: "1h atrás" },
              { user: "Bruno Souza", action: "Bateu meta semanal", time: "2h atrás" },
              { user: "Juliana Rocha", action: "Novo record em supino", time: "3h atrás" },
            ].map((activity, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.user}</p>
                  <p className="text-xs text-muted-foreground">{activity.action}</p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default AdminDashboard;
