import React, { useState } from "react";
import { Button, Modal, TextInput, Label } from "flowbite-react";
import type { Company } from "../types/company";

interface AddCompanyModalProps {
  onClose: () => void;
  onSubmit: (
    newCompany: Omit<Company, "companyId" | "createdAt" | "updatedAt">
  ) => void;
}

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
    <Modal show={true} size="md" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <h3 className="text-xl font-medium text-gray-900 mb-4">
          Add New Company
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="companyName" value="Company Name" />
            <TextInput
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email" value="Company Email" />
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
          <div className="mb-4">
            <Label htmlFor="companyPassword" value="Password" />
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
          <div className="mb-4">
            <Label htmlFor="phone" value="Phone" />
            <TextInput
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="address" value="Address" />
            <TextInput
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="city" value="City" />
            <TextInput
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="state" value="State" />
            <TextInput
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter state"
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <Button color="gray" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" color="success">
              Add Company
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddCompanyModal;
