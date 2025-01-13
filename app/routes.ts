// app/routes.ts
import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  // layout("routes/monuhome.tsx", [
  //   index("routes/dashboardRoute.tsx"), // Default home route (SSR)
  //   route("company", "features/company/pages/companyPage.tsx"),
  //   route("plan", "features/plan/pages/planPage.tsx"), // Test route
  //   route("plan-request", "features/planRequest/components/planRequestDisplay.tsx"), // Form route
  //   route("landingPage", "features/landingPage/admin/landing-page/page.tsx"), 
  //   route("settings", "features/setting/pages/SettingPage.tsx"),
  // ]),

  
  index("features/landingPage/admin/page.tsx"),
  layout("routes/monuhome.tsx", [
    route("dashboard","features/dashboard/pages/DashboardPage.tsx"), // Default home route (SSR)
    route("company", "features/company/pages/companyPage.tsx"),
    route("plan", "features/plan/pages/planPage.tsx"), // Test route
    route("plan-request", "features/planRequest/components/planRequestDisplay.tsx"), // Form route
    route("landingPage", "features/landingPage/admin/landing-page/page.tsx"), 
    route("settings", "features/setting/pages/SettingPage.tsx"),
  ]),
] satisfies RouteConfig;
