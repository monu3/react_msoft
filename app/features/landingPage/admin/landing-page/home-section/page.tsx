"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function HomeSectionAdmin() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      offerText: formData.get("offerText") as string,
      heading: formData.get("heading") as string,
      description: formData.get("description") as string,
      trustedBy: formData.get("trustedBy") as string,
      liveDemoLink: formData.get("liveDemoLink") as string,
      buyNowLink: formData.get("buyNowLink") as string,
      bannerImage: formData.get("bannerImage") as string,
    };

    // Save data to localStorage
    localStorage.setItem("homeSectionData", JSON.stringify(data));

    setMessage("Home section updated successfully!");
  }

  return (
    <div className="p-6 max-w-4xl mx-auto custom-scroll-container scrollbar-hidden">
      <h1 className="text-2xl font-bold mb-6">Edit Home Section</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Offer Text</label>
          <Input name="offerText" placeholder="70% Special Offer" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Heading</label>
          <Input name="heading" placeholder="CRMGo SaaS" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <Textarea
            name="description"
            placeholder="Use these awesome forms..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Trusted By Text
          </label>
          <Input name="trustedBy" placeholder="1000+ Customers" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Live Demo Link
          </label>
          <Input
            name="liveDemoLink"
            type="url"
            placeholder="https://..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Buy Now Link</label>
          <Input
            name="buyNowLink"
            type="url"
            placeholder="https://..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Banner Image URL
          </label>
          <Input
            name="bannerImage"
            type="url"
            placeholder="https://..."
            required
          />
        </div>

        <Button type="submit">Save Changes</Button>

        {message && <p className="text-green-600 mt-4">{message}</p>}
      </form>
    </div>
  );
}
