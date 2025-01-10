import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [currentPath, setCurrentPath] = useState("landing-page/home-section");

  useEffect(() => {
    // Update current path based on window location
    const path = window.location.pathname;
    setCurrentPath(path);

    // Listen for popstate events (browser back/forward)
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigation = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  const NavigationLink = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => (
    <Button
      variant="ghost"
      className={`w-full justify-start ${
        currentPath === to ? "text-primary" : ""
      }`}
      onClick={() => handleNavigation(to)}
    >
      {children}
    </Button>
  );

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-muted p-6 space-y-4">
        <h1 className="text-xl font-bold mb-6">Admin Dashboard</h1>
        <nav className="space-y-2">
          <NavigationLink to="landing-page/home-section">
            Home Section
          </NavigationLink>
          <NavigationLink to="landing-page/features">
            Features
          </NavigationLink>
          <NavigationLink to="landing-page/screenshots">
            Screenshots
          </NavigationLink>
          <NavigationLink to="landing-page/pricing">
            Pricing Plans
          </NavigationLink>
          <NavigationLink to="landing-page/faq">FAQ</NavigationLink>
          <NavigationLink to="landing-page/testimonials">
            Testimonials
          </NavigationLink>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default AdminLayout;
