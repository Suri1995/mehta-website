"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Award from "@/public/experience.webp";
import Users from "@/public/award-icon.webp";
import Clock from "@/public/time-icon.webp";
import Shield from "@/public/compliance-icon.webp";
import HeadphonesIcon from "@/public/customer-icon.webp";
import TrendingUp from "@/public/grow-icon.webp";

const reasons = [
  {
    icon: Award,
    title: "15+ Years of Excellence",
    description:
      "Decades of trusted expertise serving thousands of satisfied clients across industries.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Qualified CAs with specialized knowledge in taxation, audit, and business advisory.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We value your time. All filings and reports delivered well before deadlines.",
  },
  {
    icon: Shield,
    title: "100% Compliance",
    description:
      "Stay worry-free with our thorough approach to regulatory compliance.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Personal attention and responsive communication for all your queries.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description:
      "Strategic advice aimed at maximizing your wealth and business growth.",
  },
];

export function WhyChooseUs() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const maxIndex = Math.max(reasons.length - visibleCards, 0);

  const scrollToIndex = (newIndex: number) => {
    if (!scrollRef.current || !cardRef.current) return;

    const cardWidth = cardRef.current.offsetWidth;
    const gap = 24; // gap-6

    scrollRef.current.scrollTo({
      left: newIndex * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const newIndex = Math.min(index + 1, maxIndex);
    setIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = Math.max(index - 1, 0);
    setIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <section
      id="why-us"
      className="py-7 md:py-20 bg-primary text-primary-foreground relative overflow-hidden mx-auto"
    >
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Advantages
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Why Choose Us
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            We combine expertise with empathy to deliver exceptional financial services.
          </p>
        </div>

        {/* Container */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">

          {/* Arrows */}
          <div className="flex justify-end gap-2 mb-4">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className="bg-white/10 hover:bg-blue-500 p-2 rounded-full disabled:opacity-30 transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={handleNext}
              disabled={index >= maxIndex}
              className="bg-white/10 hover:bg-blue-500 p-2 rounded-full disabled:opacity-30 transition"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden scroll-smooth"
          >
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                ref={i === 0 ? cardRef : null}
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
                bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 
                hover:border-secondary/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                    <Image
                      src={reason.icon}
                      alt={reason.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-primary-foreground/70">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}