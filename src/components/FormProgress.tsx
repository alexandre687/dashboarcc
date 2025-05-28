
import React from 'react';

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

const FormProgress: React.FC<FormProgressProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
              ${currentStep >= index + 1 
                ? 'bg-cc-light-green border-cc-light-green text-white' 
                : 'bg-white border-gray-300 text-gray-500'
              }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-cc-light-green h-2.5 rounded-full transition-all duration-300" 
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1 text-xs text-gray-500">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="w-10 text-center overflow-hidden">
            Etapa {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormProgress;
