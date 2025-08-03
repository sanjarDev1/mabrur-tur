export interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: number; // in days
  category: 'cultural' | 'adventure' | 'historical' | 'religious';
  location: string;
  includes: string[];
  itinerary: DayItinerary[];
  maxParticipants: number;
  difficulty: 'easy' | 'moderate' | 'challenging';
  featured: boolean;
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface Staff {
  id: string;
  name: string;
  position: string;
  image: string;
  certifications: string[];
  workingHours: string;
  specializations: string[];
  languages: string[];
  experience: number; // years
}

export interface BookingForm {
  fullName: string;
  phone: string;
  email: string;
  tourId: string;
  travelDate: string;
  participants: number;
  notes?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface CompanyInfo {
  legalName: string;
  registrationNumber: string;
  licenseNumber: string;
  tin: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
  processingFee?: number;
}

export type Language = 'uz' | 'ru' | 'en';
