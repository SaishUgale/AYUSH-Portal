export type AyushCategory = 'Ayurveda' | 'Yoga' | 'Unani' | 'Siddha' | 'Homeopathy';
export type StartupStage = 'Ideation' | 'Validation' | 'Early Traction' | 'Scaling';

export interface StartupRegistrationForm {
  companyName: string;
  registrationNumber: string;
  ayushCategory: AyushCategory;
  stage: StartupStage;
  foundedDate: string;
  teamSize: number;
  description: string;
  documents: {
    registration: File | null;
    msme: File | null;
    pitch: File | null;
  };
}