import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CaregiverProps {
  id: string;
  name: string;
  foto: string;
  cidade: string;
  valorHora: number;
}

const CaregiverCard: React.FC<{ caregiver: CaregiverProps }> = ({
  caregiver,
}) => {
  const { id, name, foto, cidade, valorHora } = caregiver;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={foto}
          alt={`${name} - Cuidador(a)`}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-4">
        <h3
          className="font-bold text-lg text-secondary truncate max-w-full"
          title={name}
        >
          {name}
        </h3>

        <div className="flex items-center mt-1 text-gray-500 text-sm">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{cidade}</span>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-lg font-semibold text-secondary">
            R$ {valorHora.toFixed(2).toString().replace(".", ",")}
            <span className="text-sm font-normal text-gray-500">/hora</span>
          </div>

          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Link
              to={`/dashboard/profile-cuidador/${id}`}
              className="flex items-center gap-1"
            >
              Ver perfil
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaregiverCard;
