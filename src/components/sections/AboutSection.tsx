import { Target, Eye, Compass } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To build the foundational infrastructure that enables the seamless digitization of real-world assets, making capital markets more efficient, accessible, and transparent.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "A world where every asset can be owned, traded, and verified on secure digital rails, unlocking trillions in dormant value and democratizing investment opportunities.",
  },
  {
    icon: Compass,
    title: "Approach",
    description: "We take a long-term, infrastructure-first approach. We don't chase trends—we build the rails that will power the next generation of financial markets.",
  },
];

const principles = [
  "Regulatory-first mindset in every decision",
  "Enterprise-grade security without compromise",
  "Interoperability across chains and systems",
  "Transparent partnerships with clients",
  "Continuous innovation in core technology",
  "Long-term thinking over short-term gains",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card/50 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Building the Future of <br />
              <span className="gradient-text">Asset Infrastructure</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a team of fintech engineers, regulatory experts, and blockchain 
              specialists united by a single goal: to make asset tokenization a 
              mainstream financial infrastructure.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              With backgrounds spanning traditional finance, enterprise software, 
              and distributed systems, we understand both the promise and the 
              practical challenges of bringing real-world assets on-chain.
            </p>

            {/* Principles */}
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Our Principles
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{principle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-background border border-border"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
