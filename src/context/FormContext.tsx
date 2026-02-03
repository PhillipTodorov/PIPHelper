import { createContext, useContext, ReactNode, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { FormState, UserResponse } from '../types';
import { allActivities } from '../data';

interface FormContextType {
  formState: FormState;
  getResponse: (activityId: string) => UserResponse | undefined;
  updateResponse: (activityId: string, response: Partial<UserResponse>) => void;
  setCurrentActivityIndex: (index: number) => void;
  clearAllData: () => void;
  isStarted: boolean;
  startForm: () => void;
  completedCount: number;
  totalActivities: number;
}

const defaultFormState: FormState = {
  responses: {},
  currentActivityIndex: 0,
  startedAt: null,
  lastUpdatedAt: null
};

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProviderProps {
  children: ReactNode;
}

export function FormProvider({ children }: FormProviderProps) {
  const [formState, setFormState, clearFormState] = useLocalStorage<FormState>(
    'pip-helper-form',
    defaultFormState
  );

  const getResponse = useCallback((activityId: string): UserResponse | undefined => {
    return formState.responses[activityId];
  }, [formState.responses]);

  const updateResponse = useCallback((activityId: string, response: Partial<UserResponse>) => {
    setFormState((prev) => {
      const existingResponse = prev.responses[activityId];
      const defaultResponse: UserResponse = {
        activityId,
        selectedDescriptorId: null,
        userNotes: '',
        goodDayDescription: '',
        badDayDescription: ''
      };
      const mergedResponse: UserResponse = {
        ...defaultResponse,
        ...existingResponse,
        ...response,
        activityId // Ensure activityId is always correct
      };
      return {
        ...prev,
        responses: {
          ...prev.responses,
          [activityId]: mergedResponse
        },
        lastUpdatedAt: new Date().toISOString()
      };
    });
  }, [setFormState]);

  const setCurrentActivityIndex = useCallback((index: number) => {
    setFormState((prev) => ({
      ...prev,
      currentActivityIndex: index,
      lastUpdatedAt: new Date().toISOString()
    }));
  }, [setFormState]);

  const startForm = useCallback(() => {
    setFormState((prev) => ({
      ...prev,
      startedAt: prev.startedAt || new Date().toISOString(),
      lastUpdatedAt: new Date().toISOString()
    }));
  }, [setFormState]);

  const clearAllData = useCallback(() => {
    clearFormState();
  }, [clearFormState]);

  const completedCount = Object.values(formState.responses).filter(
    (r) => r.selectedDescriptorId !== null
  ).length;

  return (
    <FormContext.Provider
      value={{
        formState,
        getResponse,
        updateResponse,
        setCurrentActivityIndex,
        clearAllData,
        isStarted: formState.startedAt !== null,
        startForm,
        completedCount,
        totalActivities: allActivities.length
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm(): FormContextType {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}
