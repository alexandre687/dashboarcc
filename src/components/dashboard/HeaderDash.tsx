import React from "react";
import { MessageCircle, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface HeaderProps {
  userName?: string;
}

const HeaderDash: React.FC<HeaderProps> = ({ userName = "João" }) => {
  const navigate = useNavigate();
  return (
    <header className="bg-cuidados-green-dark text-white py-4 px-4 md:px-8 fixed top-0 left-0 right-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={() => navigate("/dashboard")}>
            <div className="h-8 w-8 bg-cuidados-green-light rounded-full flex items-center justify-center">
              <span className="font-bold text-cuidados-green-dark">CC</span>
            </div>
            <span className="text-lg font-semibold hidden sm:block">
              CuidadosConecta
            </span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-cuidados-green-light"
            onClick={() => navigate("/dashboard/chat")}
          >
            <MessageCircle size={20} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-cuidados-green-light">
              <Settings size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => navigate("/dashboard/acesso-cuidador")}
              >
                Acesso Cuidador
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/dashboard/perfil")}>
                Meu Perfil
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate("/dashboard/configuracoes")}
              >
                Configurações
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  localStorage.clear();
                  navigate("/entrar");
                }}
              >
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center gap-2">
            <span className="hidden sm:block">Olá, {userName}</span>
            <div className="h-8 w-8 bg-white text-cuidados-green-dark rounded-full flex items-center justify-center">
              <User size={18} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDash;
