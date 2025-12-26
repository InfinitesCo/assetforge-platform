import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Global Commodity Exchange",
    category: "Commodities",
    description: "Developed a tokenization platform for a major commodity exchange, enabling fractional ownership of precious metals with real-time settlement.",
    metrics: [
      { label: "Assets Tokenized", value: "$850M" },
      { label: "Transaction Volume", value: "50K+/month" },
      { label: "Settlement Time", value: "T+0" },
    ],
    outcomes: [
      "Reduced settlement time from T+2 to near-instant",
      "Enabled 24/7 global trading capabilities",
      "Full regulatory compliance in 4 jurisdictions",
    ],
  },
  {
    title: "Private Equity Fund Tokenization",
    category: "Investment Funds",
    description: "Built end-to-end infrastructure for a $500M private equity fund to tokenize LP interests, enabling secondary market liquidity.",
    metrics: [
      { label: "Fund Size", value: "$500M" },
      { label: "LP Investors", value: "200+" },
      { label: "Secondary Trades", value: "$25M" },
    ],
    outcomes: [
      "Created secondary market for traditionally illiquid assets",
      "Automated cap table management and distributions",
      "Integrated with existing fund administration systems",
    ],
  },
  {
    title: "Real Estate Portfolio Platform",
    category: "Real Estate",
    description: "Launched a compliant platform for a real estate developer to tokenize commercial properties and enable fractional investment.",
    metrics: [
      { label: "Properties Listed", value: "12" },
      { label: "Total Value", value: "$320M" },
      { label: "Investors", value: "1,500+" },
    ],
    outcomes: [
      "Lowered minimum investment from $1M to $10K",
      "Automated rental income distribution via smart contracts",
      "SEC-compliant offering structure",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Case Studies
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Production-Grade Deployments
          </h2>
          <p className="text-lg text-muted-foreground">
            Real projects delivering measurable outcomes for institutional clients 
            across asset classes and jurisdictions.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 lg:p-12 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Content */}
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Outcomes */}
                  <div className="space-y-3">
                    {project.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Content - Metrics */}
                <div className="flex flex-col justify-center">
                  <div className="grid grid-cols-3 gap-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-4 rounded-xl bg-secondary/50">
                        <div className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero-outline" size="lg">
            View All Case Studies
            <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
