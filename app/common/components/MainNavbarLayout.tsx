import React from "react";
import { Sidebar } from "flowbite-react";
import { NavLink, useLocation } from "react-router";

interface NavItem {
  to: string;
  label: string;
  icon?: React.ElementType;
}

interface MainNavbarLayoutProps {
  items: NavItem[];
  children: React.ReactNode;
  logo?: string;
}

const MainNavbarLayout: React.FC<MainNavbarLayoutProps> = ({
  items,
  children,
  logo,
}) => {
  const location = useLocation();

  const isActive = (item: NavItem) => {
    return (
      location.pathname === item.to ||
      location.pathname.startsWith(`${item.to}/`)
    );
  };

  return (
    <div className="flex">
      <Sidebar aria-label="Main navigation" className="h-screen">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {logo && (
              <div className="mb-6 px-2">
                <img src={logo} alt="Logo" className="h-12 w-auto" />
              </div>
            )}
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <Sidebar.Item
                  key={item.to}
                  as={NavLink}
                  to={item.to}
                  icon={item.icon}
                  className={`
                    no-underline text-base 
                    ${
                      isActive(item)
                        ? "bg-pink-500 text-white hover:bg-pink-500 hover:text-white"
                        : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                    }
                    transition-colors duration-200
                  `}
                  aria-current={isActive(item) ? "page" : undefined}
                >
                  {item.label}
                </Sidebar.Item>
              ))}
            </div>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className="flex-1 p-6 overflow-auto bg-[var(--color-bg)] text-[var(--color-text)]">
        {children}
      </div>
    </div>
  );
};

export default MainNavbarLayout;
