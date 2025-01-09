// app/routes.ts
import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  // // index("routes/home.tsx"), // Home route (root/index route it will be SSR)
  // index("routes/monuhome.tsx"), // Home route it will be SSR
  // route("company", "routes/companyRoute.tsx"),
  // // layout("routes/monuhome.tsx", [
  // // Home route it will be CSR
  // route("test", "routes/test.tsx"), // Test  route it will be CSR
  // route("form", "routes/Form.tsx"),
  // // Test  route it will be CSR

  layout("routes/monuhome.tsx", [
    index("routes/dashboardRoute.tsx"), // Default home route (SSR)
    route("company", "routes/companyRoute.tsx"), // Company route
    //route("test", "routes/test.tsx"), // Test route
    route("form", "routes/Form.tsx"), // Form route
    route("plan", "routes/plan.tsx"),
    route("plan-request", "routes/planRequest.tsx"),
  ]),
] satisfies RouteConfig;
