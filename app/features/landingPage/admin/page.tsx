import { HomeSection } from "~/features/landingPage/components/sections/home-section";
import { FeaturesSection } from "~/features/landingPage/components/sections/features-section";
import { DiscoverSection } from "~/features/landingPage/components/sections/discover-section";
import { ScreenshotsSection } from "~/features/landingPage/components/sections/screenshots-section";
import { PricingSection } from "~/features/landingPage/components/sections/pricing-section";
import { FAQSection } from "~/features/landingPage/components/sections/faq-section";
import { TestimonialsSection } from "~/features/landingPage/components/sections/testimonials-section";
import { Outlet } from "react-router";
import {TrustSection} from "~/features/landingPage/components/sections/trusted-section";

export default function LandingPage() {
  return (
      <main className="min-h-screen">
        <HomeSection />
        <FeaturesSection />
        <TrustSection />
        <DiscoverSection />
        <ScreenshotsSection />
        <PricingSection />
        <FAQSection />
        <TestimonialsSection />
        <Outlet/>
      </main>
  );
}
