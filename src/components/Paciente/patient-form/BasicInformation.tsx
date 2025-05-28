import React from "react";
import { PatientFormData } from "@/types/PatientFormTypes";
import FormStep from "@/components/FormStep";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

interface BasicInformationProps {
  formData: PatientFormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  errors: Record<string, string>;
  isActive: boolean;
}

const BasicInformation: React.FC<BasicInformationProps> = ({
  formData,
  handleInputChange,
  errors,
  isActive,
}) => {
  return (
    <FormStep
      title="Informações Básicas"
      description="Dados pessoais e localização do paciente"
      isActive={isActive}
    >
      <InputField
        id="fullName"
        label="Nome completo do paciente"
        placeholder="Digite o nome completo"
        value={formData.fullName}
        onChange={handleInputChange}
        required
        error={errors.fullName}
      />

      <InputField
        id="birthDate"
        label="Data de nascimento"
        type="date"
        value={formData.birthDate}
        onChange={handleInputChange}
        required
        error={errors.birthDate}
        className="mt-4"
      />

      <SelectField
        id="gender"
        label="Gênero"
        options={[
          { value: "male", label: "Masculino" },
          { value: "female", label: "Feminino" },
          { value: "other", label: "Outro" },
        ]}
        value={formData.gender}
        onChange={handleInputChange}
        required
        error={errors.gender}
        placeholder="Selecione o gênero"
        className="mt-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <InputField
          id="zipCode"
          label="CEP"
          placeholder="00000-000"
          value={formData.zipCode}
          onChange={handleInputChange}
          required
          error={errors.zipCode}
        />

        <InputField
          id="address"
          label="Endereço do paciente"
          placeholder="Rua, número, bairro, cidade"
          value={formData.address}
          onChange={handleInputChange}
          required
          error={errors.address}
        />
      </div>

      <InputField
        id="addressComplement"
        label="Complemento"
        placeholder="Apartamento, bloco, referência, etc."
        value={formData.addressComplement}
        onChange={handleInputChange}
        className="mt-4"
      />
    </FormStep>
  );
};

export default BasicInformation;
