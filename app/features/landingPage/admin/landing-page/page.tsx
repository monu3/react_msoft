import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Page from "../page";

export default function AdminDashboard() {
  const handleNavigation = (path: string) => {
    window.history.pushState({}, "", path);
  };

  const [isPageOpen, setIsPageOpen] = useState(false);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4 md:mb-0">
          Landing Page Management
        </h1>
        <Button
          color="success"
          onClick={() => setIsPageOpen((prev) => !prev)}
          className="w-full md:w-auto"
        >
          {isPageOpen ? (
            <>
              <LuEyeOff className="mr-2 h-5 w-5" />{" "}
              {/* Added LuEyeOff for Close Preview */}
              Close Preview
            </>
          ) : (
            <>
              <LuEye className="mr-2 h-5 w-5" />
              Preview Landing Page
            </>
          )}
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Home Section</h2>
          <p className="text-muted-foreground mb-4">
            Manage your landing page's hero section content.
          </p>
          <Button onClick={() => handleNavigation("landing-page/home-section")}>
            Edit Home Section
          </Button>
        </div>

        <div className="p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <p className="text-muted-foreground mb-4">
            Add or edit product features.
          </p>
          <Button onClick={() => handleNavigation("landing-page/features")}>
            manage features
          </Button>
        </div>

        <div className="p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
          <p className="text-muted-foreground mb-4">
            Upload and manage product screenshots.
          </p>
          <Button onClick={() => handleNavigation("landing-page/screenshots")}>
            Manage Screenshots
          </Button>
        </div>

        <div className="p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Pricing Plans</h2>
          <p className="text-muted-foreground mb-4">
            Configure your pricing plans and features.
          </p>
          <Button onClick={() => handleNavigation("landing-page/pricing")}>
            Manage Pricing
          </Button>
        </div>

        <div className="p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">FAQ</h2>
          <p className="text-muted-foreground mb-4">
            Add or edit frequently asked questions.
          </p>
          <Button onClick={() => handleNavigation("landing-page/faq")}>
            Manage FAQ
          </Button>
        </div>

        <div className="p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
          <p className="text-muted-foreground mb-4">
            Manage customer testimonials and reviews.
          </p>
          <Button onClick={() => handleNavigation("landing-page/testimonials")}>
            Manage Testimonials
          </Button>
        </div>
      </div>

      {isPageOpen && <Page />}
    </div>
  );
}
