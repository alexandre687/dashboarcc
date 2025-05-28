import React from "react";
import { Home, Hospital, Building } from "lucide-react";
import { PatientFormData } from "@/types/PatientFormTypes";
import FormStep from "@/components/FormStep";
import RadioGroupWithIcons from "@/components/forms/RadioGroupWithIcons";
import RadioGroup from "@/components/forms/RadioGroup";

interface EnvironmentAndFrequencyProps {
  formData: PatientFormData;
  handleIconRadioChange: (value: string, fieldName: string) => void;
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Record<string, string>;
  isActive: boolean;
}

const EnvironmentAndFrequency: React.FC<EnvironmentAndFrequencyProps> = ({
  formData,
  handleIconRadioChange,
  handleRadioChange,
  errors,
  isActive,
}) => {
  return (
    <FormStep
      title="Ambiente e Frequência"
      description="Local e periodicidade dos cuidados"
      isActive={isActive}
    >
      <RadioGroupWithIcons
        name="careEnvironment"
        label="Em qual ambiente o paciente será cuidado?"
        options={[
          { value: "home", label: "Casa", icon: Home },
          { value: "hospital", label: "Hospital", icon: Hospital },
          { value: "clinic", label: "Clínica", icon: Building },
          { value: "other", label: "Outro" },
        ]}
        value={formData.careEnvironment}
        onChange={(value) => handleIconRadioChange(value, "careEnvironment")}
        required
        error={errors.careEnvironment}
      />

      <RadioGroup
        name="careFrequency"
        label="Será um cuidado pontual ou recorrente?"
        options={[
          { value: "oneTime", label: "Pontual (atendimento único)" },
          { value: "recurring", label: "Recorrente (atendimentos regulares)" },
        ]}
        value={formData.careFrequency}
        onChange={handleRadioChange}
        required
        error={errors.careFrequency}
        className="mt-6"
      />
    </FormStep>
  );
};

export default EnvironmentAndFrequency;
