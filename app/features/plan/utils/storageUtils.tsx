// src/utils/storageUtils.ts

export const getStoredPlans = () => {
  const storedPlans = localStorage.getItem("plansList");
  return storedPlans ? JSON.parse(storedPlans) : [];
};

export const savePlansToStorage = (plans: any) => {
  localStorage.setItem("plansList", JSON.stringify(plans));
};
