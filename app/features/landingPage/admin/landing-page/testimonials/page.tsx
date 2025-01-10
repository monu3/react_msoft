"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addTestimonial } from "~/features/landingPage/actions/landing-page";
import { useState } from "react";

export default function TestimonialsAdmin() {
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    const result = await addTestimonial(formData);
    if (result.success) {
      setMessage("Testimonial added successfully!");
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Testimonial</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Client Name</label>
          <Input name="clientName" placeholder="John Doe" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Position</label>
          <Input name="position" placeholder="CEO at Company" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <Textarea
            name="content"
            placeholder="Their testimonial..."
            required
          />
        </div>

        <Button type="submit">Add Testimonial</Button>

        {message && <p className="text-green-600 mt-4">{message}</p>}
      </form>
    </div>
  );
}
