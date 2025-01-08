import { Label } from "flowbite-react";
import type Dashboard from "~/features/dashboard/components/Dashboard";

export const breadcrumbs = {
  Dashboard: [{ label: "Dashboard", href: "/" }],
  landingPage: [{ label: "Dashboard", href: "/" }, { label: "Landing Page" }],
  company: [{ label: "Dashboard", href: "/" }, { label: "Company" }],
  settings: [
    { label: "Dashboard", href: "/" },
     { label: "Settings" }
    ],
    brandsetting:[
      {label: "Dashboard", href: "/" },
      { label: "BrandSetting", href: "/" }
    ]
};
