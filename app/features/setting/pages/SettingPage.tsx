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
    description: "Manage your brand settings",
    component: BrandSetting,
    buttonText: 'Edit the brands',
    maxWidth: '4xl'
  },
  {
    id: 'email',
    title: 'Email Setting',
    description: 'Add or edit Email.',
    component: EmailSettingsForm,
    buttonText: 'Manage Email Setting',
    maxWidth: '4xl'
  },
  {
    id: 'pusher',
    title: 'Pusher Settings',
    description: 'Change the pusher setting',
    component: PusherSettings,
    buttonText: 'Manage Pusher',
    maxWidth: '4xl'
  },
  {
    id: 'payment',
    title: 'Payment Setting',
    description: 'Configure your payment method',
    component: PaymentSetting,
    buttonText: 'Manage Payment Method',
    maxWidth: '4xl'
  },
  {
    id: 'ReCaptcha',
    title: 'ReCaptcha Setting',
    description: 'Add or edit ReCaptcha',
    component: ReCaptchaSetting,
    buttonText: 'Manage ReCaptcha',
    maxWidth: '2xl'
  },
  {
    id: 'storage',
    title: 'Storage Setting',
    description: 'Manage your storage types',
    component: StorageSettings,
    buttonText: 'Manage Storage',
    maxWidth: '2xl'
  },
  {
    id: 'cache',
    title: 'Cache Setting',
    description: 'Manage Cache info',
    component: CacheSettings,
    buttonText: 'Manage Cache',
    maxWidth: '2xl'
  },
  {
    id: 'seo',
    title: 'SEO Setting',
    description: 'Manage Search Engine Optimization.',
    component: SeoSetting,
    buttonText: 'Manage SEO',
    maxWidth: '2xl'
  },
  {
    id: 'cookie',
    title: 'Cookie Setting',
    description: 'Manage Cookie for site',
    component: CookieSetting,
    buttonText: 'Manage Cookie',
    maxWidth: '2xl'
  },
  {
    id: 'chatGpt',
    title: 'ChatGPT Setting',
    description: 'Manage ChatGpt Key and Model.',
    component: ChatGptSetting,
    buttonText: 'Manage ChatGPT',
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