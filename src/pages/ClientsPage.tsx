import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import { PAGE_SEO } from "@/lib/seo.config";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Quote, Building2, Sparkles, Award } from "lucide-react";
import { useState } from "react";
import wmiLogo from "@/assets/wmi_cranes_logo.png";
import towellLogo from "@/assets/towell_engineering_logo.png";
import bhelLogo from "@/assets/bhel_logo.png";
import siscolLogo from "@/assets/siscol_logo.png";

interface Client {
  name: string;
  domain: string;
  logo?: string;
  scaleUp?: boolean;
}

const clients: Client[] = [
  { name: "WMI Cranes Ltd.", domain: "wmicranes.com", logo: wmiLogo },
  { name: "Siscol", domain: "siscol.com", logo: siscolLogo },
  { name: "BHEL", domain: "bhel.com", logo: bhelLogo },
  { name: "TOWELL Engineering Int. LLP", domain: "towellengineering.com", logo: towellLogo },
  { name: "L&T", domain: "larsentoubro.com", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Larsen%26Toubro_logo.svg", scaleUp: true },
  { name: "Wheels India", domain: "wheelsindia.com", scaleUp: true },
  { name: "Crossworld Industries", domain: "crossworldindustries.com", scaleUp: true },
  { name: "Consolidated Hoist Pvt. Ltd.", domain: "consolidatedswift.com", scaleUp: true },
  { name: "Indiana Gratings Pvt. Ltd.", domain: "indianagroup.com" },
  { name: "Indiana Conveyor Pvt. Ltd.", domain: "indianagroup.com" },
  { name: "Global Steels Hyderabad", domain: "agarwalsteelindustries.com" },
  { name: "Kushwaha Industries", domain: "kushwahaengineers.com" },
  { name: "General Energy Management System Pvt. Ltd.", domain: "gemsl.com" },
  { name: "Thermax Ltd.", domain: "thermaxglobal.com" },
  { name: "MetroTech", domain: "metrotech.com" },
  { name: "Whirlpool", domain: "whirlpool.com" },
  { name: "Bajaj Mukand", domain: "mukand.com" },
  { name: "Alloyed Steel", domain: "alloyedsteel.com" },
  { name: "Zamil Steel", domain: "zamilsteel.com" },
  { name: "Konecranes", domain: "konecranes.com" },
  { name: "JSW", domain: "jsw.in" },
  { name: "JSPL", domain: "jindalsteelpower.com" },
];

const testimonials = [
  {
    quote: "KFab Infra Project PVT LTD has been our trusted partner for years. Their precision engineering and commitment to quality have consistently exceeded our expectations.",
    author: "Industrial Partner",
    title: "Indiana Gratings Pvt. Ltd.",
  },
  {
    quote: "The team at KFab Infra Project PVT LTD delivered our metro rail girders ahead of schedule without compromising on quality. Their professionalism is commendable.",
    author: "Project Manager",
    title: "WMI Cranes Ltd.",
  },
  {
    quote: "We rely on KFab Infra Project PVT LTD for critical components. Their understanding of our requirements and technical expertise is unmatched in the industry.",
    author: "Operations Head",
    title: "Thermax Ltd.",
  },
];

const ClientLogo = ({ client }: { client: Client }) => {
  const [imgError, setImgError] = useState(0);
  const isScaled = client.scaleUp;

  if (client.logo) {
    return (
      <img
        src={client.logo}
        alt={client.name}
        className={`max-h-24 max-w-full object-contain filter transition-all duration-300 ${isScaled ? "scale-[1.45] md:scale-[1.6]" : "group-hover:scale-105"}`}
      />
    );
  }

  // Try Clearbit first (0), then Google Favicon (1), then fallback icon (2)
  if (imgError >= 2) {
    return (
      <div className="h-20 w-full flex items-center justify-center bg-muted/30 rounded-lg">
        <Building2 className="w-10 h-10 text-muted-foreground/50" />
      </div>
    );
  }

  const src = imgError === 0 
    ? `https://logo.clearbit.com/${client.domain}`
    : `https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`;

  return (
    <img 
      src={src} 
      alt={client.name} 
      className={`max-h-20 max-w-full object-contain transition-all duration-300 ${isScaled ? "scale-[1.45] md:scale-[1.6]" : "group-hover:scale-105"}`} 
      onError={() => setImgError(prev => prev + 1)}
    />
  );
};

const ClientsPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO {...PAGE_SEO.clients} breadcrumbs={[{ name: "Home", url: "https://kfabinfraproject.site" }, { name: "Clients", url: "https://kfabinfraproject.site/clients" }]} />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary text-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/80 to-secondary" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs md:text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              <span>25+ Years of Proven Industry Partnerships</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6 tracking-tight">
              Our
              <br />
              <span className="blue-text">Valued Clients</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trusted by India's leading industrial organizations for over two decades,
              our partnerships are built on quality, reliability, and mutual success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute -top-32 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeader
            title="Industry Leaders Trust Us"
            subtitle="Partnering with organizations that drive India's industrial growth"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <ScrollReveal key={index} delay={index * 0.04}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -6 }}
                  className="group bg-card/80 dark:bg-slate-900/80 backdrop-blur-sm border border-border/80 hover:border-primary/60 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between h-48"
                  title={client.name}
                >
                  <div className="flex-1 w-full flex items-center justify-center p-3 bg-white rounded-xl shadow-inner mb-3 group-hover:shadow-md transition-all">
                    <ClientLogo client={client} />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-foreground/85 group-hover:text-primary transition-colors text-center line-clamp-1">
                    {client.name}
                  </span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary text-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Testimonials from valued partners"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative p-8 rounded-lg bg-background border border-border/80 shadow-sm h-full"
                >
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto">
                    <div className="font-serif font-semibold text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground/80">
                      {testimonial.title}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Trusted Clients" },
              { value: "500+", label: "Projects Delivered" },
              { value: "95%", label: "Repeat Business" },
              { value: "20+", label: "Years Trust" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div>
                  <div className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-900/70">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ClientsPage;