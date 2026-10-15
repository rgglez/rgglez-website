export type QuizKind = "single" | "multi" | "boolean";

export interface QuizOption {
  id: string;
  text: string;
  correct: boolean;
}

export interface QuizQuestion {
  id: string;
  section: string;
  kind: QuizKind;
  prompt: string;
  options: QuizOption[];
  explanation: string;
}
