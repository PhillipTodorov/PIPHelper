import { createContext, useContext, useEffect, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AccessibilitySettings } from '../types';

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  toggleHighContrast: () => void;
  adjustTextSize: (delta: number) => void;
  resetSettings: () => void;
}

const defaultSettings: AccessibilitySettings = {
  highContrast: false,
  textSizeMultiplier: 1
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
  children: ReactNode;
}

export function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [settings, setSettings] = useLocalStorage<AccessibilitySettings>(
    'pip-helper-accessibility',
    defaultSettings
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--text-size-multiplier',
      settings.textSizeMultiplier.toString()
    );

    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [settings]);

  const toggleHighContrast = () => {
    setSettings((prev) => ({
      ...prev,
      highContrast: !prev.highContrast
    }));
  };

  const adjustTextSize = (delta: number) => {
    setSettings((prev) => ({
      ...prev,
      textSizeMultiplier: Math.max(0.8, Math.min(1.5, prev.textSizeMultiplier + delta))
    }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <AccessibilityContext.Provider
      value={{ settings, toggleHighContrast, adjustTextSize, resetSettings }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility(): AccessibilityContextType {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
