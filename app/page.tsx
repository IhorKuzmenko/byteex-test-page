import AsSeenIn from "@/components/AsSeenIn/AsSeenIn";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import BenefitsSection from "@/components/Benefits/Benefits";
import BestSelf from '@/components/BestSelf/BestSelf';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AsSeenIn />
      <BenefitsSection />
      <BestSelf />
    </main>
  );
}
