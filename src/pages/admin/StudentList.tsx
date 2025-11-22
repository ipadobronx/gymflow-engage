import { GlassCard } from "@/components/GlassCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Plus, TrendingUp, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Student {
  id: number;
  name: string;
  email: string;
  lastWorkout: string;
  frequency: number;
  status: "active" | "warning" | "risk";
}

const students: Student[] = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@email.com",
    lastWorkout: "Hoje",
    frequency: 4.5,
    status: "active",
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@email.com",
    lastWorkout: "14 dias atrás",
    frequency: 1.2,
    status: "risk",
  },
  {
    id: 3,
    name: "Pedro Costa",
    email: "pedro@email.com",
    lastWorkout: "3 dias atrás",
    frequency: 3.1,
    status: "active",
  },
  {
    id: 4,
    name: "Ana Silva",
    email: "ana@email.com",
    lastWorkout: "8 dias atrás",
    frequency: 2.3,
    status: "warning",
  },
];

const StudentList = () => {
  const navigate = useNavigate();

  const getStatusColor = (status: Student["status"]) => {
    switch (status) {
      case "active":
        return "bg-accent/20 text-accent";
      case "warning":
        return "bg-secondary/20 text-secondary";
      case "risk":
        return "bg-destructive/20 text-destructive";
    }
  };

  const getStatusLabel = (status: Student["status"]) => {
    switch (status) {
      case "active":
        return "Ativo";
      case "warning":
        return "Atenção";
      case "risk":
        return "Risco";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary p-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-primary-foreground mb-2">
            Alunos
          </h1>
          <p className="text-primary-foreground/80">
            Gerencie e acompanhe seus alunos
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome ou email..."
              className="h-12 pl-10"
            />
          </div>
          <Button variant="outline" size="lg">
            <Filter className="w-5 h-5 mr-2" />
            Filtros
          </Button>
          <Button
            variant="gradient"
            size="lg"
            onClick={() => navigate("/admin/students/new")}
          >
            <Plus className="w-5 h-5 mr-2" />
            Novo Aluno
          </Button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlassCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Alunos</p>
                <p className="text-3xl font-bold mt-1">127</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
            </div>
          </GlassCard>
          <GlassCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Ativos (7 dias)</p>
                <p className="text-3xl font-bold mt-1">94</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
            </div>
          </GlassCard>
          <GlassCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Em Risco</p>
                <p className="text-3xl font-bold mt-1 text-destructive">8</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Students Table */}
        <GlassCard strong>
          <div className="space-y-3">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => navigate(`/admin/students/${student.id}`)}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold">
                      {student.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {student.email}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-8">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Último treino</p>
                    <p className="font-medium">{student.lastWorkout}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      Frequência
                    </p>
                    <p className="font-medium">{student.frequency}x/sem</p>
                  </div>
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium",
                      getStatusColor(student.status)
                    )}
                  >
                    {getStatusLabel(student.status)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default StudentList;
