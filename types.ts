export interface ProgramDay {
  day: number;
  title: string;
  description: string;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  image?: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  current: number;
  original: number;
  currency: string;
}
