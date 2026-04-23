"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const services = [
  "Income Tax Planning",
  "GST Services",
  "Company Registration",
  "Statutory Audit",
  "Accounting Services",
  "Business Advisory",
  "ROC Compliance",
  "Payroll Services",
  "Other",
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert("Thank you! We will contact you shortly.");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            Get Expert Help Today
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Schedule your free consultation or reach out with any questions. 
            We&apos;re here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
            <h3 className="font-serif text-2xl font-bold mb-6">
              Book a Free Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block text-primary-foreground/80">
                    Full Name *
                  </label>
                  <Input
                    required
                    placeholder="Your name"
                    className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-primary-foreground/80">
                    Phone Number *
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-primary-foreground/80">
                  Email Address *
                </label>
                <Input
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-primary-foreground/80">
                  Service Required *
                </label>
                <Select required>
                  <SelectTrigger className="bg-white/10 border-white/20 text-primary-foreground focus:border-secondary">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service.toLowerCase().replace(/\s/g, "-")}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-primary-foreground/80">
                  Message (Optional)
                </label>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Enquiry
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+919876543210" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                      +91 98765 43210
                    </a>
                    <br />
                    <a href="tel:+919876543211" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                      +91 98765 43211
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:info@chatterassociates.com" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                      info@chatterassociates.com
                    </a>
                    <br />
                    <a href="mailto:ca@chatterassociates.com" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                      ca@chatterassociates.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-primary-foreground/70">
                      501, Trade Centre, BKC,<br />
                      Bandra East, Mumbai - 400051
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Working Hours</h4>
                    <p className="text-primary-foreground/70">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-500/20 rounded-2xl p-6 border border-green-500/30">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Quick Connect on WhatsApp</h4>
                  <p className="text-primary-foreground/70 text-sm mb-3">
                    Get instant responses to your queries
                  </p>
                  <Button
                    asChild
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      Chat Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
