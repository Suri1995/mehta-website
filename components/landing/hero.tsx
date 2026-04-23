"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Award, ArrowRight, CheckCircle2 } from "lucide-react";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-1.5">
                <Star className="h-3.5 w-3.5 mr-1.5 fill-secondary text-secondary" />
                4.9/5 Rating
              </Badge>
              <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-1.5">
                <Shield className="h-3.5 w-3.5 mr-1.5" />
                ICAI Certified
              </Badge>
              <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-1.5">
                <Award className="h-3.5 w-3.5 mr-1.5" />
                Award Winning
              </Badge>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              Your Trusted{" "}
              <span className="text-secondary">Financial Partners</span>{" "}
              for Growth & Success
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Expert Chartered Accountants providing comprehensive tax planning, 
              audit, compliance, and business advisory services to help you achieve 
              your financial goals.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-secondary" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
              >
                Call: +91 98765 43210
              </Button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/20">
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center p-4 rounded-2xl ${
                      index % 2 === 0 ? "bg-white/5" : "bg-secondary/10"
                    }`}
                  >
                    <div className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-foreground/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-center text-primary-foreground/60 mb-4">
                  Trusted by Leading Businesses
                </p>
                <div className="flex justify-center items-center gap-8 opacity-60">
                  <div className="text-xl font-bold">TATA</div>
                  <div className="text-xl font-bold">Wipro</div>
                  <div className="text-xl font-bold">Infosys</div>
                  <div className="text-xl font-bold hidden sm:block">HDFC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
