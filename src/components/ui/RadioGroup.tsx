import { forwardRef } from 'react';

interface RadioOption {
  id: string;
  label: string;
  description?: string;
  points?: number;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string | null;
  onChange: (value: string) => void;
  label?: string;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ name, options, value, onChange, label }, ref) => {
    return (
      <div ref={ref} role="radiogroup" aria-labelledby={label ? `${name}-label` : undefined}>
        {label && (
          <p id={`${name}-label`} className="text-lg font-medium text-slate-100 mb-4">
            {label}
          </p>
        )}
        <div className="space-y-3">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => onChange(option.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onChange(option.id);
                }
              }}
              role="radio"
              aria-checked={value === option.id}
              tabIndex={0}
              className={`
                flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all
                ${value === option.id
                  ? 'border-primary-500 bg-primary-900/30'
                  : 'border-slate-600 hover:border-slate-500 bg-slate-800'
                }
                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900
              `}
            >
              <div
                className={`
                  mt-1 h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                  ${value === option.id
                    ? 'border-primary-500 bg-primary-500'
                    : 'border-slate-500 bg-slate-700'
                  }
                `}
              >
                {value === option.id && (
                  <div className="h-2 w-2 rounded-full bg-white" />
                )}
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-start justify-between">
                  <span className="font-medium text-slate-100">
                    {option.label}
                  </span>
                  {option.points !== undefined && (
                    <span className={`
                      ml-2 px-2 py-0.5 text-sm font-medium rounded
                      ${option.points === 0
                        ? 'bg-slate-700 text-slate-400'
                        : 'bg-primary-900/50 text-primary-300'
                      }
                    `}>
                      {option.points} {option.points === 1 ? 'point' : 'points'}
                    </span>
                  )}
                </div>
                {option.description && (
                  <p className="mt-1 text-slate-400">
                    {option.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
