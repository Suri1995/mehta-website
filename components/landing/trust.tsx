"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Right from "@/public/rightchevron.webp";
import Left from "@/public/left-chevron.webp";
import Shield from "@/public/register.webp";
import Award from "@/public/award.webp";
import Users from "@/public/customers.webp";
import FileCheck from "@/public/edit.webp";
import Clock from "@/public/clock.webp";
import Lock from "@/public/cybersecurity.webp";

const trustFactors = [
  {
    icon: Shield,
    title: "ICAI Registered",
    description:
      "Both partners are registered members of the Institute of Chartered Accountants of India.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description:
      "Recognized for excellence in client service and professional standards.",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description:
      "Trusted by businesses and professionals across diverse industries.",
  },
  {
    icon: FileCheck,
    title: "100% Compliance Record",
    description:
      "Zero penalties or compliance issues for any of our managed clients.",
  },
  {
    icon: Clock,
    title: "15+ Years Experience",
    description:
      "Combined experience of over three decades in the accounting profession.",
  },
  {
    icon: Lock,
    title: "Data Security",
    description:
      "Your financial data is protected with enterprise-grade security measures.",
  },
];

const certifications = [
  "Member - ICAI",
  "DISA Certified",
  "ISO 27001 Compliant",
  "Google Partner",
  "MSME Registered",
];

export function Trust() {
  const [index, setIndex] = useState(0);

  // REQUIRED CHANGE 1: avoid hydration mismatch
  const [visibleCards, setVisibleCards] = useState(3);
  const [mounted, setMounted] = useState(false);

  // REQUIRED CHANGE 2: set correct value after mount
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 1028 ? 1 : 3);
    };

    handleResize();
    setMounted(true);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // REQUIRED CHANGE 3: keep index valid when screen size changes
  useEffect(() => {
    const max = Math.max(trustFactors.length - visibleCards, 0);
    if (index > max) {
      setIndex(max);
    }
  }, [visibleCards, index]);

  const maxIndex = Math.max(trustFactors.length - visibleCards, 0);

  const nextSlide = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  // REQUIRED CHANGE 4: prevent hydration mismatch flash
  if (!mounted) return null;

  return (
    <section id="trust" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Credibility & Trust
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Why Trust Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Your financial matters deserve the highest level of trust and expertise.
            Here&apos;s why clients choose us.
          </p>
        </div>

        {/* Slider wrapper */}
        <div className="max-w-5xl mx-auto mb-12">
          {/* Cards */}
          <div className="overflow-hidden w-full">
            {visibleCards === 1 ? (
              // MOBILE / TABLET: only 1 card visible, no next card peeking
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${index * 100}%)`,
                }}
              >
                {trustFactors.map((factor) => (
                  <div
                    key={factor.title}
                    className="w-full flex-shrink-0 bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Image
                        src={factor.icon}
                        alt={factor.title}
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {factor.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              // DESKTOP: 3 cards visible
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${index * (100 / visibleCards)}%)`,
                }}
              >
                {trustFactors.map((factor) => (
                  <div
                    key={factor.title}
                    className="flex-shrink-0 w-[calc((100%-3rem)/3)] bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Image
                        src={factor.icon}
                        alt={factor.title}
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {factor.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center mt-3 gap-3 mb-6">
            <button
              onClick={prevSlide}
              disabled={index === 0}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Image
                src={Left}
                alt="left-arrow"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>

            <button
              onClick={nextSlide}
              disabled={index === maxIndex}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Image
                src={Right}
                alt="right-arrow"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-center font-semibold text-muted-foreground mb-6">
            Our Certifications & Memberships
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}