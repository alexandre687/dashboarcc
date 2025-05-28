import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Heart, Settings, Pause } from "lucide-react";

interface ServiceOption {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const services: ServiceOption[] = [
  {
    id: "caregiver",
    title: "Cuidador de Idosos",
    icon: <User className="h-8 w-8 text-cuidados-green-dark" />,
    description: "Cuidados diários e apoio",
  },
  {
    id: "physio",
    title: "Fisioterapia",
    icon: <Settings className="h-8 w-8 text-cuidados-green-dark" />,
    description: "Reabilitação física",
  },
  {
    id: "hospital",
    title: "Acompanhamento hospitalar",
    icon: <Pause className="h-8 w-8 text-cuidados-green-dark" />,
    description: "Suporte durante internação",
  },
  {
    id: "emotional",
    title: "Apoio emocional",
    icon: <Heart className="h-8 w-8 text-cuidados-green-dark" />,
    description: "Suporte psicológico",
  },
];

interface ServiceSelectorProps {
  onServiceSelect?: (serviceId: string) => void;
}

const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  onServiceSelect,
}) => {
  const handleServiceClick = (serviceId: string) => {
    if (onServiceSelect) {
      onServiceSelect(serviceId);
    }
  };

  return (
    <div className="w-full animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="text-xl font-semibold mb-3 text-cuidados-green-dark">
        Serviços Disponíveis
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service) => (
          <Card
            key={service.id}
            className="service-card cursor-pointer hover:border-cuidados-green-light border-2 border-transparent"
            onClick={() => handleServiceClick(service.id)}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="mb-2">{service.icon}</div>
              <h3 className="font-medium text-cuidados-green-dark">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 hidden md:block">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelector;
