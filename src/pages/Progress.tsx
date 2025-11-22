import { GlassCard } from "@/components/GlassCard";
import { MobileNav } from "@/components/MobileNav";
import { TrendingUp, Calendar, Weight, Ruler } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Progress = () => {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-success p-6">
        <h1 className="text-2xl font-bold text-accent-foreground mb-2">
          Sua Evolução
        </h1>
        <p className="text-accent-foreground/80 text-sm">
          Acompanhe seu progresso
        </p>
      </div>

      {/* Content */}
      <div className="p-4">
        <Tabs defaultValue="stats" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="stats">Estatísticas</TabsTrigger>
            <TabsTrigger value="physical">Físico</TabsTrigger>
            <TabsTrigger value="records">Records</TabsTrigger>
          </TabsList>

          <TabsContent value="stats" className="space-y-4">
            {/* Monthly Stats */}
            <GlassCard strong>
              <h3 className="font-bold text-lg mb-4">Últimos 30 Dias</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Treinos Realizados</p>
                      <p className="text-xs text-muted-foreground">Este mês</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold">12</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Consistência</p>
                      <p className="text-xs text-muted-foreground">
                        vs meta semanal
                      </p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-accent">85%</span>
                </div>
              </div>
            </GlassCard>

            {/* Weekly Chart Placeholder */}
            <GlassCard>
              <h3 className="font-bold text-lg mb-4">Frequência Semanal</h3>
              <div className="flex items-end justify-between gap-2 h-40">
                {[3, 4, 5, 2, 4, 3, 4].map((value, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-primary rounded-t-lg transition-all"
                      style={{ height: `${(value / 5) * 100}%` }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {["D", "S", "T", "Q", "Q", "S", "S"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </TabsContent>

          <TabsContent value="physical" className="space-y-4">
            {/* Weight Progress */}
            <GlassCard strong>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Peso Corporal</h3>
                <Weight className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-4xl font-bold">75.2</span>
                <span className="text-muted-foreground mb-1">kg</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-accent">-2.3 kg</span>
                <span className="text-muted-foreground">desde início</span>
              </div>
            </GlassCard>

            {/* Measurements */}
            <GlassCard>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Medidas</h3>
                <Ruler className="w-5 h-5 text-secondary" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Braço</p>
                  <p className="text-xl font-bold">38 cm</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Peitoral</p>
                  <p className="text-xl font-bold">102 cm</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Cintura</p>
                  <p className="text-xl font-bold">82 cm</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Coxa</p>
                  <p className="text-xl font-bold">56 cm</p>
                </div>
              </div>
            </GlassCard>

            {/* Photo Comparison */}
            <GlassCard>
              <h3 className="font-bold text-lg mb-4">Evolução Visual</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="aspect-square bg-muted rounded-lg mb-2" />
                  <p className="text-xs text-center text-muted-foreground">
                    Jan 2025
                  </p>
                </div>
                <div>
                  <div className="aspect-square bg-muted rounded-lg mb-2" />
                  <p className="text-xs text-center text-muted-foreground">
                    Hoje
                  </p>
                </div>
              </div>
            </GlassCard>
          </TabsContent>

          <TabsContent value="records" className="space-y-4">
            <GlassCard strong>
              <h3 className="font-bold text-lg mb-4">Personal Records (PRs)</h3>
              <div className="space-y-4">
                {[
                  { exercise: "Supino Reto", weight: "80kg", reps: "8 reps" },
                  { exercise: "Agachamento", weight: "120kg", reps: "10 reps" },
                  { exercise: "Levantamento Terra", weight: "140kg", reps: "6 reps" },
                  { exercise: "Desenvolvimento", weight: "50kg", reps: "12 reps" },
                ].map((record, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{record.exercise}</p>
                      <p className="text-xs text-muted-foreground">{record.reps}</p>
                    </div>
                    <span className="text-lg font-bold text-primary">
                      {record.weight}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </TabsContent>
        </Tabs>
      </div>

      <MobileNav />
    </div>
  );
};

export default Progress;
