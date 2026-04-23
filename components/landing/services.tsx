import { Button } from "@/components/ui/button";
import {
  Calculator,
  FileText,
  Building,
  PiggyBank,
  Scale,
  TrendingUp,
  FileCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Income Tax Planning",
    description: "Strategic tax planning to minimize liability and maximize savings legally.",
    features: ["Tax Return Filing", "Advance Tax Planning", "Tax Audit Support"],
  },
  {
    icon: FileText,
    title: "GST Services",
    description: "Complete GST compliance including registration, filing, and advisory.",
    features: ["GST Registration", "Monthly/Annual Returns", "GST Audit"],
  },
  {
    icon: Building,
    title: "Company Registration",
    description: "End-to-end company incorporation and registration services.",
    features: ["Private Limited", "LLP Formation", "Startup India Registration"],
  },
  {
    icon: Scale,
    title: "Statutory Audit",
    description: "Comprehensive audit services ensuring regulatory compliance.",
    features: ["Financial Audit", "Internal Audit", "Compliance Audit"],
  },
  {
    icon: PiggyBank,
    title: "Accounting Services",
    description: "Professional bookkeeping and accounting solutions for your business.",
    features: ["Book Keeping", "Financial Statements", "MIS Reports"],
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description: "Strategic consulting to help grow and scale your business.",
    features: ["Business Planning", "Financial Projections", "Valuation Services"],
  },
  {
    icon: FileCheck,
    title: "ROC Compliance",
    description: "Complete ROC filing and corporate compliance management.",
    features: ["Annual Filings", "Board Resolutions", "Statutory Registers"],
  },
  {
    icon: Briefcase,
    title: "Payroll Services",
    description: "End-to-end payroll processing and statutory compliance.",
    features: ["Salary Processing", "PF/ESI Compliance", "TDS Management"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive financial services designed to meet all your accounting, 
            taxation, and business needs under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 shadow-sm hover:shadow-xl transition-shadow duration-200 flex flex-col"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary transition-colors">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                className="w-full justify-center text-primary hover:text-secondary hover:bg-secondary/10 group-hover:bg-secondary/10"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
