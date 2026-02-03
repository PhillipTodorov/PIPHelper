export interface Descriptor {
  id: string;
  text: string;
  points: number;
  plainEnglish: string;
}

export interface Activity {
  id: string;
  number: number;
  name: string;
  formQuestion: string;
  description: string;
  whatTheyReallyAsk: string;
  mentalHealthPrompts: string[];
  descriptors: Descriptor[];
  category: 'daily-living' | 'mobility';
}

export interface UserResponse {
  activityId: string;
  selectedDescriptorId: string | null;
  userNotes: string;
  goodDayDescription: string;
  badDayDescription: string;
}

export interface FormState {
  responses: Record<string, UserResponse>;
  currentActivityIndex: number;
  startedAt: string | null;
  lastUpdatedAt: string | null;
}

export interface AccessibilitySettings {
  highContrast: boolean;
  textSizeMultiplier: number;
}
