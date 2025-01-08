// app/routes.ts
import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/monuhome.tsx", [
    index("routes/dashboardRoute.tsx"), // Default home route (SSR)
    route("company", "features/company/pages/companyPage.tsx"),
    route("test", "routes/test.tsx"), // Test route
    route("form", "routes/Form.tsx"), // Form route

    route("landingPage", "features/landingPage/pages/LandingPageHome.tsx", [
      route("topbar", "features/landingPage/components/TopBarForm.tsx"), // Top Bar
      route("customPage", "features/landingPage/components/CustomPageForm.tsx"),
    ]),
    route("settings", "features/setting/pages/SettingBar.tsx", [
      route("brand", "features/setting/components/BrandSetting.tsx"),
      route("email", "features/setting/components/EmailSetting.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
