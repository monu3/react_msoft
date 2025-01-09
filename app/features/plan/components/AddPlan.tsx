import React, { useState } from "react";
import { RiAddBoxFill } from "react-icons/ri";
import PlanForm from "./PlanForm";
import type { PlanData } from "../types";

interface AddPlanProps {
  onAddPlan: (newPlan: PlanData) => void;
}

const AddPlan: React.FC<AddPlanProps> = ({ onAddPlan }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      {/* Icon Button to Open Form */}
      <RiAddBoxFill
        className="text-orange-500 text-4xl cursor-pointer hover:text-orange-700 transition-colors"
        onClick={() => setIsOpen(true)}
      />

      {/* Popup Form */}
      {isOpen && <PlanForm onClose={() => setIsOpen(false)} onAddPlan={onAddPlan} />}
    </div>
  );
};

export default AddPlan;
