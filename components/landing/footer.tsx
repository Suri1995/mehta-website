import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { href: "#services", label: "Our Services" },
  { href: "#team", label: "Our Team" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact Us" },
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
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-serif font-bold text-xl">C&A</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-background">
                  Chatter & Associates
                </h3>
                <p className="text-xs text-background/60 tracking-wider uppercase">
                  Chartered Accountants
                </p>
              </div>
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
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
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
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
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
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  501, Trade Centre, BKC,<br />
                  Bandra East, Mumbai - 400051
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-background/70 hover:text-secondary transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a
                  href="mailto:info@chatterassociates.com"
                  className="text-background/70 hover:text-secondary transition-colors text-sm"
                >
                  info@chatterassociates.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>
              © {new Date().getFullYear()} Chatter & Associates. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
