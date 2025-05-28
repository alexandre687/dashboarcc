import CaregiverCarousel from "@/components/CaregiverCarousel";
import Header from "@/components/dashboard/HeaderDash";
import PatientProfileCard from "@/components/PatientProfileCard";
import SafetyPlansSection from "@/components/SafetyPlansSection";
import ServiceSelector from "@/components/ServiceSelector";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface DashboardProps {
  patientName?: string;
  patientRelation?: string;
}

const Dashboard: React.FC<DashboardProps> = ({
  patientName,
  patientRelation = "pai",
}) => {
  const [isProfileComplete] = useState(!!patientName);

  const handleServiceSelect = (serviceId: string) => {
    toast.info(`Serviço selecionado: ${serviceId}`, {
      description: "Você será redirecionado para o fluxo de solicitação.",
    });
  };

  const handleViewCaregiverProfile = (caregiverId: string) => {
    toast.info(`Visualizando perfil do cuidador ${caregiverId}`);
  };

  const handleSafetyPlanSelect = (planId: string) => {
    toast.info(`Plano selecionado: ${planId}`, {
      description: "Você será redirecionado para informações sobre este plano.",
    });
  };

  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      fetch(
        import.meta.env.VITE_URL_USUARIO +
          `?localId=${localStorage.getItem(
            "id"
          )}&idToken=${localStorage.getItem("token")}`,
        requestOptions
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao buscar dados do usuário");
          }

          if (response.status === 401) {
            toast.error("Sessão expirada. Faça login novamente.");
            localStorage.clear();
            navigate("/entrar");
          }

          const retorno = response.json();

          retorno.then((data) => {
            const { fields } = data;
            const display_name = fields.display_name;
            setUserName(display_name.stringValue);
          });
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Erro:", error);
        });
    };

    fetchData();
  }, []);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="mt-20 mb-6 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h1 className="text-2xl font-bold text-cuidados-green-dark mb-2">
              Olá, {userName}!
            </h1>
            <p className="text-gray-600">
              {isProfileComplete
                ? `Como podemos ajudar seu ${patientRelation} hoje?`
                : "Comece criando o perfil do paciente para receber recomendações personalizadas."}
            </p>
          </div>

          <div className="grid gap-6">
            <PatientProfileCard
              patientName={patientName}
              patientAge={78}
              patientGender="Masculino"
              dependencyLevel="Moderada"
              isProfileComplete={isProfileComplete}
            />

            <ServiceSelector onServiceSelect={handleServiceSelect} />

            <CaregiverCarousel
              onViewCaregiverProfile={handleViewCaregiverProfile}
            />

            <SafetyPlansSection onPlanSelect={handleSafetyPlanSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
