
import React from 'react';
import { RadioGroup as ShadcnRadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { LucideIcon } from 'lucide-react';

interface Option {
  value: string;
  label: string;
  icon?: LucideIcon;
  description?: string;
}

interface RadioGroupWithIconsProps {
  name: string;
  label: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  error?: string;
  className?: string;
  multiple?: boolean;
  selectedValues?: string[];
  onMultiChange?: (value: string) => void;
  columns?: number;
}

const RadioGroupWithIcons: React.FC<RadioGroupWithIconsProps> = ({ 
  name, 
  label, 
  options, 
  value = '',
  selectedValues = [],
  onChange = () => {},
  onMultiChange = () => {},
  required = false,
  error,
  className = '',
  multiple = false,
  columns = 4
}) => {
  const isSelected = (optionValue: string) => {
    if (multiple) {
      return selectedValues.includes(optionValue);
    }
    return value === optionValue;
  };

  const handleChange = (optionValue: string) => {
    if (multiple && onMultiChange) {
      onMultiChange(optionValue);
    } else if (!multiple && onChange) {
      onChange(optionValue);
    }
  };

  return (
    <div className={className}>
      <div className="mb-1">
        <span className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      </div>

      <div className={`grid grid-cols-2 md:grid-cols-${columns} gap-3 mt-2`}>
        {options.map(option => (
          <label
            key={option.value}
            htmlFor={`${name}-${option.value}`}
            className={`
              flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer
              ${isSelected(option.value) ? 'border-cc-light-green bg-cc-light-green/10' : 'border-gray-200 hover:border-cc-light-green/50'}
              transition-all duration-200
            `}
            onClick={() => handleChange(option.value)}
          >
            <input 
              type={multiple ? "checkbox" : "radio"}
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={isSelected(option.value)}
              onChange={() => {}}
              className="sr-only"
            />
            
            {option.icon && (
              <option.icon 
                className={`h-8 w-8 mb-2 ${isSelected(option.value) ? 'text-cc-light-green' : 'text-gray-500'}`} 
              />
            )}
            
            <span className={`text-sm font-medium ${isSelected(option.value) ? 'text-cc-dark-green' : 'text-gray-700'}`}>
              {option.label}
            </span>

            {option.description && (
              <span className="text-xs text-gray-500 mt-1 text-center">
                {option.description}
              </span>
            )}
          </label>
        ))}
      </div>
      
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default RadioGroupWithIcons;
