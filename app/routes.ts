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

    route("landingPage", "features/landingPage/admin/landing-page/page.tsx", [
      index("features/landingPage/admin/page.tsx"),
    ]),
    route("settings", "features/setting/pages/SettingBar.tsx", [
      route("brand", "features/setting/components/BrandSetting.tsx"),
      route("email", "features/setting/components/EmailSetting.tsx"),
    ]),
  ]),

  route("layout", "features/landingPage/admin/landing-page/Layout.tsx"),
  route(
    "landing-page/home-section",
    "features/landingPage/admin/landing-page/home-section/page.tsx"
  ),
  route(
    "landing-page/features",
    "features/landingPage/admin/landing-page/features/page.tsx"
  ),
  // route("layoutPage", "features/monu/admin/landing-page/page.tsx"),
  // route("monu", "features/monu/admin/page.tsx"),
] satisfies RouteConfig;
