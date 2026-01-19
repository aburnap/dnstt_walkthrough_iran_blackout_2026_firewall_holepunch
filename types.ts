
export type Language = 'en' | 'fa';

export interface StepMetadata {
  id: number;
  title: { en: string; fa: string };
  description: { en: string; fa: string };
  terms: string[];
}

export interface TermDefinition {
  term: { en: string; fa: string };
  definition: { en: string; fa: string };
}

// Added ChatMessage interface to fix import error in AIChat.tsx
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
