import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { WhoWeServe } from "@/components/landing/who-we-serve";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { Services } from "@/components/landing/services";
import { Team } from "@/components/landing/team";
import { Testimonials } from "@/components/landing/testimonials";
import { CTA } from "@/components/landing/cta";
import { Problems } from "@/components/landing/problems";
import { BeforeAfter } from "@/components/landing/before-after";
import { Locations } from "@/components/landing/locations";
import { Contact } from "@/components/landing/contact";
import { Trust } from "@/components/landing/trust";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { SideNav } from "@/components/landing/side-nav";
import { MobileNav } from "@/components/landing/mobile-nav";
// import { FloatingCTA } from "@/components/landing/floating-cta";

export default function Home() {
  return (
    <main className="min-h-screen pb-16 lg:pb-0">
      <Header />
      <SideNav />
      <MobileNav />
      {/* <FloatingCTA /> */}
      
      {/* Hero - Full width */}
      <section id="hero" className="bg-gradient-to-br from-primary via-primary to-primary/90">
        <Hero />
      </section>
      
      {/* Content sections with left padding for sidebar on desktop */}
      <div className="lg:pl-56">
        <section id="who-we-serve">
          <WhoWeServe />
        </section>
        <section id="why-us">
          <WhyChooseUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <CTA />
        <section id="problems">
          <Problems />
        </section>
        <BeforeAfter />
        <section id="trust">
          <Trust />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="locations">
          <Locations />
        </section>
      </div>
      
      {/* Footer - Full width */}
      <footer id="footer">
        <Footer />
      </footer>
    </main>
  );
}
