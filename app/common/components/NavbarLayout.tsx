import React from 'react';
import { Sidebar } from 'flowbite-react';
import { Link } from 'react-router';

interface NavItem {
  to: string;
  label: string;
}

interface NavbarLayoutProps {
  items: NavItem[];
  children: React.ReactNode;
}

const NavbarLayout: React.FC<NavbarLayoutProps> = ({ items, children }) => {
  return (
    <div className="flex">
      <Sidebar aria-label="Sidebar with content separator example" className="h-auto">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <Sidebar.Item key={item.to} as={Link} to={item.to} className="no-underline text-lg">
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

export default NavbarLayout;

