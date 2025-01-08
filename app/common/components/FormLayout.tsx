import React from "react";

interface FormLayoutProps {
  children: React.ReactNode;
  navbarContent: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children, navbarContent }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left side navbar (1/4 width) */}
      <nav className="w-1/4 bg-gray-100 p-4">{navbarContent}</nav>

      {/* Right side form content (3/4 width) */}
      <main className="w-3/4 p-4">{children}</main>
    </div>
  );
};

export default FormLayout;
