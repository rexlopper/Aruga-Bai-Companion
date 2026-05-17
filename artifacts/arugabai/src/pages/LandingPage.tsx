import { NavBar } from "@/components/sections/NavBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { FamiliesSection } from "@/components/sections/FamiliesSection";
import { PatientsSection } from "@/components/sections/PatientsSection";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { SignupSection } from "@/components/sections/SignupSection";
import { Footer } from "@/components/sections/Footer";
import { useAnalytics } from "@/hooks/useAnalytics";

export default function LandingPage() {
  useAnalytics();

  return (
    <div className="min-h-screen bg-background font-sans">
      <NavBar />
      <main>
        <HeroSection />
        <TrustBar />
        <FamiliesSection />
        <PatientsSection />
        <DoctorsSection />
        <HowItWorksSection />
        <SignupSection />
      </main>
      <Footer />
    </div>
  );
}
