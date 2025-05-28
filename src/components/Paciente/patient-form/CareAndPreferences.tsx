import React from "react";
import { PatientFormData } from "@/types/PatientFormTypes";
import FormStep from "@/components/FormStep";
import CheckboxGroup from "@/components/forms/CheckboxGroup";
import RadioGroup from "@/components/forms/RadioGroup";

interface CareAndPreferencesProps {
  formData: PatientFormData;
  handleCheckboxChange: (field: keyof PatientFormData, value: string) => void;
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Record<string, string>;
  isActive: boolean;
}

const CareAndPreferences: React.FC<CareAndPreferencesProps> = ({
  formData,
  handleCheckboxChange,
  handleRadioChange,
  errors,
  isActive,
}) => {
  return (
    <FormStep
      title="Cuidados Específicos e Preferências"
      description="Condições especiais e requisitos do cuidador"
      isActive={isActive}
    >
      <CheckboxGroup
        label="O paciente precisa de algum cuidado específico?"
        options={[
          { value: "dementia", label: "Demência" },
          { value: "alzheimer", label: "Alzheimer" },
          { value: "postSurgery", label: "Pós-cirúrgico" },
          { value: "reducedMobility", label: "Mobilidade reduzida" },
          { value: "parkinson", label: "Parkinson" },
          { value: "stroke", label: "AVC / Derrame" },
          { value: "diabetes", label: "Diabetes" },
          { value: "hypertension", label: "Hipertensão" },
          { value: "other", label: "Outros" },
        ]}
        selectedValues={formData.specificCareNeeds}
        onChange={(value) => handleCheckboxChange("specificCareNeeds", value)}
        required
        error={errors.specificCareNeeds}
      />

      <RadioGroup
        name="caregiverGenderPreference"
        label="Há preferência quanto ao gênero do cuidador?"
        options={[
          { value: "indifferent", label: "Indiferente" },
          { value: "male", label: "Masculino" },
          { value: "female", label: "Feminino" },
        ]}
        value={formData.caregiverGenderPreference}
        onChange={handleRadioChange}
        required
        error={errors.caregiverGenderPreference}
        className="mt-6"
      />

      <RadioGroup
        name="caregiverQualificationPreference"
        label="Há preferência quanto à formação do cuidador?"
        options={[
          { value: "technician", label: "Técnico em Enfermagem" },
          { value: "certified", label: "Cuidador certificado" },
          { value: "both", label: "Ambos" },
          { value: "indifferent", label: "Indiferente" },
        ]}
        value={formData.caregiverQualificationPreference}
        onChange={handleRadioChange}
        required
        error={errors.caregiverQualificationPreference}
        className="mt-6"
      />
    </FormStep>
  );
};

export default CareAndPreferences;
