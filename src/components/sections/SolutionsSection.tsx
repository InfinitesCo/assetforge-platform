import { Building2, Coins, FileText, Landmark, TrendingUp, Warehouse } from "lucide-react";

const solutions = [
  {
    icon: Coins,
    title: "Commodities",
    description: "Tokenize precious metals, energy resources, and agricultural products with full regulatory compliance and transparent custody.",
  },
  {
    icon: FileText,
    title: "Securities",
    description: "Issue and manage digital securities including equity, debt instruments, and structured products on distributed ledger technology.",
  },
  {
    icon: Landmark,
    title: "Investment Funds",
    description: "Enable fractional ownership and 24/7 transferability for private equity, venture capital, and alternative investment funds.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Democratize access to commercial and residential real estate through compliant tokenization and secondary trading.",
  },
  {
    icon: TrendingUp,
    title: "Private Credit",
    description: "Streamline private lending with tokenized loan participations, improved liquidity, and automated servicing.",
  },
  {
    icon: Warehouse,
    title: "Trade Finance",
    description: "Digitize invoices, letters of credit, and trade receivables for faster settlement and reduced counterparty risk.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Solutions
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Tokenization Across Asset Classes
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform enables the digitization of virtually any asset class, 
            unlocking liquidity and enabling new forms of ownership and trading.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:bg-card/80"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
