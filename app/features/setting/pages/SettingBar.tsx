// import React from "react";
// ("use SettingBar");
// import { Sidebar } from "flowbite-react";
// import { Link } from "react-router";
// import { Outlet } from "react-router";

// const SettingBar = () => {
//   return (
//     <>
//     <Sidebar aria-label="Default sidebar example">
//       <Sidebar.Items>
//         <Sidebar.ItemGroup>
//           <Sidebar.Item as={Link} to="" className="no-underline">
//           Brand Settings
//           </Sidebar.Item>
//           <Sidebar.Item as={Link} to="email" className="no-underline">
//             Email Settings
//           </Sidebar.Item>
//           <Sidebar.Item href="#" className="no-underline">
//             Pusher Settings
//           </Sidebar.Item>
//           <Sidebar.Item href="#" className="no-underline">
//             Payment Settings
//           </Sidebar.Item>
//           <Sidebar.Item href="#" className="no-underline">
//             ReCaptcha Setting
//           </Sidebar.Item>
//           <Sidebar.Item href="#" className="no-underline">
//             Storage Setting
//           </Sidebar.Item>
//           <Sidebar.Item href="#" className="no-underline">
//             Cache Settings
//           </Sidebar.Item>
//           <Sidebar.Item href="#" className="no-underline">
//             SEO Settings
//           </Sidebar.Item>
//           <Sidebar.Item href="#" className="no-underline">
//             Cookie Settings
//           </Sidebar.Item>
//           <Sidebar.Item href="#" className="no-underline">
//             ChatGpt Settings
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>
//       </Sidebar.Items>
//     </Sidebar>

//     </>
//   );
// };

// export default SettingBar;

import React from "react";
import { Outlet } from "react-router";
import NavbarLayout from "../../../common/components/NavbarLayout";
import BreadcrumbLayouts from "~/common/components/BreadcrumbLayouts";
import { breadcrumbs } from "~/common/utils/routes/breadcrumbs";

const navItems = [
  { to: "brand", label: "Brand Settings" },
  { to: "email", label: "Email Settings" },
  { to: "pusher", label: "Pusher Settings" },
  { to: "payment", label: "Payment Settings" },
  { to: "recaptcha", label: "ReCaptcha Setting" },
  { to: "storage", label: "Storage Setting" },
  { to: "cache", label: "Cache Settings" },
  { to: "seo", label: "SEO Settings" },
  { to: "cookie", label: "Cookie Settings" },
  { to: "chatgpt", label: "ChatGpt Settings" },
];

const SettingsPage: React.FC = () => {
  return (
    <BreadcrumbLayouts breadcrumbItems={breadcrumbs.settings}>
      <NavbarLayout items={navItems}>
        <Outlet />
      </NavbarLayout>
    </BreadcrumbLayouts>
  );
};

export default SettingsPage;
