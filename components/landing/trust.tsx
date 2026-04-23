import { Shield, Award, Users, FileCheck, Clock, Lock } from "lucide-react";

const trustFactors = [
  {
    icon: Shield,
    title: "ICAI Registered",
    description: "Both partners are registered members of the Institute of Chartered Accountants of India.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized for excellence in client service and professional standards.",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Trusted by businesses and professionals across diverse industries.",
  },
  {
    icon: FileCheck,
    title: "100% Compliance Record",
    description: "Zero penalties or compliance issues for any of our managed clients.",
  },
  {
    icon: Clock,
    title: "15+ Years Experience",
    description: "Combined experience of over three decades in the accounting profession.",
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Your financial data is protected with enterprise-grade security measures.",
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
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {trustFactors.map((factor) => (
            <div
              key={factor.title}
              className="bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <factor.icon className="h-8 w-8 text-primary" />
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
