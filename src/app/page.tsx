import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { LeyRepSection } from "@/components/sections/ley-rep";
import { MethodSection } from "@/components/sections/method";
import { ContactSection } from "@/components/sections/contact";
import { FeaturedCaseSection } from "@/components/sections/featured-case";
import { BrandFilmSection } from "@/components/sections/brand-film";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="focus-surface">
        <HeroSection />
        <ServicesSection />
        <FeaturedCaseSection />
        <BrandFilmSection />
        <LeyRepSection />
        <MethodSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
