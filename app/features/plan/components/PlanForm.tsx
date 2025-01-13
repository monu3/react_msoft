import { Alert, Button, Label, TextInput, ToggleSwitch } from "flowbite-react";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { nanoid } from "nanoid"; // Import nanoid to generate unique IDs
import type { PlanData } from "../types";

interface PlanFormProps {
  onClose: () => void;
  onAddPlan: (plan: PlanData) => void;
  onEditPlan: (plan: PlanData) => void;
  plan?: PlanData; // Optional prop for editing
  existingPlans: PlanData[];
}

export const PlanForm: React.FC<PlanFormProps> = ({ onClose, onAddPlan, onEditPlan, plan, existingPlans }) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [formData, setFormData] = useState<Omit<PlanData, "isEnabled" | "id">>({
    name: plan?.name || "",
    href: "",
    priceMonthly: plan?.priceMonthly || "",
    description: plan?.description || "",
    features: plan?.features || [],
  });
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (plan) {
      setFormData({
        name: plan.name,
        href: "",
        priceMonthly: plan.priceMonthly,
        description: plan.description,
        features: plan.features || [],
      });
      setIsEnabled(plan.isEnabled);
    }
  }, [plan]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle adding features
  const handleAddFeature = () => {
    if (formData.href.trim()) {
      setFormData({
        ...formData,
        features: [...formData.features, formData.href],
        href: "", // Reset feature input after adding
      });
    }
  };

  // Handle deleting a feature
  const handleDeleteFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  const isIdUnique = (id: string) => {
    return !existingPlans.some((plan) => plan.id === id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate a new unique ID for the plan if adding a new plan
    const newPlanId = plan ? plan.id : nanoid(); // Generate new ID using nanoid

    if (formData.name && formData.priceMonthly && formData.description) {
      const updatedPlan = { ...formData, id: newPlanId, isEnabled };

      if (plan) {
        // If editing an existing plan
        onEditPlan(updatedPlan);
      } else {
        // If adding a new plan
        onAddPlan(updatedPlan);
      }
      onClose(); // Close the form after submission
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-3 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full"
      >
        <AiOutlineClose
          className="absolute top-2 right-2 text-xl cursor-pointer hover:text-indigo-500 dark:hover:text-indigo-400"
          onClick={onClose}
        />

        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-gray-100">
          {plan ? "Edit Plan" : "Add New Plan"}
        </h2>

        {/* Display error message if id is not unique */}
        {error && <Alert color="failure">{error}</Alert>}

        <div className="flex gap-10 mb-2">
          <div className="flex-1">
            <Label htmlFor="name" value="Plan Name" className="text-gray-900 dark:text-gray-100" />
            <TextInput
              id="name"
              type="text"
              placeholder="Enter Plan Name"
              required
              onChange={handleChange}
              value={formData.name}
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="priceMonthly" value="Price Monthly" className="text-gray-900 dark:text-gray-100" />
            <TextInput
              id="priceMonthly"
              type="number"
              placeholder="Enter price"
              required
              onChange={handleChange}
              value={formData.priceMonthly}
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>

        <div className="flex gap-10 mb-2">
          <div className="flex-1">
            <Label htmlFor="description" value="Description" className="text-gray-900 dark:text-gray-100" />
            <TextInput
              id="description"
              type="text"
              placeholder="Enter description"
              required
              onChange={handleChange}
              value={formData.description}
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>

        <div className="mb-2">
          <Label htmlFor="features" value="Features" className="text-gray-900 dark:text-gray-100" />
          <div className="flex gap-2">
            <TextInput
              id="href"
              type="text"
              placeholder="Enter feature"
              value={formData.href}
              onChange={handleChange}
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <Button
              type="button"
              onClick={handleAddFeature}
              className="bg-text hover:bg-text dark:bg-gray-600 dark:hover:bg-gray-500"
            >
              {plan ? "Edit" : "Add"}
            </Button>
          </div>
          <div className="mt-2">
            <ul>
              {formData.features.map((feature, idx) => (
                <li key={idx} className="flex justify-between items-center text-gray-900 dark:text-gray-100">
                  {feature}
                  <Button
                    type="button"
                    onClick={() => handleDeleteFeature(idx)}
                    className="text-red-500 ml-2 mt-2 dark:text-red-400"
                  >
                    Delete
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 mb-4">
          <Label htmlFor="enable" value="Enable Feature" className="text-gray-900 dark:text-gray-100" />
          <ToggleSwitch
            id="enable"
            checked={isEnabled}
            onChange={(value) => setIsEnabled(value)}
            className="dark:bg-gray-600"
          />
        </div>

        <Button type="submit" className="bg-text hover:bg-text transition-colors dark:bg-gray-600 dark:hover:bg-gray-500">
          {plan ? "Edit" : "Add"}
        </Button>
      </form>
    </div>
  );
};

export default PlanForm;
