import React from "react";
import MainNavbarLayout from "../../../common/components/MainNavbarLayout";
import { Outlet } from "react-router";
import { RxDashboard } from "react-icons/rx";
import { FaIndustry } from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";
import { VscGitPullRequest } from "react-icons/vsc";
import { LuPlaneLanding } from "react-icons/lu";
import { TfiSettings } from "react-icons/tfi";
import logo from "public/assets/logo.png";

const navItems = [
  { to: "/", label: "Dashboard", icon: RxDashboard },
  { to: "/company", label: "Company", icon: FaIndustry },
  { to: "/plan", label: "Plan", icon: BsFillAwardFill },
  { to: "/plan-request", label: "Plan Request", icon: VscGitPullRequest },
  { to: "/landingPage", label: "Landing Page", icon: LuPlaneLanding },
  { to: "/settings", label: "Settings", icon: TfiSettings },
];

export function HomePage() {
  return (
    <MainNavbarLayout items={navItems} logo={logo}>
      {/* Dynamic Content Area */}
      <Outlet />
    </MainNavbarLayout>
  );
}

export default HomePage;
