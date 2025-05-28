import React from "react";
import CaregiverCard, { CaregiverProps } from "./CaregiverCard";

interface CaregiverListProps {
  caregivers: CaregiverProps[];
  isLoading?: boolean;
}

const CaregiverList: React.FC<CaregiverListProps> = ({
  caregivers,
  isLoading = false,
}) => {
  console.log("CaregiverList rendered with caregivers:", caregivers);
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg h-80 animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  if (caregivers.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-700">
          Nenhum cuidador encontrado
        </h3>
        <p className="text-gray-500 mt-2">
          Tente ajustar seus filtros de busca.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {caregivers.map((caregiver) => (
        <CaregiverCard key={caregiver.id} caregiver={caregiver} />
      ))}
    </div>
  );
};

export default CaregiverList;
