export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
}

export interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  linkedIn: string;
  areaOfInterest: string;
  relevantExperience: string;
  potentialContribution: string;
  resumeFile?: {
    name: string;
    size: number;
    type: string;
  } | null;
}

export type ModalType = 'none' | 'enquiry' | 'apply';
