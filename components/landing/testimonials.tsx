import { Star, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Amit Patel",
    role: "CEO, TechStart Solutions",
    content: "Chatter & Associates has been instrumental in our growth journey. Their strategic tax planning saved us lakhs and their business advisory helped us scale efficiently. Highly recommended!",
    rating: 5,
    image: "AP",
    verified: true,
    highlight: "Saved 15 Lakhs in taxes",
  },
  {
    name: "Sunita Reddy",
    role: "Founder, Reddy Textiles",
    content: "The team expertise in GST compliance is exceptional. They simplified our complex multi-state operations and ensured we never missed a deadline. True professionals!",
    rating: 5,
    image: "SR",
    verified: true,
    highlight: "100% compliance achieved",
  },
  {
    name: "Dr. Vikram Singh",
    role: "Medical Professional",
    content: "As a busy doctor, I needed someone reliable for my taxes and investments. CA Priya personalized approach and proactive communication gave me complete peace of mind.",
    rating: 5,
    image: "VS",
    verified: true,
    highlight: "Stress-free tax filing",
  },
  {
    name: "Meera Krishnan",
    role: "NRI, Software Engineer",
    content: "Managing finances from abroad was a nightmare until I found Chatter & Associates. Their NRI taxation expertise and quick responses made everything seamless.",
    rating: 5,
    image: "MK",
    verified: true,
    highlight: "Seamless NRI services",
  },
  {
    name: "Rahul Sharma",
    role: "Director, Sharma Industries",
    content: "We have been with them for over 10 years. Their audit team is thorough, their advice is sound, and their integrity is unmatched. They are not just accountants, they are partners in our success.",
    rating: 5,
    image: "RS",
    verified: true,
    highlight: "10+ years partnership",
  },
  {
    name: "Anjali Gupta",
    role: "Startup Founder",
    content: "From company registration to investor-ready financials, they handled everything. CA Rajesh guidance during our funding round was invaluable. Could not have done it without them!",
    rating: 5,
    image: "AG",
    verified: true,
    highlight: "Successful funding round",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
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
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 p-6 bg-card rounded-2xl border border-border shadow-sm max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <div>
              <p className="font-bold text-foreground text-lg">4.9 / 5</p>
              <p className="text-xs text-muted-foreground">Average Rating</p>
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-accent/50 shadow-sm hover:shadow-xl transition-shadow duration-200 flex flex-col relative ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Highlight badge */}
              <div className="absolute -top-3 left-6">
                <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {testimonial.highlight}
                </span>
              </div>
              
              <Quote className="h-10 w-10 text-accent/20 mb-4 mt-2" />
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 flex-1 text-sm md:text-base">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-primary-foreground font-bold text-sm">
                    {testimonial.image}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-foreground">
                      {testimonial.name}
                    </span>
                    {testimonial.verified && (
                      <BadgeCheck className="h-4 w-4 text-accent" />
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
