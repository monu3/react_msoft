import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LuEye, LuEyeOff } from "react-icons/lu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import EmailSettingsForm from "../components/EmailSetting";
import PusherSettings from "../components/PusherSettings";
import PaymentSetting from "../components/PaymentSetting";
import ReCaptchaSetting from "../components/ReCaptchaSetting";
import StorageSettings from "../components/StorageSetting";
import BrandSetting from "../components/BrandSetting";
import CacheSettings from "../components/CacheSettings";
import SeoSetting from "../components/SeoSetting";
import CookieSetting from "../components/CookieSetting";
import ChatGptSetting from "../components/ChatGptSetting";

// Define section configuration
const SECTIONS = [
  {
    id: 'brand',
    title: 'Brand Setting',
    description: "Manage your landing page's hero section content.",
    component: BrandSetting,
    buttonText: 'Edit Home Section',
    maxWidth: '4xl'
  },
  {
    id: 'email',
    title: 'Email Setting',
    description: 'Add or edit product features.',
    component: EmailSettingsForm,
    buttonText: 'Manage Features',
    maxWidth: '4xl'
  },
  {
    id: 'pusher',
    title: 'Pusher Settings',
    description: 'Upload and manage product screenshots.',
    component: PusherSettings,
    buttonText: 'Manage Screenshots',
    maxWidth: '4xl'
  },
  {
    id: 'payment',
    title: 'Payment Setting',
    description: 'Configure your pricing plans and features.',
    component: PaymentSetting,
    buttonText: 'Manage Pricing',
    maxWidth: '4xl'
  },
  {
    id: 'ReCaptcha',
    title: 'ReCaptcha Setting',
    description: 'Add or edit frequently asked questions.',
    component: ReCaptchaSetting,
    buttonText: 'Manage FAQ',
    maxWidth: '2xl'
  },
  {
    id: 'storage',
    title: 'Storage Setting',
    description: 'Manage customer testimonials and reviews.',
    component: StorageSettings,
    buttonText: 'Manage Testimonials',
    maxWidth: '2xl'
  },
  {
    id: 'cache',
    title: 'Cache Setting',
    description: 'Manage customer testimonials and reviews.',
    component: CacheSettings,
    buttonText: 'Manage Testimonials',
    maxWidth: '2xl'
  },
  {
    id: 'seo',
    title: 'SEO Setting',
    description: 'Manage customer testimonials and reviews.',
    component: SeoSetting,
    buttonText: 'Manage Testimonials',
    maxWidth: '2xl'
  },
  {
    id: 'cookie',
    title: 'Cookie Setting',
    description: 'Manage customer testimonials and reviews.',
    component: CookieSetting,
    buttonText: 'Manage Testimonials',
    maxWidth: '2xl'
  },
  {
    id: 'chatGpt',
    title: 'ChatGPT Setting',
    description: 'Manage customer testimonials and reviews.',
    component: ChatGptSetting,
    buttonText: 'Manage Testimonials',
    maxWidth: '2xl'
  },
] as const;

export default function AdminDashboard() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4 md:mb-0">
          Setting Page
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.slice(0).map(section => (
          <div key={section.id} className="p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <p className="text-muted-foreground mb-4">{section.description}</p>
            <Button onClick={() => setOpenSection(section.id)}>
              {section.buttonText}
            </Button>
          </div>
        ))}
      </div>

      {SECTIONS.map(section => {
        const SectionComponent = section.component;
        return (
          <Dialog
            key={section.id}
            open={openSection === section.id}
            onOpenChange={(open) => setOpenSection(open ? section.id : null)}
          >
            <DialogContent className={`max-w-${section.maxWidth}`}>
              <DialogHeader>
                <DialogTitle>{section.title}</DialogTitle>
              </DialogHeader>
              <SectionComponent />
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}