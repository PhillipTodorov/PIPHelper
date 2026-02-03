import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, hint, id, className = '', ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-2">
        <label htmlFor={inputId} className="block text-base font-medium text-slate-100">
          {label}
        </label>
        {hint && (
          <p className="text-sm text-slate-400" id={`${inputId}-hint`}>
            {hint}
          </p>
        )}
        <textarea
          ref={ref}
          id={inputId}
          aria-describedby={hint ? `${inputId}-hint` : undefined}
          className={`
            w-full px-4 py-3 rounded-lg border-2 border-slate-600 bg-slate-800
            focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none
            transition-colors resize-y min-h-[120px]
            text-slate-100 placeholder-slate-500
            ${className}
          `}
          {...props}
        />
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
