// app/routes.ts
import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  // index("routes/home.tsx"), // Home route (root/index route it will be SSR)
  index("routes/monuhome.tsx"), // Home route it will be SSR
  // layout("routes/monuhome.tsx", [
  // Home route it will be CSR
  route("test", "routes/test.tsx"), // Test  route it will be CSR
  route("form", "routes/form.tsx"),
  // Test  route it will be CSR
] satisfies RouteConfig;
