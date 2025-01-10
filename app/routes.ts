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
    route("plan", "features/plan/pages/planPage.tsx"), // Test route
    route("plan-request", "features/planRequest/components/planRequestDisplay.tsx"), // Form route

    route("landingPage", "features/landingPage/pages/LandingPageHome.tsx", [
      route("topbar", "features/landingPage/components/TopBarForm.tsx"), // Top Bar
      route("customPage", "features/landingPage/components/CustomPageForm.tsx"),
    ]),
    route("settings", "features/setting/pages/SettingBar.tsx", [
      route("brand", "features/setting/components/BrandSetting.tsx"),
      route("email", "features/setting/components/EmailSetting.tsx"),
      route("pusher","features/setting/components/PusherSettings.tsx"),
      route("payment","features/setting/components/PaymentSetting.tsx"),
      route("recaptcha","features/setting/components/ReCaptchaSetting.tsx"),
      route("storage","features/setting/components/StorageSetting.tsx"),
      
    ]),
  ]),
] satisfies RouteConfig;
