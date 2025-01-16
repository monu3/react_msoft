"use client";

import * as React from "react";
import { useNavigate } from "react-router";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function HeaderSection({ previewMode }: { previewMode?: boolean }) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <NavigationMenu className={`${previewMode ? "hidden" : "block"}`}>
      <div className="flex items-center justify-between w-full gap-10  py-4 bg-blue-50 shadow-md">
        {/* Leftmost Logo */}
        <a>
          <img src="/assets/logo.png" alt="Logo" className="h-12 w-25 ml-44" />
        </a>

        {/* Center Navigation */}
        <NavigationMenuList className="flex space-x-8">
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[300px]">
                <ListItem
                  title="Product 1"
                  onClick={() => handleNavigation("/products/1")}
                >
                  Explore the features of Product 1.
                </ListItem>
                <ListItem
                  title="Product 2"
                  onClick={() => handleNavigation("/products/2")}
                >
                  Learn more about Product 2.
                </ListItem>
                <ListItem
                  title="Product 3"
                  onClick={() => handleNavigation("/products/3")}
                >
                  Details about Product 3.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>  */}
          <NavigationMenuItem>
            <NavigationMenuLink
              className="text-gray-700 hover:text-blue-600"
              onClick={() => handleNavigation("/about")}
            >
              Company
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="text-gray-700 hover:text-blue-600"
              onClick={() => handleNavigation("/resources")}
            >
              Resources
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="text-gray-700 hover:text-blue-600"
              onClick={() => handleNavigation("/pricing")}
            >
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* {/* Rightmost Get Started Button */}
        <button
          onClick={() => handleNavigation("/dashboard")}
          className="rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 mr-48"
        >
          Get Started
        </button>
      </div>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <button
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium text-gray-800">{title}</div>
        <p className="line-clamp-2 text-sm text-gray-600">{children}</p>
      </button>
    </li>
  );
});
ListItem.displayName = "ListItem";
