import React, { useState, useEffect } from "react";
import { Sidebar } from "flowbite-react";
import { NavLink, useLocation } from "react-router";

interface NavItem {
  to: string;
  label: string;
}

interface NavbarLayoutProps {
  items: NavItem[];
  children: React.ReactNode;
}

const NavbarLayout: React.FC<NavbarLayoutProps> = ({ items, children }) => {
  const [activeMainNav, setActiveMainNav] = useState<string>(""); // To track main nav
  const [activeChildNav, setActiveChildNav] = useState<string>(""); // To track child nav
  const location = useLocation(); // Get current location

  // Update active nav states based on current location
  useEffect(() => {
    const currentPath = location.pathname;

    // Find the main nav item
    const mainNav = items.find((item) => currentPath.startsWith(`/${item.to}`));
    if (mainNav) {
      setActiveMainNav(mainNav.to);
    }

    // Check if the current path matches a child route (based on your route structure)
    // Update active child nav as well, if needed
    const childNav = items.find((item) => currentPath.includes(`/${item.to}`)); // Check for child routes
    if (childNav) {
      setActiveChildNav(childNav.to);
    }
  }, [location, items]);

  return (
    <div className="flex">
      <Sidebar
        aria-label="Sidebar with content separator example"
        className="h-auto"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <div className="flex flex-col gap-4">
              {items.map((item) => {
                // Check if the current nav item or its child is active
                const isActive =
                  activeMainNav === item.to || activeChildNav === item.to;

                return (
                  <Sidebar.Item
                    key={item.to}
                    as={NavLink}
                    to={item.to}
                    className={`
                      no-underline text-lg 
                      ${
                        isActive
                          ? "bg-pink-500 text-white hover:bg-pink-500 hover:text-white"
                          : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                      }
                    `}
                    onClick={() => {
                      // Manually update active states on click if needed
                      setActiveMainNav(item.to);
                      setActiveChildNav("");
                    }}
                  >
                    {item.label}
                  </Sidebar.Item>
                );
              })}
            </div>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      <div className="flex-1 p-6 overflow-auto">{children}</div>
    </div>
  );
};

export default NavbarLayout;
