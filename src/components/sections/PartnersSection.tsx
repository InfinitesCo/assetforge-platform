import { Award, FileCheck, Shield, Building } from "lucide-react";

const certifications = [
  { icon: Shield, label: "SOC 2 Type II" },
  { icon: FileCheck, label: "ISO 27001" },
  { icon: Award, label: "GDPR Compliant" },
  { icon: Building, label: "SEC Reg D" },
];

const partners = [
  "Major Investment Bank",
  "Global Custody Provider",
  "Big Four Audit Firm",
  "Leading Law Firm",
  "Enterprise Cloud Provider",
  "Securities Regulator",
];

const PartnersSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Trust & Compliance
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Enterprise-Grade Standards
          </h2>
          <p className="text-lg text-muted-foreground">
            We maintain the highest standards of security, compliance, and operational 
            excellence expected by institutional clients.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
            >
              <cert.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <span className="text-sm font-medium text-foreground">{cert.label}</span>
            </div>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="p-8 rounded-2xl bg-card border border-border">
          <h3 className="font-display text-xl font-semibold text-foreground text-center mb-8">
            Trusted By Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 rounded-lg bg-secondary/50 px-4"
              >
                <span className="text-sm text-muted-foreground text-center font-medium">
                  {partner}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">
            Partner names anonymized for confidentiality. Details available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
