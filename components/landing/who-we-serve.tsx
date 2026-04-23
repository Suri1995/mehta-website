import { Building2, Users, Briefcase, Store, Landmark, Rocket } from "lucide-react";

const clients = [
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    description: "Comprehensive accounting and compliance solutions tailored for growing businesses.",
  },
  {
    icon: Rocket,
    title: "Startups & Entrepreneurs",
    description: "From incorporation to funding, we support your entrepreneurial journey.",
  },
  {
    icon: Users,
    title: "Salaried Professionals",
    description: "Tax planning and investment advisory for maximizing your savings.",
  },
  {
    icon: Briefcase,
    title: "Corporate Entities",
    description: "Full-service audit, compliance, and strategic financial consulting.",
  },
  {
    icon: Store,
    title: "Retail & E-Commerce",
    description: "GST compliance, inventory management, and business optimization.",
  },
  {
    icon: Landmark,
    title: "NRIs & Foreign Nationals",
    description: "Cross-border taxation, FEMA compliance, and remittance guidance.",
  },
];

export function WhoWeServe() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {clients.map((client) => (
            <div
              key={client.title}
              className="group bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <client.icon className="h-7 w-7 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {client.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
