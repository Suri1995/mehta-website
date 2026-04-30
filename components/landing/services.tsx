"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// ✅ Import images correctly (unique names)
import IncomeIcon from "@/public/income-icone.png";
import GstIcon from "@/public/gst-icon.png";
import CompanyIcon from "@/public/company-icon.png";
import AuditIcon from "@/public/hammer-icon.png";
import AccountingIcon from "@/public/accounting-icon.png";
import AdvisoryIcon from "@/public/auditor-icon.png";
import RocIcon from "@/public/income-icone.png";
import PayrollIcon from "@/public/income-icone.png";

type Service = {
  icon: StaticImageData;
  title: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    icon: IncomeIcon,
    title: "Income Tax Planning",
    description:
      "Strategic tax planning to minimize liability and maximize savings legally.",
    features: ["Tax Return Filing", "Advance Tax Planning", "Tax Audit Support"],
  },
  {
    icon: GstIcon,
    title: "GST Services",
    description:
      "Complete GST compliance including registration, filing, and advisory.",
    features: ["GST Registration", "Monthly/Annual Returns", "GST Audit"],
  },
  {
    icon: CompanyIcon,
    title: "Company Registration",
    description:
      "End-to-end company incorporation and registration services.",
    features: ["Private Limited", "LLP Formation", "Startup India Registration"],
  },
  {
    icon: AuditIcon,
    title: "Statutory Audit",
    description:
      "Comprehensive audit services ensuring regulatory compliance.",
    features: ["Financial Audit", "Internal Audit", "Compliance Audit"],
  },
  {
    icon: AccountingIcon,
    title: "Accounting Services",
    description:
      "Professional bookkeeping and accounting solutions for your business.",
    features: ["Book Keeping", "Financial Statements", "MIS Reports"],
  },
  {
    icon: AdvisoryIcon,
    title: "Business Advisory",
    description:
      "Strategic consulting to help grow and scale your business.",
    features: ["Business Planning", "Financial Projections", "Valuation Services"],
  },
  {
    icon: RocIcon,
    title: "ROC Compliance",
    description:
      "Complete ROC filing and corporate compliance management.",
    features: ["Annual Filings", "Board Resolutions", "Statutory Registers"],
  },
  {
    icon: PayrollIcon,
    title: "Payroll Services",
    description:
      "End-to-end payroll processing and statutory compliance.",
    features: ["Salary Processing", "PF/ESI Compliance", "TDS Management"],
  },
];

export function Services() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="py-7 md:py-20 bg-muted/50 mx-auto">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive financial services designed to meet all your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleServices.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 border hover:shadow-xl transition-all flex flex-col"
            >
              {/* ✅ ONLY IMAGE */}
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary transition">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={25}
                  height={25}  
                />
              </div>

              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="w-full bg-gray-300">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Toggle */}
        <div className="flex justify-center mt-10">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="px-10 py-5 text-lg rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition"
          >
            {showAll ? "View Less" : "View All"}
          </Button>
        </div>
      </div>
    </section>
  );
}