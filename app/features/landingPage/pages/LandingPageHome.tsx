// import React from "react";
// import { Outlet } from "react-router";
// import { Sidebar } from "flowbite-react";
// import { Link } from "react-router";

// const LandingPageHome = () => {
//   return (
//     <>
//       <Sidebar
//         aria-label="Sidebar with content separator example"
//         className="h-auto"
//       >
//         <Sidebar.Items>
//           <Sidebar.ItemGroup>
//             <div className="flex flex-col gap-8 justify-center text-10xl">
//               <Sidebar.Item as={Link} to="topbar" className="no-underline">
//                 Top Bar
//               </Sidebar.Item>
//               <Sidebar.Item as={Link} to="customPage" className="no-underline">
//                 Custom Page
//               </Sidebar.Item>
//               <Sidebar.Item as={Link} to="home" className="no-underline">
//                 Home
//               </Sidebar.Item>
//               <Sidebar.Item as={Link} to="feature" className="no-underline">
//                 Feature
//               </Sidebar.Item>
//               <Sidebar.Item as={Link} to="discover" className="no-underline">
//                 Discover
//               </Sidebar.Item>
//               <Sidebar.Item as={Link} to="screenshot" className="no-underline">
//                 screenshot
//               </Sidebar.Item>
//             </div>
//           </Sidebar.ItemGroup>
//         </Sidebar.Items>
//       </Sidebar>

//       <div className="flex-1 p-6 overflow-auto">
//         <Outlet />
//       </div>
//     </>
//   );
// };

// export default LandingPageHome;

import React from "react";
import { Outlet } from "react-router";
import NavbarLayout from "../../../common/components/NavbarLayout";
import BreadcrumbLayouts from "~/common/components/BreadcrumbLayouts";
import { breadcrumbs } from "~/common/utils/routes/breadcrumbs";

const navItems = [
  { to: "topbar", label: "Top Bar" },
  { to: "customPage", label: "Custom Page" },
  { to: "home", label: "Home" },
  { to: "feature", label: "Feature" },
  { to: "discover", label: "Discover" },
  { to: "screenshot", label: "Screenshot" },
];

const LandingPageHome: React.FC = () => {
  return (
    <BreadcrumbLayouts breadcrumbItems={breadcrumbs.landingPage}>
      <NavbarLayout items={navItems}>
        <Outlet />
      </NavbarLayout>
    </BreadcrumbLayouts>
  );
};

export default LandingPageHome;
