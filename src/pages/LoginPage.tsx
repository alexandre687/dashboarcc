import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(import.meta.env.VITE_URL_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: (e.target as HTMLFormElement).email.value,
        password: (e.target as HTMLFormElement).password.value,
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      let json = response.json();

      json
        .then((data) => {
          if (data.registered) {
            localStorage.setItem("token", data.idToken);
            localStorage.setItem("id", data.localId);
            navigate("/dashboard");
          } else {
            alert(data.message);
          }
        })
        .catch((error) => {
          console.error("Error parsing JSON:", error);
        });
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">
                Entrar
              </CardTitle>
              <CardDescription className="text-center">
                Entre na sua conta para acessar o CuidadosConecta
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Senha</Label>
                      <Link
                        to="/recuperar-senha"
                        className="text-sm text-primary hover:underline"
                      >
                        Esqueceu a senha?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label
                      htmlFor="remember"
                      className="text-sm cursor-pointer"
                    >
                      Lembrar de mim
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Entrar
                  </Button>
                </div>
              </form>

              <div className="mt-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      ou continue com
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Button variant="outline">
                    <img
                      src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
                      alt="Google"
                      className="h-4 w-4 mr-2"
                    />
                    Google
                  </Button>
                  <Button variant="outline">
                    <img
                      src="https://cdn.cdnlogo.com/logos/f/84/facebook-icon-2019.svg"
                      alt="Facebook"
                      className="h-4 w-4 mr-2"
                    />
                    Facebook
                  </Button>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-center">
              <div className="text-sm text-gray-600">
                Não tem uma conta?{" "}
                <Link
                  to="/cadastrar"
                  className="text-primary font-medium hover:underline"
                >
                  Cadastre-se
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
