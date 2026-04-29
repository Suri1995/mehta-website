"use client";

import Image from "next/image";
import ArrowRight from "@/public/right-arrow-grey.webp";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer as Chartered Accountants?",
    answer: "We offer comprehensive financial services including Income Tax Planning & Filing, GST Registration & Compliance, Company Registration & ROC Compliance, Statutory & Internal Audits, Accounting & Bookkeeping, Business Advisory, Payroll Management, and NRI Taxation services. Our goal is to be your one-stop solution for all financial needs.",
  },
  {
    question: "How much do you charge for your services?",
    answer: "Our fees vary based on the complexity and scope of services required. We offer competitive pricing with transparent fee structures. ITR filing starts from ₹999 for salaried individuals, while business services are customized based on turnover and requirements. We provide free consultations where we can discuss your needs and provide a detailed quote.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: "Absolutely! Startups and SMEs are a core focus for us. We offer special packages for startups including company registration, Startup India registration, compliance management, and CFO advisory services. We understand the unique challenges of growing businesses and provide scalable solutions.",
  },
  {
    question: "Can you help with income tax notices or assessments?",
    answer: "Yes, we have extensive experience in handling income tax notices, scrutiny assessments, appeals, and litigation. Our team will analyze your case, prepare necessary documentation, represent you before tax authorities, and work towards the best possible resolution.",
  },
  {
    question: "How do you ensure data security and confidentiality?",
    answer: "Client confidentiality is paramount to us. We follow strict data protection protocols, use encrypted communication channels, secure cloud storage, and have signed NDAs with all team members. We are ISO 27001 compliant and regularly audit our security practices.",
  },
  {
    question: "Do you provide services to clients outside Mumbai?",
    answer: "Yes! While we have physical offices in Mumbai and Pune, we serve clients across India through our virtual consultation services. Video calls, secure document sharing, and digital signatures make it seamless to work with us from anywhere.",
  },
  {
    question: "What is the process to engage your services?",
    answer: "Getting started is easy: 1) Book a free consultation through our website or phone, 2) Discuss your requirements with our team, 3) Receive a customized proposal, 4) Share necessary documents through our secure portal, 5) We begin working on your engagement. The entire onboarding process is smooth and can be completed within 24-48 hours.",
  },
  {
    question: "How often will I receive updates on my work?",
    answer: "We believe in proactive communication. You&apos;ll receive regular updates on ongoing work, deadline reminders, and monthly/quarterly reports depending on the service. Each client is assigned a dedicated relationship manager who is available for any queries. We also have a client portal for real-time status tracking.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Find quick answers to common questions about our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 overflow-hidden data-[state=open]:border-secondary/50 data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-secondary py-5 [&[data-state=open]>svg]:text-secondary">
                  <span className="flex flex-row items-center gap-4">
                    <span className="text-secondary font-roboto text-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-10 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-secondary font-semibold hover:underline gap-1"
          >
            Contact Us
            <Image
              src={ArrowRight}
              alt="Arrow-right"
              width={3}
              height={3}
              className="w-3 h-3"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
