"use client";

import { useState } from "react";
import Image from "next/image";
import Star from "@/public/star-b9924c-transparent.webp";
import BadgeCheck from "@/public/verify_recolored_transparent.webp";
import Quote from "@/public/quotation_recolored_transparent.webp";
import Rightarrow from "@/public/right-arrow_recolored_transparent.webp";
import Right from "@/public/rightchevron.webp";
import Left from "@/public/left-chevron.webp";

const testimonials = [
  {
    name: "Amit Patel",
    role: "CEO, TechStart Solutions",
    content:
      "Chatter & Associates has been instrumental in our growth journey. Their strategic tax planning saved us lakhs and their business advisory helped us scale efficiently. Highly recommended!",
    rating: 5,
    image: "AP",
    verified: true,
    highlight: "Saved 15 Lakhs in taxes",
    reviewLink: "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK",
  },
  {
    name: "Sunita Reddy",
    role: "Founder, Reddy Textiles",
    content:
      "The team expertise in GST compliance is exceptional. They simplified our complex multi-state operations and ensured we never missed a deadline. True professionals!",
    rating: 5,
    image: "SR",
    verified: true,
    highlight: "100% compliance achieved",
    reviewLink: "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK",
  },
  {
    name: "Dr. Vikram Singh",
    role: "Medical Professional",
    content:
      "As a busy doctor, I needed someone reliable for my taxes and investments. CA Priya personalized approach and proactive communication gave me complete peace of mind.",
    rating: 5,
    image: "VS",
    verified: true,
    highlight: "Stress-free tax filing",
    reviewLink: "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK",
  },
  {
    name: "Meera Krishnan",
    role: "NRI, Software Engineer",
    content:
      "Managing finances from abroad was a nightmare until I found Chatter & Associates. Their NRI taxation expertise and quick responses made everything seamless.",
    rating: 5,
    image: "MK",
    verified: true,
    highlight: "Seamless NRI services",
    reviewLink: "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK",
  },
  {
    name: "Rahul Sharma",
    role: "Director, Sharma Industries",
    content:
      "We have been with them for over 10 years. Their audit team is thorough, their advice is sound, and their integrity is unmatched. They are not just accountants, they are partners in our success.",
    rating: 5,
    image: "RS",
    verified: true,
    highlight: "10+ years partnership",
    reviewLink: "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK",
  },
  {
    name: "Anjali Gupta",
    role: "Startup Founder",
    content:
      "From company registration to investor-ready financials, they handled everything. CA Rajesh guidance during our funding round was invaluable. Could not have done it without them!",
    rating: 5,
    image: "AG",
    verified: true,
    highlight: "Successful funding round",
    reviewLink: "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK",
  },
];

export function Testimonials() {
  const [selectedReview, setSelectedReview] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = Math.max(testimonials.length - visibleCards, 0);

  const handleReadMore = (link: string) => {
    setSelectedReview(link);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full font-semibold text-sm uppercase tracking-wider mb-4">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Trusted by <span className="text-accent">500+</span> Businesses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Real results from real clients. See how we have helped businesses and
            professionals achieve their financial goals.
          </p>
        </div>

        {/* Rating Summary Card */}
        <div className="flex justify-center items-center gap-5 md:gap-12 mb-12 p-6 bg-card rounded-2xl border border-border shadow-sm max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-1 max-w-7xl">
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-1">
                <Image
                  src={Star}
                  alt="star-icon"
                  width={24}
                  height={24}
                   className="w-4 h-4 mt-1"
                />
                <p className="font-bold text-foreground text-lg">4.9 / 5</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-xs text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="hidden sm:block w-px bg-border" />

          <div className="text-center">
            <p className="font-bold text-foreground text-lg">500+</p>
            <p className="text-xs text-muted-foreground">Happy Clients</p>
          </div>

          <div className="hidden sm:block w-px bg-border" />

          <div className="text-center">
            <p className="font-bold text-foreground text-lg">98%</p>
            <p className="text-xs text-muted-foreground">Satisfaction Rate</p>
          </div>

          <div className="hidden md:block w-px bg-border" />

          <div className="text-center hidden md:block">
            <p className="font-bold text-foreground text-lg">15+ Years</p>
            <p className="text-xs text-muted-foreground">Of Excellence</p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="w-full md:w-1/3 flex-shrink-0 px-3 mt-3"
              >
                <div className="group bg-card rounded-2xl p-4 md:p-6 border border-border hover:border-accent/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative min-h-fit">
                  {/* Highlight badge */}
                  <div className="absolute -top-3 left-4 md:left-6">
                    <span className="bg-accent text-accent-foreground text-[10px] md:text-xs font-semibold px-2.5 md:px-3 py-1 rounded-full shadow-md">
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Quote Icon */}
                  <Image
                    src={Quote}
                    alt="quote-icon"
                    width={36}
                    height={36}
                    className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4 mt-2"
                  />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Image
                        key={i}
                        src={Star}
                        alt="star-icon"
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5 md:w-4 md:h-4"
                      />
                    ))}
                  </div>

                  {/* Review Content */}
                  <div className="mb-5 md:mb-6">
                    <p className="text-foreground leading-relaxed text-xs sm:text-sm md:text-base line-clamp-3">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    <button
                      type="button"
                      onClick={() => handleReadMore(testimonial.reviewLink)}
                      className="mt-3 inline-flex items-center justify-center gap-1 text-accent font-semibold text-xs sm:text-sm hover:text-accent/80 transition-colors"
                    >
                      Read More
                      <Image
                        src={Rightarrow}
                        alt="right"
                        width={16}
                        height={16}
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </button>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 md:gap-4 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-md shrink-0">
                      <span className="text-primary-foreground font-bold text-xs md:text-sm">
                        {testimonial.image}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-foreground text-xs sm:text-sm md:text-base truncate">
                          {testimonial.name}
                        </span>

                        {testimonial.verified && (
                          <Image
                            src={BadgeCheck}
                            alt="verified-badge"
                            width={18}
                            height={18}
                            className="h-4 w-4 md:h-5 md:w-5 shrink-0"
                          />
                        )}
                      </div>

                      <div className="text-[11px] sm:text-xs md:text-sm text-muted-foreground line-clamp-1">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional debug / selected review info */}
        {selectedReview && (
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Opening review:{" "}
            <span className="font-medium text-foreground">Google Reviews</span>
          </div>
        )}

        {/* Carousel Controls */}
        <div className="flex items-center justify-center mt-10 gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full bg-primary text-accent-foreground flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 disabled:hover:scale-100 shadow-md transition"
          >
            <Image
                src={Left}
                alt="left-arrow"
                width={20}
                height={20}
                className="w-5 h-5"
              />
          </button>

          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-6 bg-foreground" : "w-2 bg-ring"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="w-10 h-10 rounded-full bg-primary text-accent-foreground flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 disabled:hover:scale-100 shadow-md transition"
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

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Join our growing family of satisfied clients
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors shadow-md"
          >
            Start Your Success Story
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}