"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, X } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        // Show after scrolling 300px
        setIsVisible(scrollY > 300);
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

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsExpanded(false);
  };

  return (
    <div
      style={{
        transform: isVisible ? "translateX(0)" : "translateX(120%)",
        willChange: "transform",
      }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-transform duration-300 ease-out hidden md:flex flex-col gap-3"
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-green-500 text-white rounded-l-xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden"
      >
        <span className="whitespace-nowrap px-4 py-3 text-sm font-medium max-w-0 overflow-hidden group-hover:max-w-[150px] transition-[max-width] duration-300">
          WhatsApp Us
        </span>
        <span className="p-3 bg-green-600">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919876543210"
        className="group flex items-center bg-primary text-primary-foreground rounded-l-xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden"
      >
        <span className="whitespace-nowrap px-4 py-3 text-sm font-medium max-w-0 overflow-hidden group-hover:max-w-[150px] transition-[max-width] duration-300">
          Call Now
        </span>
        <span className="p-3 bg-primary/80">
          <Phone className="h-6 w-6" />
        </span>
      </a>

      {/* Book Consultation Button */}
      <button
        onClick={scrollToContact}
        className="group flex items-center bg-accent text-accent-foreground rounded-l-xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden"
      >
        <span className="whitespace-nowrap px-4 py-3 text-sm font-medium max-w-0 overflow-hidden group-hover:max-w-[150px] transition-[max-width] duration-300">
          Book Consultation
        </span>
        <span className="p-3 bg-accent/80">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
