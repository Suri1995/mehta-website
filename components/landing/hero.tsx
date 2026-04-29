"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import Count from "@/components/landing/count";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "₹100Cr+", label: "Tax Saved" },
  { value: "99%", label: "Success Rate" },
];

const highlights = [
  "Free Initial Consultation",
  "Personalized Solutions",
  "24/7 Support Available",
];

export function Hero() {
  return (
    // ✅ FULL WIDTH SECTION (fix applied)
    <section className="relative overflow-hidden w-full text-primary-foreground pb-10">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* ✅ CONTENT STILL CENTERED */}
      <div className="container mx-auto max-w-7xl px-4 py-16 md:py-20 lg:py-20 relative z-30">
        <div className="gap-12 items-center">

          {/* Content */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-1.5">
                <Star className="h-3.5 w-3.5 mr-1.5 fill-secondary" />
                4.9/5 Rating
              </Badge>
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-1.5">
                <Shield className="h-3.5 w-3.5 mr-1.5" />
                ICAI Certified
              </Badge>
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-1.5">
                <Award className="h-3.5 w-3.5 mr-1.5" />
                Award Winning
              </Badge>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted{" "}
              <span className="text-secondary">Financial Partners</span>{" "}
              for Growth & Success
            </h1>

            <p className="text-md md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Expert Chartered Accountants providing comprehensive tax planning,
              audit, compliance, and business advisory services.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-secondary" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                 variant="outline"
                className=" border-primary-foreground/80 hover:bg-accent text-secondary-foreground font-semibold px-8 bg-accent/70
                hover:scale-105 hover:-translate-y-1 transition-all"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/80 text-primary-foreground 
                bg-foreground  hover:bg-primary-foreground/10 hover:scale-110 transition-all"
              >
                Call: +91 98765 43210
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12">
            <div className="flex justify-center gap-6 md:gap-16 flex-wrap">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-2xl md:text-4xl font-bold text-secondary">
                    <div className="flex items-center justify-center">
                      <Count
                        end={parseInt(stat.value.replace(/\D/g, ""))}
                        duration={3000}
                      />
                      <span>{stat.value.replace(/[0-9]/g, "")}</span>
                    </div>
                  </div>
                  <div className="text-sm text-primary-foreground/70 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-center text-primary-foreground/60 mb-4">
                Trusted by Leading Businesses
              </p>
              <div className="flex justify-center gap-8 opacity-60">
                <div className="text-xl font-bold">TATA</div>
                <div className="text-xl font-bold">Wipro</div>
                <div className="text-xl font-bold">Infosys</div>
                <div className="text-xl font-bold hidden sm:block">HDFC</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ✅ FIXED FULL-WIDTH WAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[100px] md:h-[120px]"
        >
          <path
            d="M0,80 C240,120 480,40 720,70 C960,100 1200,60 1440,80 L1440,120 L0,120 Z"
            className="fill-background"
          />
        </svg>
      </div>

    </section>
  );
}