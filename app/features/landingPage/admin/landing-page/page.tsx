import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Page from "../page";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import HomeSectionAdmin from "./home-section/page";
import FeaturesAdmin from "./features/page";
import ScreenshotsAdmin from "./screenshots/page";
import PricingAdmin from "./pricing/page";
import FAQAdmin from "./faq/page";
import TestimonialsAdmin from "./testimonials/page";

// Define section configuration
const SECTIONS = [
  {
    id: "preview",
    title: "Landing Page Preview",
    description: "Preview how your landing page looks to visitors.",
    component: Page,
    buttonText: "Preview Landing Page",
    maxWidth: "7xl",
    icon: LuEye,
    iconClosed: LuEyeOff,
  },
  {
    id: "home",
    title: "Home Section",
    description: "Manage your landing page's hero section content.",
    component: HomeSectionAdmin,
    buttonText: "Edit Home Section",
    maxWidth: "2xl",
  },
  {
    id: "features",
    title: "Features",
    description: "Add or edit product features.",
    component: FeaturesAdmin,
    buttonText: "Manage Features",
    maxWidth: "4xl",
  },
  {
    id: "screenshots",
    title: "Screenshots",
    description: "Upload and manage product screenshots.",
    component: ScreenshotsAdmin,
    buttonText: "Manage Screenshots",
    maxWidth: "4xl",
  },
  {
    id: "pricing",
    title: "Pricing Plans",
    description: "Configure your pricing plans and features.",
    component: PricingAdmin,
    buttonText: "Manage Pricing",
    maxWidth: "4xl",
  },
  {
    id: "faq",
    title: "FAQ",
    description: "Add or edit frequently asked questions.",
    component: FAQAdmin,
    buttonText: "Manage FAQ",
    maxWidth: "2xl",
  },
  {
    id: "testimonials",
    title: "Testimonials",
    description: "Manage customer testimonials and reviews.",
    component: TestimonialsAdmin,
    buttonText: "Manage Testimonials",
    maxWidth: "4xl",
  },
] as const;

export default function AdminDashboard() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4 md:mb-0">
          Landing Page Management
        </h1>
        <Button
          color="success"
          onClick={() =>
            setOpenSection(openSection === "preview" ? null : "preview")
          }
          className="w-full md:w-auto"
        >
          {openSection === "preview" ? (
            <>
              <LuEyeOff className="mr-2 h-5 w-5" />
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
        {SECTIONS.slice(1).map((section) => (
          <div key={section.id} className="p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <div>
              <p className="text-muted-foreground mb-4">
                {section.description}
              </p>

              <Button onClick={() => setOpenSection(section.id)}>
                {section.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {SECTIONS.map((section) => {
        const SectionComponent = section.component;
        const isPreview = section.id === "preview";

        return (
          <Dialog
            key={section.id}
            open={openSection === section.id}
            onOpenChange={(open) => setOpenSection(open ? section.id : null)}
          >
            <DialogContent
              className={`max-w-${section.maxWidth} ${
                isPreview ? "h-[90vh]" : ""
              }`}
            >
              <DialogHeader>
                <DialogTitle>{section.title}</DialogTitle>
              </DialogHeader>
              <div className={isPreview ? "overflow-auto h-full scrollbar-hidden" : ""}>
                <SectionComponent />
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
