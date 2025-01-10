"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addScreenshot } from "~/features/landingPage/actions/landing-page";
import { useState } from "react";

export default function ScreenshotsAdmin() {
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    const result = await addScreenshot(formData);
    if (result.success) {
      setMessage("Screenshot added successfully!");
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Screenshot</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Screenshot Name
          </label>
          <Input name="name" placeholder="CRM Dashboard" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <Input name="image" type="url" placeholder="https://..." required />
        </div>

        <Button type="submit">Add Screenshot</Button>

        {message && <p className="text-green-600 mt-4">{message}</p>}
      </form>
    </div>
  );
}
