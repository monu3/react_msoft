// src/pages/PlanPage.tsx
import React, { useState } from "react";
import { usePlanContext } from "../context/PlanContext"; // Use global plan state
import AddPlan from "../components/AddPlan";
import PlanCard from "~/common/components/PlanCardLayout";
import { RiEditFill, RiDeleteBin5Fill } from "react-icons/ri";
import BreadcrumbLayouts from "~/common/components/BreadcrumbLayouts";
import { breadcrumbs } from "~/common/utils/routes/breadcrumbs";
import { PlanForm } from "../components/PlanForm";
import NoPlan from "../components/NoPlan";
import type { PlanData } from "../types";

const PlanPage: React.FC = () => {
  const { plans, addPlan, updatePlan, deletePlan } = usePlanContext();
  const [editingPlan, setEditingPlan] = useState<PlanData | null>(null);

  return (
    <BreadcrumbLayouts breadcrumbItems={breadcrumbs.planRequest}>
      <div>
        <div className="flex justify-end">
          <AddPlan onAddPlan={addPlan} />
        </div>

        <div className="relative isolate bg-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold text-text">Pricing</h2>
            <p className="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
              Choose the right plan for you
            </p>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-md font-medium text-gray-600 sm:text-lg">
            Choose an affordable plan that's packed with the best features for engaging your audience, creating customer
            loyalty, and driving sales.
          </p>

          {plans.length > 0 ? (
            <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 gap-6 sm:mt-12 lg:max-w-4xl lg:grid-cols-3">
              {plans.map((plan) => (
                <div className="w-full max-w-xs relative" key={plan.id}>
                  <div className="absolute top-0 right-0 p-2 flex gap-2">
                    <RiEditFill
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setEditingPlan(plan)}
                    />
                    <RiDeleteBin5Fill
                      className="text-red-500 cursor-pointer"
                      onClick={() => deletePlan(plan.id)}
                    />
                  </div>
                  {editingPlan && editingPlan.id === plan.id ? (
                    <PlanForm
                      onClose={() => setEditingPlan(null)}
                      onAddPlan={addPlan}
                      onEditPlan={updatePlan}
                      plan={plan}
                      existingPlans={plans}
                    />
                  ) : (
                    <PlanCard featured={false} {...plan} />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-full mt-8">
              <NoPlan />
            </div>
          )}
        </div>
      </div>
    </BreadcrumbLayouts>
  );
};

export default PlanPage;
