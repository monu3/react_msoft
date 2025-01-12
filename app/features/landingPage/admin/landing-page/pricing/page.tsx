"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addPricingPlan } from "~/features/landingPage/actions/landing-page";
import { useState } from "react";

export default function PricingAdmin() {
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    const result = await addPricingPlan(formData);
    if (result.success) {
      setMessage("Pricing plan added successfully!");
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto custom-scroll-container scrollbar-hidden">
      <h1 className="text-2xl font-bold mb-6">Add Pricing Plan</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Plan Name</label>
          <Input name="name" placeholder="Basic Plan" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <Input name="price" type="number" placeholder="99" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <Textarea
            name="description"
            placeholder="Perfect for small businesses..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Features (one per line)
          </label>
          <Textarea
            name="features"
            placeholder="10 Users&#10;5GB Storage&#10;Basic Support"
            rows={5}
            required
          />
        </div>

        <Button type="submit">Add Pricing Plan</Button>

        {message && <p className="text-green-600 mt-4">{message}</p>}
      </form>
    </div>
  );
}
