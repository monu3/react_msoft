import React from "react";
import { Card, List } from "flowbite-react";
import { FaRegDotCircle } from "react-icons/fa";
import { RiEdit2Fill, RiDeleteBin5Fill } from "react-icons/ri";

// Define Props for Plan component
interface PlanProps {
  plan: {
    employees: number;
    clients: number;
    duration: number;
    price: number;
    storage: number;
    isEnabled: boolean;
  };
  onEdit: () => void;
  onDelete: () => void;
}

const Plan: React.FC<PlanProps> = ({ plan, onEdit, onDelete }) => {
  return (
    <Card className="max-w-sm w-full no-underline flex flex-col justify-center items-center rounded-lg relative">
      {/* Edit and Delete Icons */}
      <div className="absolute top-2 right-2 flex gap-2">
        <RiEdit2Fill
          className="text-blue-500 text-lg cursor-pointer hover:text-blue-700"
          onClick={onEdit} // Trigger edit function
        />
        <RiDeleteBin5Fill
          className="text-red-500 text-lg cursor-pointer hover:text-red-700"
          onClick={onDelete} // Trigger delete function
        />
      </div>

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <span>Rs.{plan.price}</span> for {plan.duration} months
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Storage: {plan.storage} MB
      </p>

      <List className="space-y-2">
        <List.Item icon={() => <FaRegDotCircle className="text-orange-500 mr-2" />}>
          {plan.employees} Employees
        </List.Item>
        <List.Item icon={() => <FaRegDotCircle className="text-orange-500 mr-2" />}>
          {plan.clients} Clients
        </List.Item>
        <List.Item icon={() => <FaRegDotCircle className="text-orange-500 mr-2" />}>
          {plan.isEnabled ? "Feature Enabled" : "Feature Disabled"}
        </List.Item>
      </List>
    </Card>
  );
};

export default Plan;
