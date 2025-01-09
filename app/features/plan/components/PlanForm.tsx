import { Button, Label, TextInput, ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import type { PlanData } from "../types";

interface PlanFormProps {
  onClose: () => void;
  onAddPlan: (plan: PlanData) => void;
}

export const PlanForm: React.FC<PlanFormProps> = ({ onClose, onAddPlan }) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [formData, setFormData] = useState<Omit<PlanData, "isEnabled">>({
    name: "",
    id: "",
    href: "",
    priceMonthly: "",
    description: "",
    features: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    // Check if the input is numeric or string and handle accordingly
    setFormData({ ...formData, [id]: id === "id" || id === "priceMonthly" ? Number(value) : value });
  };

  // Handle adding features
  const handleAddFeature = () => {
    const featureInput = formData.href; // Use href as feature input field temporarily
    if (featureInput.trim()) {
      setFormData({
        ...formData,
        features: [...formData.features, featureInput],
        href: "", // Reset input field after adding
      });
    }
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form default submission behavior
    // Ensure form data is not empty before submitting
    if (formData.name && formData.id && formData.priceMonthly && formData.description) {
      onAddPlan({ ...formData, isEnabled });
      onClose(); // Close the form after submission
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-3 bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
      >
        <AiOutlineClose
          className="absolute top-2 right-2 text-xl cursor-pointer hover:text-red-500"
          onClick={onClose}
        />

        <h2 className="text-2xl font-semibold text-center mb-4">Add New Plan</h2>

        <div className="flex gap-10 mb-2">
          <div className="flex-1">
            <Label htmlFor="name" value="Plan Name" />
            <TextInput
              id="name"
              type="text"
              placeholder="Enter Plan Name"
              required
              onChange={handleChange}
            />
          </div>

          <div className="flex-1">
            <Label htmlFor="id" value="Id" />
            <TextInput
              id="id"
              type="number"
              placeholder="Enter id"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex gap-10 mb-2">
          <div className="flex-1">
            <Label htmlFor="priceMonthly" value="Price Monthly" />
            <TextInput
              id="priceMonthly"
              type="number"
              placeholder="Enter price"
              required
              onChange={handleChange}
            />
          </div>

          <div className="flex-1">
            <Label htmlFor="description" value="Description" />
            <TextInput
              id="description"
              type="text"
              placeholder="Enter description"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-2">
          <Label htmlFor="features" value="Features" />
          <div className="flex gap-2">
            <TextInput
              id="href"
              type="text"
              placeholder="Enter feature"
              value={formData.href}
              onChange={handleChange}
            />
            <Button
              type="button"
              onClick={handleAddFeature}
              className="bg-blue-500 hover:bg-blue-700"
            >
              Add Feature
            </Button>
          </div>
          <div className="mt-2">
            <ul>
              {formData.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 mb-4">
          <Label htmlFor="enable" value="Enable Feature" />
          <ToggleSwitch
            id="enable"
            checked={isEnabled}
            onChange={(value) => setIsEnabled(value)}
          />
        </div>

        <Button type="submit" className="bg-orange-500 hover:bg-orange-700 transition-colors">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PlanForm;
