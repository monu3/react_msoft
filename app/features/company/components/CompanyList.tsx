/**
 * CompanyList Component
 *
 * This component displays a list of companies with options to view, add, edit, and delete.
 * It fetches the company data from a backend service and allows interaction with each company's details.
 *
 * State:
 * - companies: The list of companies.
 * - isLoading: A boolean indicating whether the companies are loading.
 * - error: Any error messages while fetching data.
 * - isModalOpen: A boolean to toggle the "Add Company" modal.
 * - selectedCompany: The company that is selected for viewing/editing.
 *
 * Effects:
 * - useEffect to fetch companies from the service on component mount.
 *
 * Functions:
 * - fetchCompanies: Fetches company data from the backend.
 * - handleAddCompany: Handles adding a new company.
 * - handleOpenCompanyDetails: Opens the modal to view company details.
 * - handleCloseModal: Closes the modal.
 * - handleDeleteCompany: Deletes a company by its ID.
 * - handleEditCompany: Updates a company's details.
 */

import React, { useState, useEffect } from "react";
import { Button, Spinner, Card } from "flowbite-react";
import { HiPlus, HiMail, HiPhone, HiOfficeBuilding } from "react-icons/hi";
import AddCompanyModal from "./AddCompanyModal";
import CompanyDetailModal from "./CompanyDetailModal";
import type { Company } from "../types/company";
import { companyService } from "../service/CompanyService";

/**
 * CompanyList Component implementation
 */
const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  useEffect(() => {
    // Set dummy companies initially
    const dummyCompanies: Company[] = [
      {
        companyId: 1,
        companyName: "Dummy Company 1",
        email: "dummy1@example.com",
        companyPassword: "password123",
        phone: "123-456-7890",
        address: "1234 Main St",
        city: "City1",
        state: "State1",
        isCompanyActive: true,
      },
      {
        companyId: 1,
        companyName: "Dummy Company 1",
        email: "dummy1@example.com",
        companyPassword: "password123",
        phone: "123-456-7890",
        address: "1234 Main St",
        city: "City1",
        state: "State1",
        isCompanyActive: true,
      },
      {
        companyId: 1,
        companyName: "Dummy Company 1",
        email: "dummy1@example.com",
        companyPassword: "password123",
        phone: "123-456-7890",
        address: "1234 Main St",
        city: "City1",
        state: "State1",
        isCompanyActive: true,
      },
    ];

    // Simulate loading the data from backend
    setCompanies(dummyCompanies);

    // Fetch real companies from backend (assuming the service exists)
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      setIsLoading(true);
      // Simulate fetching data from an actual backend API
      const data = await companyService.getAllCompanies();
      setCompanies((prevCompanies) => [...prevCompanies, ...data]);
      setError(null);
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
    <div className="p-4 md:p-6 bg-[var(--color-bg)] min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4 md:mb-0">
          Company Management
        </h1>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="w-full md:w-auto bg-[var(--color-text)]"
        >
          <HiPlus className="mr-2 h-5 w-5" />
          Add Company
        </Button>
      </div>

      {/* {error && (
        <div className="text-center text-red-600 mb-4 p-2 bg-red-100 rounded">
          {error}
        </div>
      )} */}

      {!isLoading && companies.length === 0 ? (
        <div className="text-center text-[var(--color-text)] mt-8">
          <p className="text-xl mb-4">No companies found.</p>
          <p>Click the "Add Company" button to create a new company.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {companies.map((company) => (
            <Card
              key={company.companyId}
              className="hover?shadow-lg transition-shadow shadow-custom cursor-pointer bg-[var(--color-card)] dark:bg-[var(--color-card)]"
              onClick={() => handleOpenCompanyDetails(company)}
            >
              <h2 className="text-lg font-semibold text-[var(--color-text)] dark:text-white">
                {company.companyName}
              </h2>
              <div className="flex items-center text-[var(--color-text)] dark:text-white">
                <HiMail className="mr-2" />
                <p>{company.email}</p>
              </div>
              <div className="flex items-center text-[var(--color-text)] dark:text-white">
                <HiPhone className="mr-2" />
                <p>{company.phone}</p>
              </div>
              <div className="flex items-center text-[var(--color-text)] dark:text-white">
                <HiOfficeBuilding className="mr-2" />
                <p>{company.city}</p>
              </div>
            </Card>
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
