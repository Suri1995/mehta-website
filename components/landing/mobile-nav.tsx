"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Briefcase, 
  Users, 
  MessageSquare, 
  Phone,
  ChevronUp,
  X
} from "lucide-react";

const quickLinks = [
  { id: "services", label: "Services", icon: Briefcase },
  { id: "team", label: "Team", icon: Users },
  { id: "testimonials", label: "Reviews", icon: MessageSquare },
  { id: "contact", label: "Contact", icon: Phone },
];

const allLinks = [
  { id: "who-we-serve", label: "Who We Serve" },
  { id: "why-us", label: "Why Choose Us" },
  { id: "services", label: "Our Services" },
  { id: "team", label: "Our Team" },
  { id: "testimonials", label: "Testimonials" },
  { id: "problems", label: "Solutions" },
  { id: "locations", label: "Locations" },
  { id: "trust", label: "Why Trust Us" },
  { id: "faq", label: "FAQs" },
  { id: "contact", label: "Contact Us" },
];

export function MobileNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Cache element references
    const heroSection = document.getElementById("hero");
    const footerSection = document.getElementById("footer");

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const heroBottom = heroSection?.getBoundingClientRect().bottom ?? 0;
        const footerTop = footerSection?.getBoundingClientRect().top ?? Infinity;
        const windowHeight = window.innerHeight;

        const shouldShow = heroBottom < 50 && footerTop > windowHeight - 50;
        setIsVisible(shouldShow);

        if (!shouldShow) {
          setIsExpanded(false);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

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
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsExpanded(false);
    }
  };

  return (
    <>
      {/* Expanded Menu Overlay */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Expanded Menu */}
      <div
        style={{
          transform: isExpanded && isVisible ? 'translateY(0)' : 'translateY(1rem)',
          opacity: isExpanded && isVisible ? 1 : 0,
          pointerEvents: isExpanded && isVisible ? 'auto' : 'none',
          willChange: 'transform, opacity',
        }}
        className="fixed bottom-16 left-4 right-4 bg-white rounded-2xl shadow-2xl z-50 lg:hidden transition-[transform,opacity] duration-200 ease-out backface-hidden"
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Navigate to</h3>
            <button 
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-full hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {allLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors text-sm font-medium text-foreground"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
          willChange: 'transform',
        }}
        className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-border shadow-lg z-50 lg:hidden transition-transform duration-200 ease-out backface-hidden"
      >
        <div className="flex items-center justify-around py-2 px-2">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-muted transition-colors min-w-[60px]"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-xs font-medium text-foreground">{link.label}</span>
              </button>
            );
          })}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-muted transition-colors min-w-[60px]"
          >
            <ChevronUp className={`h-5 w-5 text-primary transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            <span className="text-xs font-medium text-foreground">More</span>
          </button>
        </div>
        
        {/* Safe area padding for iOS */}
        <div className="h-safe-area-inset-bottom bg-white" />
      </nav>
    </>
  );
}
