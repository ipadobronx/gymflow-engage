import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dumbbell } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate based on role
    navigate(isAdmin ? "/admin" : "/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-pulse" />
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-4 shadow-primary">
            <Dumbbell className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            GymFlow
          </h1>
          <p className="text-muted-foreground mt-2">Seu treino, sua evolução</p>
        </div>

        <div className="glass-strong rounded-lg p-8 shadow-glass">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-12"
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
                className="w-4 h-4 rounded border-border"
              />
              <Label htmlFor="admin" className="text-sm text-muted-foreground">
                Entrar como administrador
              </Label>
            </div>

            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="w-full"
            >
              Entrar
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Esqueceu sua senha?{" "}
              <button type="button" className="text-primary hover:underline">
                Recuperar
              </button>
            </p>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Não tem conta?{" "}
          <button className="text-primary hover:underline">
            Cadastre-se agora
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
