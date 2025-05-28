import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CaregiverCard from "./CaregiverCard";

interface CaregiverCarouselProps {
  onViewCaregiverProfile?: (id: string) => void;
}

const CaregiverCarousel: React.FC<CaregiverCarouselProps> = ({
  onViewCaregiverProfile,
}) => {
  // Sample data for caregivers with video URLs
  const [caregivers, setCaregivers] = useState([]);
  useEffect(() => {
    const cuidadoresEmDestaque = async () => {
      const response = await fetch(import.meta.env.VITE_URL_CUIDADORES);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCaregivers(data.pessoas.slice(0, 5)); // Limitar a 10 cuidadores
    };

    cuidadoresEmDestaque()
      .then(() => {
        console.log("Cuidadores em destaque carregados com sucesso");
      })
      .catch((error) => {
        console.error("Error fetching caregivers:", error);
      });
  }, []);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const { scrollLeft, clientWidth } = carouselRef.current;
    const scrollTo =
      direction === "left"
        ? scrollLeft - clientWidth * 0.7
        : scrollLeft + clientWidth * 0.7;

    carouselRef.current.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });

    setScrollPosition(scrollTo);
  };

  const handleViewProfile = (id: string) => {
    if (onViewCaregiverProfile) {
      onViewCaregiverProfile(id);
    }
  };

  return (
    <div className="w-full animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-cuidados-green-dark">
          Cuidadores Recomendados
        </h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="border-cuidados-green-light text-cuidados-green-dark hover:bg-cuidados-green-light hover:text-white"
            onClick={() => scroll("left")}
          >
            <ArrowLeft size={18} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-cuidados-green-light text-cuidados-green-dark hover:bg-cuidados-green-light hover:text-white"
            onClick={() => scroll("right")}
          >
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 snap-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {caregivers.map((caregiver) => (
          <div key={caregiver.id} className="min-w-[270px] snap-start">
            <CaregiverCard
              key={caregiver.id}
              caregiver={caregiver}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaregiverCarousel;
