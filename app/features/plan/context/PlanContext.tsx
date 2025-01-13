// src/context/PlanContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import { getStoredPlans, savePlansToStorage } from "../utils/storageUtils";
import type { PlanData } from "../types";

interface PlanContextProps {
  plans: PlanData[];
  addPlan: (plan: PlanData) => void;
  updatePlan: (plan: PlanData) => void;
  deletePlan: (id: string) => void;
}

const PlanContext = createContext<PlanContextProps | undefined>(undefined);

export const PlanProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [plans, setPlans] = useState<PlanData[]>([]);

  // Load plans only on client-side
  useEffect(() => {
    setPlans(getStoredPlans());
  }, []);

  useEffect(() => {
    savePlansToStorage(plans);
  }, [plans]); // Save whenever plans update

  const addPlan = (newPlan: PlanData) => setPlans((prev) => [...prev, newPlan]);

  const updatePlan = (updatedPlan: PlanData) => {
    setPlans((prev) =>
      prev.map((plan) => (plan.id === updatedPlan.id ? updatedPlan : plan))
    );
  };

  const deletePlan = (id: string) => {
    setPlans((prev) => prev.filter((plan) => plan.id !== id));
  };

  return (
    <PlanContext.Provider value={{ plans, addPlan, updatePlan, deletePlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlanContext = () => {
  const context = useContext(PlanContext);
  if (!context) throw new Error("usePlanContext must be used within a PlanProvider");
  return context;
};
