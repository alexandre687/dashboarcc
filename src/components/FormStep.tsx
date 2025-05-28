
import React from 'react';

interface FormStepProps {
  title: string;
  description: string;
  isActive: boolean;
  children: React.ReactNode;
}

const FormStep: React.FC<FormStepProps> = ({ 
  title, 
  description, 
  isActive, 
  children 
}) => {
  if (!isActive) return null;
  
  return (
    <div className="animate-in fade-in slide-in duration-300">
      <h2 className="text-2xl font-semibold text-cc-dark-green mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
};

export default FormStep;
