import React from 'react';
import { Sidebar } from 'flowbite-react';
import { Link, useLocation } from 'react-router';

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

const MainNavbarLayout: React.FC<MainNavbarLayoutProps> = ({ items, children, logo }) => {
  const location = useLocation();

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
                  as={Link} 
                  to={item.to} 
                  icon={item.icon}
                  className={`no-underline text-base ${location.pathname === item.to ? 'bg-gray-100 text-blue-600' : ''}`}
                  aria-current={location.pathname === item.to ? 'page' : undefined}
                >
                  {item.label}
                </Sidebar.Item>
              ))}
            </div>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      <div className="flex-1 p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default MainNavbarLayout;

