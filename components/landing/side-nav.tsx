"use client";

import { useState, useEffect, useRef } from "react";

// Navigation items in the same order as page sections
const navItems = [
  { id: "who-we-serve", label: "Who We Serve" },
  { id: "why-us", label: "Why Choose Us" },
  { id: "services", label: "Our Services" },
  { id: "team", label: "Our Team" },
  { id: "testimonials", label: "Testimonials" },
  { id: "problems", label: "Problems We Solve" },
  { id: "locations", label: "Locations" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQs" },
];

export function SideNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("who-we-serve");
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Cache element references
    const heroSection = document.getElementById("hero");
    const footerSection = document.getElementById("footer");
    const sectionElements = navItems.map(item => ({
      id: item.id,
      element: document.getElementById(item.id)
    }));

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        // Skip if scroll position hasn't changed significantly
        if (Math.abs(scrollY - lastScrollY.current) < 5) return;
        lastScrollY.current = scrollY;

        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        let shouldShow = false;
        
        if (heroSection) {
          const heroRect = heroSection.getBoundingClientRect();
          const heroFullyPassed = heroRect.bottom <= 0;
          
          let footerInView = false;
          if (footerSection) {
            const footerRect = footerSection.getBoundingClientRect();
            footerInView = footerRect.top <= windowHeight;
          }
          
          shouldShow = heroFullyPassed && !footerInView;
        } else {
          shouldShow = scrollY > 700 && scrollY < documentHeight - windowHeight - 300;
        }
        
        setIsVisible(shouldShow);

        // Determine active section
        let currentActive = "who-we-serve";
        
        for (let i = 0; i < sectionElements.length; i++) {
          const section = sectionElements[i].element;
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= windowHeight / 2) {
              currentActive = sectionElements[i].id;
            }
          }
        }

        setActiveSection(currentActive);
      });
    };

    // Run on mount
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside
      style={{ 
        transform: isVisible ? 'translateX(0) translateY(-50%)' : 'translateX(-2rem) translateY(-50%)',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        willChange: 'transform, opacity',
      }}
      className="fixed left-4 top-1/2 z-40 hidden lg:block transition-[transform,opacity] duration-300 ease-out backface-hidden"
    >
      <nav className="bg-white rounded-2xl shadow-xl border border-border/50 py-5 px-1 min-w-[170px]">
        <ul className="flex flex-col gap-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center w-full text-left py-2.5 px-4 rounded-lg transition-colors duration-150 ${
                    isActive
                      ? "text-primary font-semibold bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {/* Left accent border */}
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full transition-[height] duration-150 ${
                      isActive
                        ? "h-5 bg-primary"
                        : "h-0 bg-transparent"
                    }`}
                  />
                  
                  <span className="text-sm">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
