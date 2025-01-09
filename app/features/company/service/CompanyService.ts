import type { Company } from "../types/company";

const API_BASE_URL = "http://localhost:8080/company"; 

export const companyService = {
  getAllCompanies: async (): Promise<Company[]> => {
    const response = await fetch(`${API_BASE_URL}/getAllCompanies`);
    if (!response.ok) {
      throw new Error("Failed to fetch companies");
    }
    return response.json();
  },

  createCompany: async (
    newCompany: Omit<Company, "companyId" | "createdAt" | "updatedAt">
  ): Promise<Company> => {
    const response = await fetch(`${API_BASE_URL}/createCompany`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCompany),
    });
    if (!response.ok) {
      throw new Error("Failed to create company");
    }
    return response.json();
  },

  updateCompany: async (updatedCompany: Company): Promise<Company> => {
    const response = await fetch(
      `${API_BASE_URL}/updateCompany/${updatedCompany.companyId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCompany),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to update company");
    }
    return response.json();
  },

  deleteCompany: async (id: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/deleteCompany/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete company");
    }
  },
};
