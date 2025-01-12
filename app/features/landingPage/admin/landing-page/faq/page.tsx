"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addFAQ } from "~/features/landingPage/actions/landing-page";
import { useState } from "react";

export default function FAQAdmin() {
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    const result = await addFAQ(formData);
    if (result.success) {
      setMessage("FAQ added successfully!");
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add FAQ</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Question</label>
          <Input name="question" placeholder="What is...?" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Answer</label>
          <Textarea name="answer" placeholder="The answer is..." required />
        </div>

        <Button type="submit">Add FAQ</Button>

        {message && <p className="text-green-600 mt-4">{message}</p>}
      </form>
    </div>
  );
}
