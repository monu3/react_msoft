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
    route("company", "routes/companyRoute.tsx"), // Company route
    route("test", "routes/test.tsx"), // Test route
    route("form", "routes/Form.tsx"), // Form route

    // route("settings", "features/settings/pages/settingPage.tsx", [
    //   index("features/settings/component/general.tsx"),
    //   route("profile", "features/settings/component/profile.tsx"),
    //   route("security", "features/settings/component/security.tsx"),
    // ]),

    // route("landingpage", "features/landingPage/pages/mainLandingPage.tsx", [
    //   index("features/landingPage/components/CustomPageForm.tsx"),
    //   route("topBar", "features/landingPage/components/topBarForm.tsx"),
    // ]),
  ]),
] satisfies RouteConfig;
