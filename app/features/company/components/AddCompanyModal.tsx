/**
 * AddCompanyModal Component
 *
 * This component displays a modal for adding a new company.
 * It contains a form with fields for company name, email, password, phone, address, city, and state.
 * It includes a submit button for saving the new company data.
 *
 * Props:
 * - onClose: A function to close the modal.
 * - onSubmit: A function to handle the form submission with new company data.
 */

import React, { useState } from "react";
import { Button, Modal, TextInput, Label } from "flowbite-react";
import type { Company } from "../types/company";

interface AddCompanyModalProps {
  onClose: () => void;
  onSubmit: (
    newCompany: Omit<Company, "companyId" | "createdAt" | "updatedAt">
  ) => void;
}

/**
 * AddCompanyModal Component implementation
 */
const AddCompanyModal: React.FC<AddCompanyModalProps> = ({
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<
    Omit<Company, "companyId" | "createdAt" | "updatedAt">
  >({
    companyName: "",
    email: "",
    companyPassword: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    isCompanyActive: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Modal show={true} size="md" onClose={onClose}>
      <Modal.Header className="border-b">
        <h3 className="text-xl font-semibold ">Add New Company</h3>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <Label htmlFor="companyName" className="mb-2 block">
              Company Name
            </Label>
            <TextInput
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="mb-2 block">
              Company Email
            </Label>
            <TextInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter company email"
              required
            />
          </div>
          <div>
            <Label htmlFor="companyPassword" className="mb-2 block">
              Password
            </Label>
            <TextInput
              type="password"
              id="companyPassword"
              name="companyPassword"
              value={formData.companyPassword}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" className="mb-2 block">
              Phone
            </Label>
            <TextInput
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </div>
          <div>
            <Label htmlFor="address" className="mb-2 block">
              Address
            </Label>
            <TextInput
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-7">
            <div>
              <Label htmlFor="city" className="mb-2 block">
                City
              </Label>
              <TextInput
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                required
              />
            </div>
            <div>
              <Label htmlFor="state" className="mb-2 block">
                State
              </Label>
              <TextInput
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                required
              />
            </div>
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <Button color="light" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
            >
              Save Changes
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddCompanyModal;
