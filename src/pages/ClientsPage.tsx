import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const clients = [
  { name: "Indiana Gratings Pvt. Ltd.", domain: "indianagroup.com" },
  { name: "Indiana Conveyor Pvt. Ltd.", domain: "indianagroup.com" },
  { name: "WMI Cranes Ltd.", domain: "wmicranes.com" },
  { name: "Global Steels Hyderabad", domain: "agarwalsteelindustries.com" },
  { name: "Kushwaha Industries", domain: "kushwahaengineers.com" },
  { name: "Consolidated Hoist Pvt. Ltd.", domain: "consolidatedswift.com" },
  { name: "TOWELL Engineering Int. LLP", domain: "towellengineering.com" },
  { name: "Crossworld Industries", domain: "crossworldindustries.com" },
  { name: "General Energy Management System Pvt. Ltd.", domain: "gemsl.com" },
  { name: "Thermax Ltd.", domain: "thermaxglobal.com" },
  { name: "BHEL", domain: "bhel.com" },
  { name: "MetroTech", domain: "metrotech.com" },
  { name: "wirlpool", domain: "whirlpool.com" },
  { name: "L&T", domain: "larsentoubro.com" },
  { name: "Bajaj Mukand", domain: "mukand.com" },
  { name: "Ciscol", domain: "ciscol.com" },
  { name: "Consolidated Hoists Private Limited", domain: "consolidatedswift.com" },
  { name: "Alloyod Steel", domain: "alloyedsteel.com" },
  { name: "Zamil Steel", domain: "zamilsteel.com" },
  { name: "Wheels India", domain: "wheelsindia.com" },
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
    quote: "We rely on  KFab Infra Project PVT LTD for critical components. Their understanding of our requirements and technical expertise is unmatched in the industry.",
    author: "Operations Head",
    title: "Thermax Ltd.",
  },
];

const ClientsPage = () => {
  return (
    <main className="min-h-screen">
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
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="divider-gold mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
              Our
              <br />
              <span className="text-primary">Valued Clients</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trusted by India's leading industrial organizations for over two decades,
              our partnerships are built on quality, reliability, and mutual success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Industry Leaders Trust Us"
            subtitle="Partnering with organizations that drive India's industrial growth"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="p-4 flex flex-col items-center justify-center gap-4 transition-all duration-300 py-6"
                  title={client.name}
                >
                  <img 
                    src={`https://logo.clearbit.com/${client.domain}`} 
                    alt={client.name} 
                    className="h-24 md:h-32 w-auto object-contain transition-all duration-300" 
                    onError={(e) => { 
                      e.currentTarget.onerror = null; 
                      e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`; 
                    }} 
                  />
                  <span className="text-sm md:text-base font-bold text-foreground/85 text-center">
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