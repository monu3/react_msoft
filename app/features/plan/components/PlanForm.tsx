import { Button, Label, TextInput, ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

// Define Props for PlanForm
// Define Props for PlanForm
interface PlanFormProps {
  onClose: () => void;
  onSavePlan: (plan: PlanData) => void;  // ✅ Fix: Rename onAddPlan to onSavePlan
  initialData?: PlanData | null;
}


// Define PlanData type
interface PlanData {
  employees: number;
  clients: number;
  duration: number;
  price: number;
  storage: number;
  isEnabled: boolean;
}

const PlanForm: React.FC<PlanFormProps> = ({ onClose, onSavePlan, initialData }) => {
  const [formData, setFormData] = useState<Omit<PlanData, "isEnabled">>({
    employees: initialData?.employees || 0,
    clients: initialData?.clients || 0,
    duration: initialData?.duration || 0,
    price: initialData?.price || 0,
    storage: initialData?.storage || 0,
  });
  const [isEnabled, setIsEnabled] = useState<boolean>(initialData?.isEnabled || false);
  

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: Number(e.target.value) });
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSavePlan({ ...formData, isEnabled });
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
            <Label htmlFor="employees" value="Number of Employees" />
            <TextInput id="employees" type="number" placeholder="Enter employees" required onChange={handleChange} value={formData.employees}/>
          </div>

          <div className="flex-1">
            <Label htmlFor="clients" value="Number of Clients" />
            <TextInput id="clients" type="number" placeholder="Enter clients" required onChange={handleChange} value={formData.clients}/>
          </div>
        </div>

        <div className="flex gap-10 mb-2">
          <div className="flex-1">
            <Label htmlFor="duration" value="Duration (in months)" />
            <TextInput id="duration" type="number" placeholder="Enter duration" required onChange={handleChange} value={formData.duration}/>
          </div>

          <div className="flex-1">
            <Label htmlFor="price" value="Price (Rs.)" />
            <TextInput id="price" type="number" placeholder="Enter price" required onChange={handleChange} value={formData.price}/>
          </div>
        </div>

        <div className="mb-2">
          <Label htmlFor="storage" value="Storage (MB)" />
          <TextInput id="storage" type="number" placeholder="Enter storage size" required onChange={handleChange} value={formData.storage}/>
        </div>

        <div className="flex items-center justify-between mt-4 mb-4">
          <Label htmlFor="enable" value="Enable Feature" />
          <ToggleSwitch id="enable" checked={isEnabled} onChange={(value) => setIsEnabled(value)} />
        </div>

        <Button type="submit" className="bg-orange-500 hover:bg-orange-700 transition-colors">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PlanForm;
