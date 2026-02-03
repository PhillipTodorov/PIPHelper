import { useState } from 'react';

interface MentalHealthPromptProps {
  prompts: string[];
}

export function MentalHealthPrompt({ prompts }: MentalHealthPromptProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-primary-900/30 border border-primary-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-primary-900/50 transition-colors"
        aria-expanded={isExpanded}
      >
        <span className="font-medium text-primary-300">
          Mental health considerations
        </span>
        <svg
          className={`w-5 h-5 text-primary-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4">
          <p className="text-sm text-primary-400 mb-3">
            Think about whether any of these apply to you:
          </p>
          <ul className="space-y-2">
            {prompts.map((prompt, index) => (
              <li key={index} className="flex items-start gap-2 text-primary-200">
                <span className="text-primary-500 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-sm">{prompt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
