"use client";
import Link from "next/link";
import Image from "next/image";
import LinkedIn from "@/public/linkedin.webp"
import Twitter from "@/public/twitter.webp"
import FaceBook from "@/public/facebook.webp"
import Instagram from "@/public/instagram-white.webp"
import { useState } from "react";
import ArrowRight from "@/public/ARROW.png"
import MapPin from "@/public/mapPin.webp"
import Phone from "@/public/phone.webp"
import Mail from "@/public/mail.webp"

const quickLinks = [
  { href: "#services", label: "Our Services" },
  { href: "#team", label: "Our Team" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact Us" },
  { href: "#", label: "Privacy Policy"}
];

const services = [
  "Income Tax Planning",
  "GST Services",
  "Company Registration",
  "Statutory Audit",
  "Accounting Services",
  "Business Advisory",
  "ROC Compliance",
  "Payroll Services",
];

const socialLinks = [
  { icon: LinkedIn, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: FaceBook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const contactInfo = [
  {
    icon: MapPin,
    description: (
      <>
      501, Trade Centre, BKC, <br/>Bandra East, Mumbai - 400051
      </>
    ),
  },
  {
    icon: Phone,
    description: "+91 98765 43210"
  },
  {
    icon: Mail,
    description: "info@chatterassociates.com"
  },
];

export function Footer() {

  const [ allQuickLinks, setAllQuickLinks] = useState(false);
  const [ allServices, setAllServices ] = useState(false);

  const visibleQuickLinks = allQuickLinks
    ? quickLinks
    : quickLinks.slice(0, 4);

  const visibleServices = allServices
    ? services
    : services.slice(0, 4); 


  return (
    <footer className="bg-foreground text-background max-w-7xl">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="logo-white.webp"
                alt="Mehta-logo"
                width={300}
                height={150}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Expert Chartered Accountants providing comprehensive tax planning, 
              audit, compliance, and business advisory services since 2009.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label={social.label}
                >
                <div>
                  <Image
                  src={social.icon}
                  alt={social.label}
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {(allQuickLinks ? quickLinks : quickLinks.slice(0, 4)).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {quickLinks.length > 4 && (
              <button
                type="button"
                onClick={() => setAllQuickLinks(!allQuickLinks)}
                className="mt-4 text-sm font-medium text-background/40 hover:underline flex justify-center items-center gap-2"
              >
                {allQuickLinks ? "Read Less" : "Read More"}
                {!allQuickLinks && (
                  <Image
                    src={ArrowRight}
                    alt="arrow"
                    width={12}
                    height={12}
                    className="h-3 w-3"
                  />
                )}
              </button>
            )}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {(allServices ? services : services.slice(0, 4)).map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
            {services.length > 4 && (
              <button
                type="button"
                onClick={() => setAllServices(!allServices)}
                className="mt-4 text-sm font-medium text-background/40 hover:underline flex justify-center items-center gap-2"
              >
                {allServices ? "Read Less" : "Read More"}
                {!allQuickLinks && (
                  <Image
                    src={ArrowRight}
                    alt="arrow"
                    width={12}
                    height={12}
                    className="h-3 w-3 text-background/40"
                  />
                )}
              </button>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-center">
                    <div className="w-10 flex-shrink-0 flex justify-center mt-1">
                      <Image
                        src={item.icon}
                        alt="contact icon"
                        className="h-6 w-6 object-contain opacity-80"
                      />
                    </div>

                    <div className="ml-2">
                      <p className="text-background/70 text-sm m-0">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-background/60">
            <p>
              © {new Date().getFullYear()} Chatter & Associates. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-background/60">
              <p>
                Developed by{" "}<a href="https://sellute.com/" className="underline font-bold">Sellute</a>
              </p>
            </div>
        </div>
      </div>
    </footer>
  );
}
