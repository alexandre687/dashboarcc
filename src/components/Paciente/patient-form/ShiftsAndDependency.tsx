import React from "react";
import { Sun, SunDim, Moon, MoonStar, Clock } from "lucide-react";
import { PatientFormData } from "@/types/PatientFormTypes";
import FormStep from "@/components/FormStep";
import RadioGroupWithIcons from "@/components/forms/RadioGroupWithIcons";
import RadioGroup from "@/components/forms/RadioGroup";

interface ShiftsAndDependencyProps {
  formData: PatientFormData;
  handleCheckboxChange: (field: keyof PatientFormData, value: string) => void;
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Record<string, string>;
  isActive: boolean;
}

const ShiftsAndDependency: React.FC<ShiftsAndDependencyProps> = ({
  formData,
  handleCheckboxChange,
  handleRadioChange,
  errors,
  isActive,
}) => {
  return (
    <FormStep
      title="Turnos e Dependência"
      description="Horários e necessidades de assistência"
      isActive={isActive}
    >
      <RadioGroupWithIcons
        name="careShifts"
        label="Quais os turnos desejados para o atendimento?"
        options={[
          {
            value: "morning",
            label: "Manhã",
            description: "6h às 12h",
            icon: Sun,
          },
          {
            value: "afternoon",
            label: "Tarde",
            description: "12h às 18h",
            icon: SunDim,
          },
          {
            value: "night",
            label: "Noite",
            description: "18h às 0h",
            icon: Moon,
          },
          {
            value: "dawn",
            label: "Madrugada",
            description: "0h às 6h",
            icon: MoonStar,
          },
          { value: "24hours", label: "Plantão 24h", icon: Clock },
        ]}
        multiple={true}
        selectedValues={formData.careShifts}
        onMultiChange={(value) => handleCheckboxChange("careShifts", value)}
        required
        error={errors.careShifts}
        columns={3}
      />

      <RadioGroup
        name="dependencyLevel"
        label="Qual o nível de dependência do paciente?"
        options={[
          {
            value: "autonomous",
            label: "Autônomo (precisa de supervisão e auxílio mínimo)",
          },
          {
            value: "partial",
            label: "Parcial (precisa de auxílio em algumas atividades)",
          },
          {
            value: "total",
            label: "Total (precisa de auxílio em todas as atividades)",
          },
        ]}
        value={formData.dependencyLevel}
        onChange={handleRadioChange}
        required
        error={errors.dependencyLevel}
        className="mt-6"
      />
    </FormStep>
  );
};

export default ShiftsAndDependency;
