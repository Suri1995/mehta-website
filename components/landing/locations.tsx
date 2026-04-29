import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Head Office - Mumbai",
    address: "501, Trade Centre, BKC, Bandra East, Mumbai - 400051",
    phone: "+91 98765 43210",
    hours: "Mon - Sat: 10:00 AM - 7:00 PM",
    mapUrl: "https://maps.google.com/?q=BKC+Mumbai",
  },
  {
    name: "Branch Office - Pune",
    address: "203, Business Hub, Hinjewadi Phase 1, Pune - 411057",
    phone: "+91 98765 43211",
    hours: "Mon - Sat: 10:00 AM - 7:00 PM",
    mapUrl: "https://maps.google.com/?q=Hinjewadi+Pune",
  },
];

export function Locations() {
  return (
    <section className="py-16 md:py-24 bg-background max-w-7xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Visit Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Our Locations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Visit us at our convenient office locations or connect with us virtually 
            from anywhere in India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                    {location.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {location.address}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-secondary" />
                  <a
                    href={`tel:${location.phone.replace(/\s/g, "")}`}
                    className="text-foreground hover:text-secondary transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span className="text-foreground">{location.hours}</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://maps.app.goo.gl/pCo2vmLy7FujAuSm9" target="_blank" rel="noopener noreferrer">
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
