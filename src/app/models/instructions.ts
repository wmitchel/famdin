export interface Step {
  stepNumber: number;
  stepName: string;
  description: string;
}

export interface Instructions {
  description: string;
  steps: Step[];
}
