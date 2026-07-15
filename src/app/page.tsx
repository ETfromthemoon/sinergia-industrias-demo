import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { LeyRepSection } from "@/components/sections/ley-rep";
import { MethodSection } from "@/components/sections/method";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <LeyRepSection />
        <MethodSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
