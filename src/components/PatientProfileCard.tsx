import React from "react";
import { User, Edit, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface PatientProfileCardProps {
  patientName?: string;
  patientAge?: number;
  patientGender?: string;
  dependencyLevel?: string;
  isProfileComplete?: boolean;
}

const PatientProfileCard: React.FC<PatientProfileCardProps> = ({
  patientName,
  patientAge,
  patientGender,
  dependencyLevel = "Moderada",
  isProfileComplete = false,
}) => {
  const navigate = useNavigate();
  return (
    <Card className="w-full overflow-hidden shadow-md animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 bg-cuidados-green-light/10 rounded-full flex items-center justify-center text-cuidados-green-dark">
            <User size={32} />
          </div>
          <div className="flex-1">
            {isProfileComplete ? (
              <>
                <h3 className="text-xl font-semibold text-cuidados-green-dark">
                  {patientName}
                </h3>
                <div className="text-sm text-gray-600 mt-1">
                  <span>{patientAge} anos</span> • <span>{patientGender}</span>{" "}
                  • <span>Dependência {dependencyLevel}</span>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-cuidados-green-dark">
                  Perfil do Paciente
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Adicione informações sobre o paciente para recomendações
                  personalizadas
                </p>
              </>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-6 py-3">
        <Button className="bg-cuidados-green-light hover:bg-cuidados-green-dark text-white w-full flex items-center gap-2 rounded-xl" onClick={() => {
          navigate("/dashboard/paciente/cadastrar");
        }}>
          {isProfileComplete ? (
            <>
              <Edit size={18} /> Editar perfil
            </>
          ) : (
            <>
              <Plus size={18} /> Criar perfil do paciente
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PatientProfileCard;
