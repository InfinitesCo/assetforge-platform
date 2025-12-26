import { Database, Globe, Lock, Server, Shield, Workflow } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Modular Architecture",
    description: "Microservices-based design enabling rapid deployment and seamless integration with existing systems.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "HSM key management, multi-signature controls, and SOC 2 Type II certified infrastructure.",
  },
  {
    icon: Globe,
    title: "Multi-Chain Support",
    description: "Deploy on Ethereum, Polygon, Avalanche, or private networks based on regulatory requirements.",
  },
  {
    icon: Database,
    title: "On-Chain / Off-Chain Hybrid",
    description: "Optimal data placement strategy balancing transparency, privacy, and cost efficiency.",
  },
  {
    icon: Lock,
    title: "Regulatory Compliance",
    description: "Built-in KYC/AML workflows, transfer restrictions, and jurisdiction-specific rule engines.",
  },
  {
    icon: Workflow,
    title: "API-First Design",
    description: "Comprehensive REST and GraphQL APIs for seamless integration with trading systems and custody providers.",
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 bg-card/50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Technology
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Built for Scale, <br />
              <span className="gradient-text">Designed for Trust</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our infrastructure is purpose-built for institutional requirements. 
              We combine the transparency of blockchain with the security and 
              reliability that regulated entities demand.
            </p>

            {/* Architecture visual */}
            <div className="relative p-8 rounded-2xl bg-background border border-border">
              <div className="grid grid-cols-3 gap-4">
                {["Applications", "Smart Contracts", "Blockchain Layer"].map((layer, i) => (
                  <div key={i} className="text-center">
                    <div className="h-12 rounded-lg bg-secondary flex items-center justify-center mb-2">
                      <div className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
                    </div>
                    <span className="text-xs text-muted-foreground">{layer}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs text-muted-foreground">Connected & Secure</span>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
