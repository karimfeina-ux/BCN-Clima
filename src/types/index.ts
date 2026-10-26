export type Language = 'es' | 'ca' | 'en';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  specs: { label: string; value: string }[];
  tag: string;
  image: string;
  efficiencyBadge: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  date: string;
  rating: number;
  service: string;
  comment: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface CalculationResult {
  surfaceM2: number;
  propertyType: string;
  requiredFrigorias: number;
  requiredKw: number;
  recommendedSystem: string;
  estimatedAnnualSavings: number;
  co2ReductionKg: number;
  copEfficiency: number;
}
