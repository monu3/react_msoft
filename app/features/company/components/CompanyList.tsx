import React, { useState, useEffect } from "react";
import { Button, Spinner } from "flowbite-react";
import AddCompanyModal from "./AddCompanyModal";
import CompanyDetailModal from "./CompanyDetailModal";
import type { Company } from "../types/company";
import { companyService } from "../service/CompanyService";

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      setIsLoading(true);
      const data = await companyService.getAllCompanies();
      setCompanies(data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("Error fetching companies. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCompany = async (
    newCompany: Omit<Company, "companyId" | "createdAt" | "updatedAt">
  ) => {
    try {
      const createdCompany = await companyService.createCompany(newCompany);
      setCompanies([...companies, createdCompany]);
      setIsModalOpen(false);
    } catch (err) {
      setError("Error creating company. Please try again.");
    }
  };

  const handleOpenCompanyDetails = (company: Company) => {
    setSelectedCompany(company);
  };

  const handleCloseModal = () => {
    setSelectedCompany(null);
  };

  const handleDeleteCompany = async (id: number) => {
    try {
      await companyService.deleteCompany(id);
      setCompanies(companies.filter((company) => company.companyId !== id));
      handleCloseModal();
    } catch (err) {
      setError("Error deleting company. Please try again.");
    }
  };

  const handleEditCompany = async (updatedCompany: Company) => {
    try {
      const updated = await companyService.updateCompany(updatedCompany);
      setCompanies(
        companies.map((company) =>
          company.companyId === updated.companyId ? updated : company
        )
      );
      handleCloseModal();
    } catch (err) {
      setError("Error updating company. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Company Management</h1>
        <Button color="success" onClick={() => setIsModalOpen(true)}>
          + Add Company
        </Button>
      </div>

      {error && (
        <div className="text-center text-red-600 mb-4 p-2 bg-red-100 rounded">
          {error}
        </div>
      )}

      {!isLoading && companies.length === 0 ? (
        <div className="text-center text-gray-600 mt-8">
          <p className="text-xl mb-4">No companies found.</p>
          <p>Click the "Add Company" button to create a new company.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {companies.map((company) => (
            <div
              key={company.companyId}
              className="p-4 border rounded shadow bg-white hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleOpenCompanyDetails(company)}
            >
              <h2 className="text-lg font-semibold text-gray-700">
                {company.companyName}
              </h2>
              <p className="text-gray-600">Email: {company.email}</p>
              <p className="text-gray-600">Phone: {company.phone}</p>
              <p className="text-gray-600">City: {company.city}</p>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <AddCompanyModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddCompany}
        />
      )}

      {selectedCompany && (
        <CompanyDetailModal
          company={selectedCompany}
          onClose={handleCloseModal}
          onDelete={handleDeleteCompany}
          onEdit={handleEditCompany}
        />
      )}
    </div>
  );
};

export default CompanyList;

