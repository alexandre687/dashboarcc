
import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  label: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ 
  name, 
  label, 
  options, 
  value, 
  onChange, 
  required = false,
  error,
  className = ''
}) => {
  return (
    <div className={className}>
      <div className="mb-1">
        <span className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      </div>
      <div className="space-y-2">
        {options.map(option => (
          <div key={option.value} className="flex items-center">
            <input
              id={`${name}-${option.value}`}
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="h-4 w-4 text-cc-light-green border-gray-300 focus:ring-cc-light-green"
            />
            <label
              htmlFor={`${name}-${option.value}`}
              className="ml-2 text-sm text-gray-700"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default RadioGroup;
