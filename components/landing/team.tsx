import { Linkedin, Mail, Award, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "CA Rajesh Chatter",
    role: "Founding Partner",
    image: "/team/rajesh.jpg",
    experience: "18+ Years",
    clients: "300+",
    specializations: ["Corporate Taxation", "Statutory Audit", "Business Advisory"],
    qualifications: ["FCA", "DISA", "M.Com"],
    linkedin: "#",
    email: "rajesh@chatterassociates.com",
  },
  {
    name: "CA Priya Sharma",
    role: "Senior Partner",
    image: "/team/priya.jpg",
    experience: "15+ Years",
    clients: "250+",
    specializations: ["GST Compliance", "Internal Audit", "Startup Advisory"],
    qualifications: ["ACA", "CS", "LLB"],
    linkedin: "#",
    email: "priya@chatterassociates.com",
  },
];

export function Team() {
  return (
    <section id="team" className="py-7 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Leadership
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Our expert chartered accountants bring decades of combined experience 
            and specialized knowledge to serve you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-card rounded-3xl overflow-hidden border border-border hover:border-secondary/50 shadow-md hover:shadow-2xl transition-shadow duration-200 group"
            >
              {/* Image Section */}
              <div className="relative h-72 md:h-80 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <div className="inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-serif text-6xl md:text-7xl font-bold text-primary">
                      {member.name.split(" ").slice(1).map(n => n[0]).join("")}
                    </span>
                  </div>
                </div>
                {/* Overlay on hover */}
                  <div className="text-center text-primary-foreground p-6 w-full">
                    <div className="flex justify-end gap-4 mt-6">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-foreground/20 rounded-full flex items-center justify-center hover:bg-secondary"
                      >
                        <Linkedin className="h-5 w-5"/>
                      </a>

                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-foreground/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-semibold mb-4">{member.role}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{member.experience}</div>
                      <div className="text-xs text-muted-foreground">Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{member.clients}</div>
                      <div className="text-xs text-muted-foreground">Clients Served</div>
                    </div>
                  </div>
                </div>

                {/* Qualifications */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-semibold text-muted-foreground">Qualifications</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.qualifications.map((qual) => (
                      <span
                        key={qual}
                        className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specializations */}
                <div>
                  <span className="text-sm font-semibold text-muted-foreground">Specializations:</span>
                  <p className="text-sm text-foreground mt-1">
                    {member.specializations.join(" • ")}
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
