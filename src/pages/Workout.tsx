import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import { Check, Circle, Play, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Exercise {
  id: string;
  name: string;
  sets: string;
  completed: boolean;
}

const Workout = () => {
  const [exercises, setExercises] = useState<Exercise[]>([
    { id: "1", name: "Supino Reto", sets: "4x12", completed: false },
    { id: "2", name: "Supino Inclinado", sets: "3x12", completed: false },
    { id: "3", name: "Crucifixo", sets: "3x15", completed: false },
    { id: "4", name: "Tríceps Pulley", sets: "3x15", completed: false },
    { id: "5", name: "Tríceps Francês", sets: "3x12", completed: false },
  ]);

  const toggleExercise = (id: string) => {
    setExercises((prev) =>
      prev.map((ex) => (ex.id === id ? { ...ex, completed: !ex.completed } : ex))
    );
  };

  const completedCount = exercises.filter((ex) => ex.completed).length;
  const progress = (completedCount / exercises.length) * 100;

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-secondary p-6">
        <h1 className="text-2xl font-bold text-secondary-foreground mb-2">
          Treino A
        </h1>
        <p className="text-secondary-foreground/80 text-sm">
          Peito e Tríceps
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-secondary-foreground/90 mb-2">
            <span>Progresso</span>
            <span className="font-bold">
              {completedCount}/{exercises.length}
            </span>
          </div>
          <div className="h-2 bg-secondary-foreground/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-secondary-foreground transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Exercises List */}
      <div className="p-4 space-y-3">
        {exercises.map((exercise) => (
          <GlassCard
            key={exercise.id}
            strong
            className={cn(
              "cursor-pointer transition-all",
              exercise.completed && "opacity-60"
            )}
            onClick={() => toggleExercise(exercise.id)}
          >
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all",
                  exercise.completed
                    ? "bg-accent border-accent"
                    : "border-border"
                )}
              >
                {exercise.completed ? (
                  <Check className="w-6 h-6 text-accent-foreground" />
                ) : (
                  <Circle className="w-6 h-6 text-muted-foreground" />
                )}
              </button>
              <div className="flex-1">
                <h3
                  className={cn(
                    "font-medium",
                    exercise.completed && "line-through"
                  )}
                >
                  {exercise.name}
                </h3>
                <p className="text-sm text-muted-foreground">{exercise.sets}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Action Button */}
      <div className="fixed bottom-24 left-0 right-0 p-4">
        {completedCount === exercises.length ? (
          <Button
            variant="gradient"
            size="lg"
            className="w-full shadow-2xl"
          >
            <Check className="w-5 h-5 mr-2" />
            Finalizar Treino
          </Button>
        ) : (
          <Button
            variant="glass"
            size="lg"
            className="w-full border-primary/30"
          >
            <Play className="w-5 h-5 mr-2" />
            Continuar Treino
          </Button>
        )}
      </div>

      <MobileNav />
    </div>
  );
};

export default Workout;
