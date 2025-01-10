export interface PlanRequest {
  id: number;
  name: string;
  planName: string;
  totalEmployee: number;
  totalClient: number;
  duration: string;
  date: string;
}

export const planRequestsJson: PlanRequest[] = [
  {
    id: 1,
    name: "Company A",
    planName: "Basic",
    totalEmployee: 50,
    totalClient: 10,
    duration: "1 Year",
    date: "2025-01-01",
  },
  {
    id: 2,
    name: "Company B",
    planName: "Pro",
    totalEmployee: 100,
    totalClient: 20,
    duration: "6 Months",
    date: "2025-01-10",
  },
  {
    id: 3,
    name: "Company C",
    planName: "Enterprise",
    totalEmployee: 500,
    totalClient: 100,
    duration: "3 Months",
    date: "2025-02-01",
  },
  {
    id: 4,
    name: "Company D",
    planName: "Pro",
    totalEmployee: 120,
    totalClient: 30,
    duration: "1 Month",
    date: "2025-01-15",
  },
];
