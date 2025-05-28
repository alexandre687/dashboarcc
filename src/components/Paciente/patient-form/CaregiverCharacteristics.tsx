import React from "react";
import { PatientFormData } from "@/types/PatientFormTypes";
import FormStep from "@/components/FormStep";
import CheckboxGroup from "@/components/forms/CheckboxGroup";

interface CaregiverCharacteristicsProps {
  formData: PatientFormData;
  handleCheckboxChange: (field: keyof PatientFormData, value: string) => void;
  errors: Record<string, string>;
  isActive: boolean;
}

const CaregiverCharacteristics: React.FC<CaregiverCharacteristicsProps> = ({
  formData,
  handleCheckboxChange,
  errors,
  isActive,
}) => {
  return (
    <FormStep
      title="Características do Profissional"
      description="Qualidades desejadas no cuidador"
      isActive={isActive}
    >
      <CheckboxGroup
        label="Quais características são importantes no cuidador?"
        options={[
          { value: "empathy", label: "Empatia" },
          { value: "punctuality", label: "Pontualidade" },
          { value: "elderlyExperience", label: "Experiência com idosos" },
          { value: "communication", label: "Boa comunicação" },
          { value: "flexibility", label: "Flexibilidade" },
          { value: "patience", label: "Paciência" },
          { value: "proactivity", label: "Proatividade" },
          { value: "organization", label: "Organização" },
          { value: "carefulness", label: "Cuidado e atenção aos detalhes" },
        ]}
        selectedValues={formData.caregiverCharacteristics}
        onChange={(value) =>
          handleCheckboxChange("caregiverCharacteristics", value)
        }
        required
        error={errors.caregiverCharacteristics}
      />
    </FormStep>
  );
};

export default CaregiverCharacteristics;
