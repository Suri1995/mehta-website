import { Clock, Shield, Users, Award, HeadphonesIcon, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "15+ Years of Excellence",
    description: "Decades of trusted expertise serving thousands of satisfied clients across industries.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Qualified CAs with specialized knowledge in taxation, audit, and business advisory.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We value your time. All filings and reports delivered well before deadlines.",
  },
  {
    icon: Shield,
    title: "100% Compliance",
    description: "Stay worry-free with our thorough approach to regulatory compliance.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal attention and responsive communication for all your queries.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Strategic advice aimed at maximizing your wealth and business growth.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Advantages
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            Why Choose Us
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            We combine expertise with empathy to deliver exceptional financial services 
            that drive your success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-secondary/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary/30 transition-colors">
                  <reason.icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
