import { X, Check, ArrowRight } from "lucide-react";

const comparisons = [
  {
    category: "Tax Planning",
    before: "Paying 30% effective tax rate",
    after: "Optimized to 15% effective rate",
    savings: "₹5L+ saved annually",
  },
  {
    category: "Compliance",
    before: "Missed deadlines, penalties",
    after: "100% on-time filings",
    savings: "Zero penalties",
  },
  {
    category: "Financial Clarity",
    before: "No idea where money goes",
    after: "Real-time financial dashboards",
    savings: "Better decisions",
  },
  {
    category: "Business Growth",
    before: "Stuck at same revenue",
    after: "Strategic financial planning",
    savings: "2X revenue growth",
  },
];

export function BeforeAfter() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Real Results
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Before & After Working With Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            See the transformation our clients experience when they partner with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {comparisons.map((item) => (
            <div
              key={item.category}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="bg-primary px-6 py-4">
                <h3 className="font-serif text-xl font-bold text-primary-foreground">
                  {item.category}
                </h3>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center">
                  {/* Before */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <X className="h-6 w-6 text-red-500" />
                    </div>
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wider block mb-2">
                      Before
                    </span>
                    <p className="text-sm text-foreground">{item.before}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-secondary" />
                  </div>

                  {/* After */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <span className="text-xs font-semibold text-green-500 uppercase tracking-wider block mb-2">
                      After
                    </span>
                    <p className="text-sm text-foreground">{item.after}</p>
                  </div>
                </div>

                {/* Result Badge */}
                <div className="mt-6 text-center">
                  <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary font-semibold rounded-full text-sm">
                    Result: {item.savings}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
