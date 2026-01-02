import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const clients = [
  "Indiana Gratings Pvt. Ltd.",
  "Indiana Conveyor Pvt. Ltd.",
  "WMI Cranes Ltd.",
  "Global Steels Hyderabad",
  "Kushwaha Industries",
  "Consolidated Hoist Pvt. Ltd.",
  "TOWELL Engineering Int. LLP",
  "Crossworld Industries",
  "General Energy Management System Pvt. Ltd.",
  "Thermax Ltd.",
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
      <section className="pt-32 pb-20 bg-charcoal text-creme relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
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
              <span className="gold-text">Valued Clients</span>
            </h1>
            <p className="text-lg text-creme/70 leading-relaxed">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="p-6 rounded-lg border border-border bg-card text-center hover:border-primary/50 hover:shadow-gold transition-all duration-300"
                >
                  <span className="text-lg font-serif font-medium text-foreground/80">
                    {client}
                  </span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal text-creme">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Testimonials from valued partners"
            light
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative p-8 rounded-lg bg-creme/5 border border-creme/10 h-full"
                >
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <p className="text-creme/80 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto">
                    <div className="font-serif font-semibold text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-creme/60">
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
                  <div className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-1">
                    {stat.value}
                  </div>
                  <div className="text-charcoal/70">{stat.label}</div>
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