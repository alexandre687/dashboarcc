import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { PatientFormData } from "@/types/PatientFormTypes";

export const usePatientForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState<PatientFormData>({
    fullName: "",
    birthDate: "",
    gender: "",
    zipCode: "",
    address: "",
    addressComplement: "",
    careEnvironment: "",
    careFrequency: "",
    careShifts: [],
    dependencyLevel: "",
    specificCareNeeds: [],
    caregiverGenderPreference: "",
    caregiverQualificationPreference: "",
    caregiverCharacteristics: [],
  });

  // Form validation
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.fullName)
          newErrors.fullName = "O nome completo é obrigatório";
        if (!formData.birthDate)
          newErrors.birthDate = "A data de nascimento é obrigatória";
        if (!formData.gender) newErrors.gender = "O gênero é obrigatório";
        if (!formData.zipCode) newErrors.zipCode = "O CEP é obrigatório";
        if (!formData.address) newErrors.address = "O endereço é obrigatório";
        break;
      case 2:
        if (!formData.careEnvironment)
          newErrors.careEnvironment = "O ambiente de cuidado é obrigatório";
        if (!formData.careFrequency)
          newErrors.careFrequency = "A frequência de cuidado é obrigatória";
        break;
      case 3:
        if (formData.careShifts.length === 0)
          newErrors.careShifts = "Selecione pelo menos um turno";
        if (!formData.dependencyLevel)
          newErrors.dependencyLevel = "O nível de dependência é obrigatório";
        break;
      case 4:
        if (formData.specificCareNeeds.length === 0)
          newErrors.specificCareNeeds =
            "Selecione pelo menos uma necessidade específica";
        if (!formData.caregiverGenderPreference)
          newErrors.caregiverGenderPreference =
            "A preferência de gênero é obrigatória";
        if (!formData.caregiverQualificationPreference)
          newErrors.caregiverQualificationPreference =
            "A preferência de qualificação é obrigatória";
        break;
      case 5:
        if (formData.caregiverCharacteristics.length === 0)
          newErrors.caregiverCharacteristics =
            "Selecione pelo menos uma característica";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(
          formData.fullName &&
          formData.birthDate &&
          formData.gender &&
          formData.zipCode &&
          formData.address
        );
      case 2:
        return !!(formData.careEnvironment && formData.careFrequency);
      case 3:
        return !!(formData.careShifts.length > 0 && formData.dependencyLevel);
      case 4:
        return !!(
          formData.specificCareNeeds.length > 0 &&
          formData.caregiverGenderPreference &&
          formData.caregiverQualificationPreference
        );
      case 5:
        return formData.caregiverCharacteristics.length > 0;
      default:
        return false;
    }
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleIconRadioChange = (value: string, fieldName: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (
    field: keyof PatientFormData,
    value: string
  ) => {
    setFormData((prev) => {
      if (Array.isArray(prev[field])) {
        const currentValues = prev[field] as string[];
        const newValues = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value];

        return { ...prev, [field]: newValues };
      }
      return prev;
    });
  };

  // Handle navigation between steps
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = async () => {
    const isValid = validateStep(currentStep);

    if (isValid) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Submit the form
        await handleSubmit();
      }
    }
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        "Cadastro enviado com sucesso! Redirecionando para a confirmação..."
      );

      setTimeout(() => {
        navigate("/dashboard/paciente/confirmacao");
      }, 1500);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar formulário. Por favor, tente novamente.");
      setIsSubmitting(false);
    }
  };

  return {
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
  };
};
