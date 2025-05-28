import React from "react";

// Import form step components
import BasicInformation from "./patient-form/BasicInformation";
import EnvironmentAndFrequency from "./patient-form/EnvironmentAndFrequency";
import ShiftsAndDependency from "./patient-form/ShiftsAndDependency";
import CareAndPreferences from "./patient-form/CareAndPreferences";
import CaregiverCharacteristics from "./patient-form/CaregiverCharacteristics";
import { usePatientForm } from "@/hooks/usePatientForm";
import FormProgress from "../FormProgress";
import ButtonGroup from "../ButtonGroup";

const PatientRegistrationForm: React.FC = () => {
  const {
    formData,
    currentStep,
    totalSteps,
    errors,
    isSubmitting,
    handleInputChange,
    handleIconRadioChange,
    handleRadioChange,
    handleCheckboxChange,
    handlePrevious,
    handleNext,
    isStepValid,
  } = usePatientForm();

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-cc-dark-green mb-2">
          Cadastro de Paciente
        </h1>
        <p className="text-gray-600">
          Preencha os dados para encontrarmos o cuidador ideal
        </p>
      </div>

      <div className="cc-card">
        <FormProgress currentStep={currentStep} totalSteps={totalSteps} />

        <form className="space-y-6">
          {/* Step 1: Basic Information */}
          <BasicInformation
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
            isActive={currentStep === 1}
          />

          {/* Step 2: Environment and Frequency */}
          <EnvironmentAndFrequency
            formData={formData}
            handleIconRadioChange={handleIconRadioChange}
            handleRadioChange={handleRadioChange}
            errors={errors}
            isActive={currentStep === 2}
          />

          {/* Step 3: Shifts and Dependency */}
          <ShiftsAndDependency
            formData={formData}
            handleCheckboxChange={handleCheckboxChange}
            handleRadioChange={handleRadioChange}
            errors={errors}
            isActive={currentStep === 3}
          />

          {/* Step 4: Specific Care and Preferences */}
          <CareAndPreferences
            formData={formData}
            handleCheckboxChange={handleCheckboxChange}
            handleRadioChange={handleRadioChange}
            errors={errors}
            isActive={currentStep === 4}
          />

          {/* Step 5: Professional Characteristics */}
          <CaregiverCharacteristics
            formData={formData}
            handleCheckboxChange={handleCheckboxChange}
            errors={errors}
            isActive={currentStep === 5}
          />

          <ButtonGroup
            currentStep={currentStep}
            totalSteps={totalSteps}
            onPrevious={handlePrevious}
            onNext={handleNext}
            isValid={isStepValid(currentStep)}
            isSubmitting={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default PatientRegistrationForm;
