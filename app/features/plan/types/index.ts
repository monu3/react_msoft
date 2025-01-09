// types/index.ts
export interface PlanData {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  description: string;
  features: string[];
  isEnabled: boolean;
}