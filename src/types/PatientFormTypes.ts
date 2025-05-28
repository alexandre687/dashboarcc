export interface PatientFormData {
  // Step 1: Basic Information
  fullName: string;
  birthDate: string;
  gender: string;
  zipCode: string;
  address: string;
  addressComplement: string;

  // Step 2: Environment and Frequency
  careEnvironment: string;
  careFrequency: string;

  // Step 3: Shifts and Dependency
  careShifts: string[];
  dependencyLevel: string;

  // Step 4: Specific Care and Preferences
  specificCareNeeds: string[];
  caregiverGenderPreference: string;
  caregiverQualificationPreference: string;

  // Step 5: Professional Characteristics
  caregiverCharacteristics: string[];
}
