import React, { useState } from "react";
import { Button, Modal, TextInput, Label, ToggleSwitch } from "flowbite-react";
import type { Company } from "../types/company";

interface CompanyDetailModalProps {
  company: Company;
  onClose: () => void;
  onDelete: (id: number) => void;
  onEdit: (updatedCompany: Company) => void;
}

const CompanyDetailModal: React.FC<CompanyDetailModalProps> = ({
  company,
  onClose,
  onDelete,
  onEdit,
}) => {
  const [editedCompany, setEditedCompany] = useState<Company>(company);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setEditedCompany((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSaveEdit = () => {
    onEdit(editedCompany);
    setIsEditing(false);
  };

  const handleStartEditing = () => {
    setIsEditing(true);
  };

  return (
    <Modal show={true} size="md" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <h3 className="text-xl font-medium text-[var(--text-color)] mb-4">
          Company Details
        </h3>
        <form>
          <div className="mb-4">
            <Label htmlFor="companyName" value="Company Name" />
            <TextInput
              id="companyName"
              name="companyName"
              value={editedCompany.companyName}
              onChange={handleEditChange}
              readOnly={!isEditing}
              className={`bg-[var(--color-card)] text-[var(--text-color)]`}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email" value="Email" />
            <TextInput
              type="email"
              id="email"
              name="email"
              value={editedCompany.email}
              onChange={handleEditChange}
              readOnly={!isEditing}
              className={`bg-[var(--color-card)] text-[var(--text-color)]`}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="phone" value="Phone" />
            <TextInput
              id="phone"
              name="phone"
              value={editedCompany.phone}
              onChange={handleEditChange}
              readOnly={!isEditing}
              className={`bg-[var(--color-card)] text-[var(--text-color)]`}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="address" value="Address" />
            <TextInput
              id="address"
              name="address"
              value={editedCompany.address}
              onChange={handleEditChange}
              readOnly={!isEditing}
              className={`bg-[var(--color-card)] text-[var(--text-color)]`}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="city" value="City" />
            <TextInput
              id="city"
              name="city"
              value={editedCompany.city}
              onChange={handleEditChange}
              readOnly={!isEditing}
              className={`bg-[var(--color-card)] text-[var(--text-color)]`}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="state" value="State" />
            <TextInput
              id="state"
              name="state"
              value={editedCompany.state}
              onChange={handleEditChange}
              readOnly={!isEditing}
              className={`bg-[var(--color-card)] text-[var(--text-color)]`}
            />
          </div>
          {isEditing && (
            <div className="mb-4">
              <Label htmlFor="isCompanyActive" value="Active" />
              <ToggleSwitch
                id="isCompanyActive"
                name="isCompanyActive"
                checked={editedCompany.isCompanyActive}
                onChange={(checked) =>
                  setEditedCompany((prev) => ({
                    ...prev,
                    isCompanyActive: checked,
                  }))
                }
                className={`bg-[var(--hover-bg-color)]`}
              />
            </div>
          )}
          <div className="flex justify-between items-center">
            <Button
              color="danger"
              onClick={() => onDelete(company.companyId)}
              className="mr-2"
            >
              Delete
            </Button>
            <div className="flex space-x-2">
              {!isEditing ? (
                <Button color="warning" onClick={handleStartEditing}>
                  Edit
                </Button>
              ) : (
                <Button color="success" onClick={handleSaveEdit}>
                  Save Changes
                </Button>
              )}
              <Button color="gray" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CompanyDetailModal;
