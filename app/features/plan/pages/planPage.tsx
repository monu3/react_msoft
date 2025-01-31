import React, { useState, useEffect } from 'react';
import AddPlan from '../components/AddPlan';
import PlanCard from '~/common/components/PlanCardLayout';
import { RiEditFill, RiDeleteBin5Fill } from 'react-icons/ri'; // Icons for edit and delete
import type { PlanData } from '../types';
import BreadcrumbLayouts from '~/common/components/BreadcrumbLayouts';
import { breadcrumbs } from '~/common/utils/routes/breadcrumbs';
import { PlanForm } from '../components/PlanForm'; // Import the PlanForm component
import NoPlan from '../components/NoPlan';

interface PlansProps {
  plans: PlanData[]; // Explicitly define plans as an array of PlanData
}

const PlanPage: React.FC<PlansProps> = ({ plans = [] }) => {
  const [plansList, setPlansList] = useState<PlanData[]>(plans);
  const [editingPlan, setEditingPlan] = useState<PlanData | null>(null);

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
  };

  // Handle deleting a plan
  const handleDeletePlan = (id: string) => {
    const updatedPlans = plansList.filter((plan) => plan.id !== id);
    setPlansList(updatedPlans);
  };

  // Handle updating a plan (when editing)
  const handleUpdatePlan = (updatedPlan: PlanData) => {
    setPlansList((prevPlans) =>
      prevPlans.map((plan) => (plan.id === updatedPlan.id ? updatedPlan : plan))
    );
    setEditingPlan(null); // Close the edit form after updating
  };

  return (
    <BreadcrumbLayouts breadcrumbItems={breadcrumbs.planRequest}>
      <div className="dark:bg-bg dark:text-text">
        
          <AddPlan onAddPlan={handleAddPlan}/>


        <div className="relative isolate bg-white dark:bg-bg">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold text-text">Pricing</h2>
            <p className="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl dark:text-gray-200">
              Choose the right plan for you
            </p>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-md font-medium text-gray-600 sm:text-lg dark:text-gray-400">
            Choose an affordable plan that's packed with the best features for engaging your audience, creating customer
            loyalty, and driving sales.
          </p>

          {/* Conditional Grid Rendering */}
          {plansList.length > 0 ? (
            <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 gap-6 sm:mt-12 lg:max-w-4xl lg:grid-cols-3">
              {plansList.map((plan) => (
                <div className="w-full max-w-xs relative" key={plan.id}>
                  {/* Edit and Delete icons */}
                  <div className="absolute top-0 right-0 p-2 flex gap-2">
                    <RiEditFill
                      className="text-blue-500 cursor-pointer  dark:text-blue-300"
                      onClick={() => handleEditPlan(plan)}
                    />
                    <RiDeleteBin5Fill
                      className="text-red-500 cursor-pointer dark:text-red-300"
                      onClick={() => handleDeletePlan(plan.id)}
                    />
                  </div>
                  {/* Conditionally render the PlanForm if editing */}
                  {editingPlan && editingPlan.id === plan.id ? (
                    <PlanForm
                      onClose={() => setEditingPlan(null)}
                      onAddPlan={handleAddPlan}
                      onEditPlan={handleUpdatePlan} // Properly wire the edit logic
                      plan={plan} // Pass the plan data to the form for editing
                      existingPlans={[]}
                    />
                  ) : (
                    <PlanCard featured={false} {...plan} />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-full mt-8 ">
              <NoPlan /> {/* Center NoPlan component when no plans exist */}
            </div>
          )}
        </div>
      </div>
    </BreadcrumbLayouts>
  );
};

export default PlanPage;
