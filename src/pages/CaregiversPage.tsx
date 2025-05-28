import React, { useEffect, useState } from "react";
import SearchFilters from "@/components/SearchFilters";
import CaregiverList from "@/components/CaregiverList";
import { useToast } from "@/hooks/use-toast";

interface FilterValues {
  location: string;
  availability: string;
  specialties: string[];
}

const CaregiversPage: React.FC = () => {
  const [filteredCaregivers, setFilteredCaregivers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const [caregivers, setCaregivers] = React.useState([]);
  useEffect(() => {
    const cuidadoresEmDestaque = async () => {
      const response = await fetch(import.meta.env.VITE_URL_CUIDADORES);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCaregivers(data.pessoas);
    };

    cuidadoresEmDestaque()
      .then(() => {
        console.log("Cuidadores em destaque carregados com sucesso");
      })
      .catch((error) => {
        console.error("Error fetching caregivers:", error);
      });
  }, []);

  const handleSearch = (filters: FilterValues) => {
    setIsLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      let results = [...caregivers];

      if (filters.location) {
        results = results.filter((caregiver) =>
          caregiver.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())
        );
      }

      if (filters.specialties.length > 0) {
        results = results.filter((caregiver) =>
          filters.specialties.some((specialty) =>
            caregiver.specialties.find(
              (s) => s.toLowerCase() === specialty.toLowerCase()
            )
          )
        );
      }

      setFilteredCaregivers(results);
      setIsLoading(false);

      toast({
        title: `${results.length} cuidadores encontrados`,
        description: "Resultados filtrados com sucesso.",
      });
    }, 800);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-secondary py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white text-center font-nunito mb-8">
            Encontre o Cuidador Ideal
          </h1>
          <div className="max-w-4xl mx-auto">
            <SearchFilters onSearch={handleSearch} />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-secondary font-nunito">
              Cuidadores Disponíveis
            </h2>
            <div className="text-gray-600">
              {filteredCaregivers.length} resultados
            </div>
          </div>

          <CaregiverList
            caregivers={filteredCaregivers}
            isLoading={isLoading}
          />
        </div>
      </section>
    </div>
  );
};

export default CaregiversPage;
