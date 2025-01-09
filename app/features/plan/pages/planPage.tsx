import React, { useState, useEffect } from 'react';
import AddPlan from '../components/AddPlan';
import PlanCard from '~/common/components/PlanCardLayout';
import { RiEditFill, RiDeleteBin5Fill } from 'react-icons/ri'; // Icons for edit and delete
import type { PlanData } from '../types';

interface PlansProps {
  plans: {
    name: string;
    id: string;
    href: string;
    priceMonthly: string;
    description: string;
    features: string[];
    isEnabled: boolean;
  }[] | undefined;
}

const PlanPage: React.FC<PlansProps> = ({ plans = [] }) => {
  const [plansList, setPlansList] = useState<PlanData[]>(plans);
  const [editingPlan, setEditingPlan] = useState<PlanData | null>(null);
  const [formData, setFormData] = useState<PlanData | null>(null);

  // Load plans from localStorage if available
  useEffect(() => {
    const storedPlans = localStorage.getItem('plansList');
    if (storedPlans) {
      setPlansList(JSON.parse(storedPlans));
    }
  }, []);

  // Save plans to localStorage whenever the plans list updates
  useEffect(() => {
    localStorage.setItem('plansList', JSON.stringify(plansList));
  }, [plansList]);

  // Handle adding a new plan
  const handleAddPlan = (newPlan: PlanData) => {
    setPlansList((prevPlans) => [...prevPlans, newPlan]);
  };

  // Handle editing a plan
  const handleEditPlan = (plan: PlanData) => {
    setEditingPlan(plan); // Set the plan to edit
    setFormData(plan); // Set the form data with the selected plan's current data
  };

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => prev ? { ...prev, [name]: value } : null);
  };

  // Handle adding a new feature to the plan
  const handleAddFeature = () => {
    setFormData((prev) => prev ? { ...prev, features: [...(prev.features || []), ''] } : null);
  };

  // Handle editing a feature
  const handleFeatureChange = (index: number, value: string) => {
    setFormData((prev) => {
      if (prev && prev.features) {
        const updatedFeatures = [...prev.features];
        updatedFeatures[index] = value;
        return { ...prev, features: updatedFeatures };
      }
      return prev;
    });
  };

  // Handle removing a feature
  const handleRemoveFeature = (index: number) => {
    setFormData((prev) => {
      if (prev && prev.features) {
        const updatedFeatures = prev.features.filter((_, i) => i !== index);
        return { ...prev, features: updatedFeatures };
      }
      return prev;
    });
  };

  // Save edited plan and close the form
  const handleSaveEdit = () => {
    if (formData) {
      const updatedPlans = plansList.map((plan) =>
        plan.id === formData.id ? { ...plan, ...formData } : plan
      );
      setPlansList(updatedPlans); // Update the list with modified plan
      setEditingPlan(null); // Close the edit form
      setFormData(null); // Clear the form data
    }
  };

  // Handle deleting a plan
  const handleDeletePlan = (id: string) => {
    const updatedPlans = plansList.filter((plan) => plan.id !== id);
    setPlansList(updatedPlans);
  };

  return (
    <div>
      <div className="flex justify-end mt-2 mb-4">
        <AddPlan onAddPlan={handleAddPlan} />
      </div>

      <div className="relative isolate bg-white px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold text-indigo-600">Pricing</h2>
          <p className="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
            Choose the right plan for you
          </p>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-center text-md font-medium text-gray-600 sm:text-lg">
          Choose an affordable plan that's packed with the best features for engaging your audience, creating customer
          loyalty, and driving sales.
        </p>
        <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 items-center gap-6 sm:mt-12 lg:max-w-4xl lg:grid-cols-3">
          {plansList.length > 0 ? (
            plansList.map((plan) => (
              <div className="w-full max-w-xs relative" key={plan.id}>
                {/* Edit and Delete icons */}
                <div className="absolute top-0 right-0 p-2 flex gap-2">
                  <RiEditFill
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleEditPlan(plan)}
                  />
                  <RiDeleteBin5Fill
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDeletePlan(plan.id)}
                  />
                </div>
                {/* Show edit form if editing */}
                {editingPlan && editingPlan.id === plan.id ? (
                  <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-center">Edit Plan</h3>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData?.name || ''}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">Price Monthly</label>
                      <input
                        type="text"
                        name="priceMonthly"
                        value={formData?.priceMonthly || ''}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <input
                        type="text"
                        name="description"
                        value={formData?.description || ''}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                      />
                    </div>

                    {/* Features Section */}
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">Features</label>
                      {formData?.features?.map((feature, index) => (
                        <div className="flex items-center gap-2" key={index}>
                          <input
                            type="text"
                            value={feature}
                            onChange={(e) => handleFeatureChange(index, e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                          />
                          <RiDeleteBin5Fill
                            className="text-red-500 cursor-pointer"
                            onClick={() => handleRemoveFeature(index)}
                          />
                        </div>
                      ))}
                      <button
                        onClick={handleAddFeature}
                        className="mt-2 text-indigo-600 hover:underline"
                      >
                        Add Feature
                      </button>
                    </div>

                    <div className="mt-4 text-center">
                      <button
                        onClick={handleSaveEdit}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                ) : (
                  <PlanCard featured={false} {...plan} />
                )}
              </div>
            ))
          ) : (
            <p>No plans available</p> // Display a message if there are no plans
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
