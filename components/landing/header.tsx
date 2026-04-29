"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2.5 justify-end">
        <div className="mx-auto px-4 max-w-7xl">
        <div className="container  flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </a>
            <a href="mailto:info@chatterassociates.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              info@chatterassociates.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Mon - Sat: 10:00 AM - 7:00 PM
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Mumbai | Delhi | Bangalore
            </span>
          </div>
        </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300  ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-2 max-w-7xl justify-end">
          <div className="flex items-center justify-between h-20 ">
           <Image 
             src={"/metha-logo.webp"} 
             alt="Rohit metha logo "
             width={400}
             height={100}
           />
           

    
            {/* Contact Info - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors -my-15">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center ">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call Us</p>
                  <p className="text-sm font-semibold">+91 98765 43210</p>
                </div>
              </a>
              <a href="mailto:info@chatterassociates.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors ">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email Us</p>
                  <p className="text-sm font-semibold">info@chatterassociates.com</p>
                </div>
              </a>
            </div>

          </div>
        </div>

        {/* Mobile Contact Bar */}
        <div className="md:hidden bg-muted/50 py-2 px-4 flex justify-center gap-4 text-sm border-t border-border/50">
          <a href="tel:+919876543210" className="flex items-center gap-1.5 text-foreground">
            <Phone className="h-3.5 w-3.5 text-primary" />
            Call
          </a>
          <a href="mailto:info@chatterassociates.com" className="flex items-center gap-1.5 text-foreground">
            <Mail className="h-3.5 w-3.5 text-primary" />
            Email
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-green-600">
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </header>
    </>
  );
}
