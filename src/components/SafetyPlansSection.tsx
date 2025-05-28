import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Camera } from "lucide-react";
import { toast } from "sonner";

interface SafetyPlanOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  imageSrc: string;
}

const safetyPlans: SafetyPlanOption[] = [
  {
    id: "sos-watch",
    title: "Relógio SOS",
    description: "Botão de emergência com GPS e ligação direta",
    icon: <Bell className="h-6 w-6" />,
    buttonText: "Ver planos",
    imageSrc:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "camera-plan",
    title: "Plano de Câmeras",
    description: "Acompanhe o cuidado em tempo real pela câmera da casa",
    icon: <Camera className="h-6 w-6" />,
    buttonText: "Conhecer serviço",
    imageSrc:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
  },
];

interface SafetyPlansSectionProps {
  onPlanSelect?: (planId: string) => void;
}

const SafetyPlansSection: React.FC<SafetyPlansSectionProps> = ({
  onPlanSelect,
}) => {
  const handlePlanClick = (planId: string) => {
    if (onPlanSelect) {
      onPlanSelect(planId);
    } else {
      toast.info(`Serviço selecionado: ${planId}`, {
        description:
          "Você será redirecionado para informações sobre este serviço.",
      });
    }
  };

  return (
    <div className="w-full animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <h2 className="text-xl font-semibold mb-3 text-cuidados-green-dark">
        Proteja ainda mais quem você ama
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {safetyPlans.map((plan) => (
          <Card
            key={plan.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <img
                src={plan.imageSrc}
                alt={plan.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 flex items-end p-4">
                <div className="flex items-center text-white">
                  {plan.icon}
                  <h3 className="ml-2 font-semibold text-lg">{plan.title}</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <Button
                onClick={() => handlePlanClick(plan.id)}
                variant="default"
                className="w-full bg-cuidados-green-light hover:bg-cuidados-green-dark"
              >
                {plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SafetyPlansSection;
