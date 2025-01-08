"use client";

import React from "react";
import { Breadcrumb } from "flowbite-react";


interface LayoutProps {
  children: React.ReactNode;
  breadcrumbItems: { label: string; href?: string }[];
}

const Layout: React.FC<LayoutProps> = ({ children, breadcrumbItems }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Breadcrumb */}
      <nav className="p-4 bg-gray-100">
        <Breadcrumb aria-label="Breadcrumb navigation">
          {breadcrumbItems.map((item, index) => (
            <Breadcrumb.Item key={index} href={item.href} icon={item.href ? undefined : undefined}>
              {item.label}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
};

export default Layout;
