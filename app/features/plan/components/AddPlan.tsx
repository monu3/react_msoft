import React, { useState, useEffect } from "react";
import { RiAddBoxFill } from "react-icons/ri";
import PlanForm from "./PlanForm";
import Plan from "./Plan";

// Define the structure of a plan
interface PlanData {
  employees: number;
  clients: number;
  duration: number;
  price: number;
  storage: number;
  isEnabled: boolean;
}

const AddPlan: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [plans, setPlans] = useState<PlanData[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editPlanData, setEditPlanData] = useState<PlanData | null>(null);

  // ✅ Load saved plans from localStorage when component mounts
  useEffect(() => {
    const savedPlans = localStorage.getItem("plans");
    if (savedPlans) {
      setPlans(JSON.parse(savedPlans));
    }
  }, []);

  // ✅ Save plans to localStorage whenever plans state changes
  useEffect(() => {
    localStorage.setItem("plans", JSON.stringify(plans));
  }, [plans]);

  // Function to add or update a plan
  const handleSavePlan = (newPlan: PlanData) => {
    if (editIndex !== null) {
      // ✅ Ensure the edited plan replaces the correct index
      const updatedPlans = [...plans];
      updatedPlans[editIndex] = newPlan;
      setPlans(updatedPlans);
      setEditIndex(null);
    } else {
      // ✅ Add new plan if not editing
      setPlans([...plans, newPlan]);
    }
  
    // ✅ Reset form data after saving
    setEditPlanData(null);
    setIsOpen(false);
  };
  

  // Function to delete a plan
  const handleDeletePlan = (index: number) => {
    setPlans((prevPlans) => prevPlans.filter((_, i) => i !== index));  
  };
  

  // Function to edit a plan
  const handleEditPlan = (index: number) => {
    setEditIndex(index);   // ✅ Store index of the plan being edited
    setEditPlanData(plans[index]);  // ✅ Store the plan data in state
    setIsOpen(true);  // ✅ Open the form
  };
  

  return (
    <div className="relative">
      {/* Icon Button to Open Form */}
      <RiAddBoxFill
        className="text-orange-500 text-4xl cursor-pointer hover:text-orange-700 transition-colors"
        onClick={() => {
          setEditIndex(null);
          setEditPlanData(null);
          setIsOpen(true);
        }}
      />

      {/* Render Plans Dynamically */}
      <div className="mt-4 grid gap-4">
        {plans.map((plan, index) => (
          <Plan
            key={index}
            plan={plan}
            onEdit={() => handleEditPlan(index)}
            onDelete={() => handleDeletePlan(index)}
          />
        ))}
      </div>

      {/* Popup Form for Adding/Editing */}
      {isOpen && (
  <PlanForm
    onClose={() => {
      setIsOpen(false);
      setEditPlanData(null);
    }}
    onSavePlan={handleSavePlan}
    initialData={editPlanData} // ✅ Ensure edit data is passed
  />
)}

    </div>
  );
};

export default AddPlan;
