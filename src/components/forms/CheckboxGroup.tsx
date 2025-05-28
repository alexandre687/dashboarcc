
import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  label: string;
  options: Option[];
  selectedValues: string[];
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  className?: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ 
  label, 
  options, 
  selectedValues, 
  onChange, 
  required = false,
  error,
  className = ''
}) => {
  const handleCheckboxChange = (value: string) => {
    onChange(value);
  };

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
              id={`checkbox-${option.value}`}
              type="checkbox"
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              className="h-4 w-4 text-cc-light-green rounded border-gray-300 focus:ring-cc-light-green"
            />
            <label
              htmlFor={`checkbox-${option.value}`}
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

export default CheckboxGroup;
