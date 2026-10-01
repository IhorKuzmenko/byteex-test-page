import AsSeenIn from "@/components/AsSeenIn/AsSeenIn";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import BenefitsSection from "@/components/Benefits/Benefits";
import BestSelf from "@/components/BestSelf/BestSelf";
import Comfort from "@/components/Comfort/Comfort";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import GreenImpact from "@/components/GreenImpact/GreenImpact";
import FindSomething from "@/components/FindSomething/FindSomething";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AsSeenIn />
      <BenefitsSection />
      <BestSelf />
      <Comfort />
      <Testimonials />
      <FAQ />
      <GreenImpact />
      <FindSomething />
    </main>
  );
}
