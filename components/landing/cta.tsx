import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, CheckCircle2 } from "lucide-react";

const benefits = [
  "Free 30-minute consultation",
  "No obligation assessment",
  "Expert advice tailored to you",
  "Same-day appointment available",
];

export function CTA() {
  return (
    <section className="py-7 md:py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 max-w-7xl">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 text-balance">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-secondary-foreground/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Join 500+ satisfied clients who trust us with their financial success. 
            Book your free consultation today and discover how we can help you.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-secondary-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="relative px-6 py-3 font-semibold text-white rounded-2xl bg-primary 
                          transition-all duration-300 ease-out
                          animate-breathe
                          hover:scale-105 hover:-translate-y-1
                          hover:shadow-[0_10px_30px_rgba(99,102,241,0.5)]
                          active:scale-95 active:translate-y-0
                          overflow-hidden"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className=" hover:bg-accent border-secondary-foreground/30 text-secondary-foreground bg-sidebar-accent/70 
              font-semibold text-base px-8 
              hover:scale-105 hover:-translate-y-1 
              hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 98765 43210
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
