// app/routes/test.tsx
import React, { lazy, Suspense } from "react";
import type { Route } from "./+types/test"; // Import types for the route

// Mark the route as client-only:
export const ssr = false;

// Lazy load the TestPage component to reduce initial bundle size
const SettingPage = lazy(() => import("../features/setting/pages/SettingPage"));

/**
 * Defines the Test route with lazy loading and a Suspense fallback.
 */
export default function SettingRoute() {
  return (
    <Suspense >
      <SettingPage />
    </Suspense>
  );
}