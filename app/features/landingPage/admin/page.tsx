import { HomeSection } from "~/features/landingPage/components/sections/home-section";
import { FeaturesSection } from "~/features/landingPage/components/sections/features-section";
import { DiscoverSection } from "~/features/landingPage/components/sections/discover-section";
import { ScreenshotsSection } from "~/features/landingPage/components/sections/screenshots-section";
import { PricingSection } from "~/features/landingPage/components/sections/pricing-section";
import { FAQSection } from "~/features/landingPage/components/sections/faq-section";
import { TestimonialsSection } from "~/features/landingPage/components/sections/testimonials-section";
import { Outlet } from "react-router";

export default function LandingPage() {
  return (
      <main className="min-h-screen">
        <HomeSection />
        <FeaturesSection />
        <DiscoverSection />
        <ScreenshotsSection />
        <PricingSection />
        <FAQSection />
        <TestimonialsSection />
        <Outlet/>
      </main>
  );
}
