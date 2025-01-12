// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { addPricingPlan } from "~/features/landingPage/actions/landing-page";
// import { useState } from "react";

// export default function PricingAdmin() {
//   const [message, setMessage] = useState("");

//   async function handleSubmit(formData: FormData) {
//     const result = await addPricingPlan(formData);
//     if (result.success) {
//       setMessage("Pricing plan added successfully!");
//     }
//   }

//   return (
//     <div className="p-6 max-w-4xl mx-auto custom-scroll-container scrollbar-hidden">
//       <h1 className="text-2xl font-bold mb-6">Add Pricing Plan</h1>
//       <form action={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Plan Name</label>
//           <Input name="name" placeholder="Basic Plan" required />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Price</label>
//           <Input name="price" type="number" placeholder="99" required />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Description</label>
//           <Textarea
//             name="description"
//             placeholder="Perfect for small businesses..."
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">
//             Features (one per line)
//           </label>
//           <Textarea
//             name="features"
//             placeholder="10 Users&#10;5GB Storage&#10;Basic Support"
//             rows={5}
//             required
//           />
//         </div>

//         <Button type="submit">Add Pricing Plan</Button>

//         {message && <p className="text-green-600 mt-4">{message}</p>}
//       </form>
//     </div>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, type FormEvent } from "react";
import type { PricingPlan } from "../pricing/types";

export default function PricingAdmin() {
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]); // Typing the pricingPlans state

  // Define formData type to allow for new plans (id: null)
  const [formData, setFormData] = useState<
    PricingPlan & { id: number | null } // Ensure id can be null
  >({
    id: 0,
    name: "",
    price: 0,
    description: "",
    features: [],
  });

  const [message, setMessage] = useState<string>("");

  // Fetch pricing plans from localStorage on load
  useEffect(() => {
    const savedPlans = JSON.parse(localStorage.getItem("pricingPlans") || "[]") as PricingPlan[];
    setPricingPlans(savedPlans);
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const updatedPlans = [...pricingPlans];
    const form = new FormData(event.target as HTMLFormElement);

    const newPlan: PricingPlan = {
      id: formData.id || new Date().getTime(), // Unique ID based on timestamp
      name: form.get("name") as string,
      price: parseFloat(form.get("price") as string),
      description: form.get("description") as string,
      features: (form.get("features") as string).split("\n"), // Convert newline-separated string to array
    };

    if (formData.id) {
      // Edit existing plan
      const index = updatedPlans.findIndex((plan) => plan.id === formData.id);
      updatedPlans[index] = newPlan;
      setMessage("Pricing plan updated successfully!");
    } else {
      // Add new plan
      updatedPlans.push(newPlan);
      setMessage("Pricing plan added successfully!");
    }

    localStorage.setItem("pricingPlans", JSON.stringify(updatedPlans));
    setPricingPlans(updatedPlans);

    // Reset form data
    setFormData({ id: 0, name: "", price: 0, description: "", features: [] });
  }

  async function handleDelete(id: number) {
    if (confirm("Are you sure you want to delete this plan?")) {
      const updatedPlans = pricingPlans.filter((plan) => plan.id !== id);
      setPricingPlans(updatedPlans);
      localStorage.setItem("pricingPlans", JSON.stringify(updatedPlans));
      setMessage("Pricing plan deleted successfully!");
    }
  }

  function handleEdit(plan: PricingPlan) {
    setFormData(plan);
  }

  return (
    <div className="p-6 max-w-4xl mx-auto custom-scroll-container scrollbar-hidden">
      <h1 className="text-2xl font-bold mb-6">{formData.id ? "Edit Pricing Plan" : "Add Pricing Plan"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Plan Name</label>
          <Input
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Basic Plan"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <Input
            name="price"
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
            placeholder="99"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Perfect for small businesses..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Features (one per line)</label>
          <Textarea
            name="features"
            value={formData.features.join("\n")} // Convert array back to newline-separated string
            onChange={(e) => setFormData({ ...formData, features: e.target.value.split("\n") })}
            placeholder="10 Users&#10;5GB Storage&#10;Basic Support"
            rows={5}
            required
          />
        </div>

        <Button type="submit">{formData.id ? "Update" : "Add"} Pricing Plan</Button>
        {message && <p className="text-green-600 mt-4">{message}</p>}
      </form>

      <h2 className="text-xl font-bold mt-10">Existing Pricing Plans</h2>
      <ul className="space-y-4 mt-4">
        {pricingPlans.map((plan) => (
          <li key={plan.id} className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="text-sm">Price: ${plan.price}</p>
            <p className="text-sm">Description: {plan.description}</p>
            <p className="text-sm">Features: {plan.features.join(", ")}</p>
            <div className="mt-4 space-x-2">
              <Button onClick={() => handleEdit(plan)}>Edit</Button>
              <Button variant="destructive" onClick={() => handleDelete(plan.id)}>
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
