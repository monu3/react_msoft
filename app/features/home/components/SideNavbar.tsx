// import React from "react";
// ("use SideNavbar");

// import { Sidebar } from "flowbite-react";
// import { RxDashboard } from "react-icons/rx";
// import { FaIndustry } from "react-icons/fa";
// import { BsFillAwardFill } from "react-icons/bs";
// import { VscGitPullRequest } from "react-icons/vsc";
// import { LuPlaneLanding } from "react-icons/lu";
// import { TfiSettings } from "react-icons/tfi";
// import logo from "public/assets/logo.png";
// import { Link, NavLink } from "react-router";

// const SideNavbar = () => {
//   return (
//     <Sidebar
//       aria-label="Sidebar with content separator example"
//       className="h-screen  "
//     >
//       <Sidebar.Items >
//         <Sidebar.ItemGroup >
//           <div >
//             <img src={logo} alt="Logo" className="h-14 w-auto" />
//           </div>
//           <div className="flex flex-col gap-8 justify-center text-10xl">
//           <Sidebar.Item as={Link} to="/" icon={RxDashboard} className="no-underline">
//             Dashboard
//           </Sidebar.Item>
//           <Sidebar.Item as={Link} to="/company"  icon={FaIndustry} className="no-underline">
//             company
//           </Sidebar.Item>
//           <Sidebar.Item as={Link} to="/test" icon={BsFillAwardFill} className="no-underline">
//             Test
//           </Sidebar.Item>
//           <Sidebar.Item as={Link} to="/form" icon={VscGitPullRequest} className="no-underline">
//             Form
//           </Sidebar.Item>
//           <Sidebar.Item as={Link} to="/landingPage" icon={LuPlaneLanding} className="no-underline">
//             landing page
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={TfiSettings} className="no-underline">
//             setting
//           </Sidebar.Item>
//           </div>
//         </Sidebar.ItemGroup>
//       </Sidebar.Items>
//     </Sidebar>
//   );
// };

// export default SideNavbar;



// import React from "react";
// import MainNavbarLayout from "../../../common/components/MainNavbarLayout";
// import { Sidebar } from "flowbite-react";
// import { Link } from "react-router";
// import { RxDashboard } from "react-icons/rx";
// import { FaIndustry } from "react-icons/fa";
// import { BsFillAwardFill } from "react-icons/bs";
// import { VscGitPullRequest } from "react-icons/vsc";
// import { LuPlaneLanding } from "react-icons/lu";
// import { TfiSettings } from "react-icons/tfi";
// import logo from "public/assets/logo.png";

// const navItems = [
//   { to: "/", label: "Dashboard", icon: RxDashboard },
//   { to: "/company", label: "Company", icon: FaIndustry },
//   { to: "/test", label: "Test", icon: BsFillAwardFill },
//   { to: "/form", label: "Form", icon: VscGitPullRequest },
//   { to: "/landingPage", label: "Landing Page", icon: LuPlaneLanding },
//   { to: "/settings", label: "Settings", icon: TfiSettings },
// ];

// const SideNavbar: React.FC = () => {
//   return (
//     <MainNavbarLayout items={navItems} logo={logo}>
//       <Sidebar
//         aria-label="Sidebar with content separator example"
//         className="h-screen"
//       >
//         <Sidebar.Items>
//           <Sidebar.ItemGroup>
//             <div>
//               <img src={logo} alt="Logo" className="h-14 w-auto" />
//             </div>
//             <div className="flex flex-col gap-8 justify-center text-10xl">
//               {navItems.map((item) => (
//                 <Sidebar.Item
//                   key={item.to}
//                   as={Link}
//                   to={item.to}
//                   icon={item.icon}
//                   className="no-underline "
//                 >
//                   {item.label}
//                 </Sidebar.Item>
//               ))}
//             </div>
//           </Sidebar.ItemGroup>
//         </Sidebar.Items>
//       </Sidebar>
//     </MainNavbarLayout>
//   );
// };

// export default SideNavbar;

