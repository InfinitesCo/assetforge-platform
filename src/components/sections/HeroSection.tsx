import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Lock } from "lucide-react";

const stats = [
  { value: "$2.5B+", label: "Assets Tokenized" },
  { value: "15+", label: "Enterprise Clients" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "6", label: "Jurisdictions" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Geometric shapes */}
      <div className="absolute top-32 right-20 w-64 h-64 border border-border/50 rounded-2xl rotate-12 hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-48 h-48 border border-primary/20 rounded-xl -rotate-6 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Enterprise-Grade Tokenization Infrastructure
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Transforming Real Assets into{" "}
            <span className="gradient-text">Digital Securities</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Institutional-grade blockchain infrastructure for tokenizing commodities, 
            securities, and real-world assets. Trusted by leading financial institutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Schedule a Consultation
              <ArrowRight size={20} />
            </Button>
            <Button variant="hero-outline" size="xl">
              View Case Studies
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield size={18} className="text-primary" />
              SOC 2 Compliant
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock size={18} className="text-primary" />
              Bank-Grade Security
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap size={18} className="text-primary" />
              Real-Time Settlement
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border border-border flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
