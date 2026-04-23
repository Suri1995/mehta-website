import { AlertTriangle, CheckCircle2 } from "lucide-react";

const problems = [
  {
    problem: "Paying more tax than necessary",
    solution: "Strategic tax planning to legally minimize your tax liability",
  },
  {
    problem: "Missing filing deadlines",
    solution: "Proactive deadline management with timely reminders and filings",
  },
  {
    problem: "Confused about GST compliance",
    solution: "Complete GST support from registration to monthly returns",
  },
  {
    problem: "No clarity on business finances",
    solution: "Clear financial reports and MIS for informed decision making",
  },
  {
    problem: "Fear of tax notices and penalties",
    solution: "100% compliance approach with notice handling support",
  },
  {
    problem: "Struggling with payroll and statutory compliance",
    solution: "End-to-end payroll management including PF, ESI, and TDS",
  },
  {
    problem: "Unable to scale business due to financial chaos",
    solution: "Structured accounting systems enabling growth and scalability",
  },
  {
    problem: "Overwhelmed by changing tax laws",
    solution: "Continuous updates and advisory on regulatory changes",
  },
];

export function Problems() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            We Understand
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Common Problems We Solve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We&apos;ve helped hundreds of clients overcome these challenges. 
            Let us do the same for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <div
              key={item.problem}
              className="bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                {/* Problem */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-destructive uppercase tracking-wider">
                      Problem
                    </span>
                    <p className="text-foreground font-medium">{item.problem}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-border" />
                </div>

                {/* Solution */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
                      Our Solution
                    </span>
                    <p className="text-foreground">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
