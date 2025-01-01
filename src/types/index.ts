export interface User {
  id: string;
  email: string;
  name: string;
  role: 'startup' | 'admin' | 'mentor';
  startupDetails?: StartupDetails;
}

export interface StartupDetails {
  companyName: string;
  registrationNumber: string;
  ayushCategory: 'Ayurveda' | 'Yoga' | 'Unani' | 'Siddha' | 'Homeopathy';
  stage: 'Ideation' | 'Validation' | 'Early Traction' | 'Scaling';
  foundedDate: string;
  teamSize: number;
  description: string;
}