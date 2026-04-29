"use client";

import { useState } from "react";
import Image from "next/image";

import Building2 from "@/public/building-icon.webp";
import Rocket from "@/public/rocket-icon.webp";
import Users from "@/public/users-icon.webp";
import Briefcase from "@/public/corporate.webp";
import Store from "@/public/ecommerce-icon.webp";
import Landmark from "@/public/nris.webp";

const clients = [
  {
    icon: Building2,
    isImage: true,
    title: "Small & Medium Businesses",
    description:
      "Comprehensive accounting and compliance solutions tailored for growing businesses.",
  },
  {
    icon: Rocket,
    isImage: true,
    title: "Startups & Entrepreneurs",
    description:
      "From incorporation to funding, we support your entrepreneurial journey.",
  },
  {
    icon: Users,
    isImage: true,
    title: "Salaried Professionals",
    description:
      "Tax planning and investment advisory for maximizing your savings.",
  },
  {
    icon: Briefcase,
    isImage: true,
    title: "Corporate Entities",
    description:
      "Full-service audit, compliance, and strategic financial consulting.",
  },
  {
    icon: Store,
    isImage: true,
    title: "Retail & E-Commerce",
    description:
      "GST compliance, inventory management, and business optimization.",
  },
  {
    icon: Landmark,
    isImage: true,
    title: "NRIs & Foreign Nationals",
    description:
      "Cross-border taxation, FEMA compliance, and remittance guidance.",
  },
];

export function WhoWeServe() {
  const [showAll, setShowAll] = useState(false);

  // Show only 3 initially, all when toggled
  const visibleClients = showAll ? clients : clients.slice(0, 3);

  return (
    <section className="py-7 md:py-20 bg-background max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Clientele
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Who We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We cater to a diverse range of clients, providing customized financial
            solutions that meet their unique needs and goals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleClients.map((client) => {
            return (
              <div
                key={client.title}
                className="group bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/30 rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                  <Image
                    src={client.icon}
                    alt={client.title}
                    width={40}
                    height={30}
                    className="object-contain"
                  />
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {client.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {client.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-10 py-3 text-lg text-md rounded-xl bg-primary text-white font-semibold hover:bg-secondary hover:-translate-y-3 hover:shadow-lg transition-all duration-300"
          >
            {showAll ? "View Less" : "View All"}
          </button>
        </div>
      </div>
    </section>
  );
}