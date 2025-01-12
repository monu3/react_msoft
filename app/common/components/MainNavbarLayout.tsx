import React, { useEffect, useMemo, useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { NavLink, useLocation } from 'react-router';
import { useBrandSettings } from '~/features/setting/hook/useBrandSettings';
import { BRAND_SETTINGS_KEY } from '~/features/setting/hook/useBrandSettings';

interface NavItem {
  to: string;
  label: string;
  icon?: React.ElementType;
}

interface MainNavbarLayoutProps {
  items: NavItem[];
  children: React.ReactNode;
  logo?: string;
  className?: string;
}

const MainNavbarLayout: React.FC<MainNavbarLayoutProps> = ({
  items,
  children,
  logo: propLogo,
  className,
}) => {
  const location = useLocation();
  const { settings, updateSettings } = useBrandSettings();

  // State to manage theme based on system preference
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Detect system theme preference on initial load
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(systemTheme);

    // Listen to system theme changes
    const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    themeMediaQuery.addEventListener('change', handleThemeChange);

    // Clean up listener on component unmount
    return () => themeMediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem(BRAND_SETTINGS_KEY);
      if (stored) {
        try {
          const parsedSettings = JSON.parse(stored);
          updateSettings(parsedSettings);
        } catch (error) {
          console.error('Error parsing settings:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [updateSettings]);

  const logoSrc = useMemo(() => {
    const storedSettings = JSON.parse(localStorage.getItem(BRAND_SETTINGS_KEY) || '{}');
    return theme === 'dark'
      ? storedSettings.darkLogo || settings.darkLogo || propLogo
      : storedSettings.lightLogo || settings.lightLogo || propLogo;
  }, [theme, settings, propLogo]);

  const isActive = (item: NavItem) => {
    return location.pathname === item.to || location.pathname.startsWith(`${item.to}/`);
  };

  useEffect(() => {
    if (settings.favIcon) {
      const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
      if (favicon) {
        favicon.href = settings.favIcon;
      } else {
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.href = settings.favIcon;
        document.head.appendChild(newFavicon);
      }
    }
  }, [settings.favIcon]);

  // useEffect(() => {
  //   if (settings.titleText) {
  //     document.title = settings.titleText;
  //   }
  // }, [settings.titleText]);

  return (
    <div className={`flex ${className || ''}`}>
      <Sidebar aria-label="Main navigation" className="h-screen fixed top-0 left-0 z-10 w-64">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {logoSrc && (
              <div className="mb-6 px-2">
                <img key={logoSrc} src={logoSrc} alt="Logo" className="h-12 w-auto" />
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
                    ${isActive(item)
                      ? "bg-text text-white hover:bg-text-500 hover:text-white"
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                    }
                    transition-colors duration-200
                  `}
                  aria-current={isActive(item) ? 'page' : undefined}
                >
                  {item.label}
                </Sidebar.Item>
              ))}
            </div>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      <div className="flex-1 p-6 overflow-auto bg-[var(--color-bg)] text-[var(--color-text)] ml-64">
        {children}
      </div>
    </div>
  );
};

export default MainNavbarLayout;


