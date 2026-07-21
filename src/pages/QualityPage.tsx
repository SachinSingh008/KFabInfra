import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import { PAGE_SEO } from "@/lib/seo.config";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { FileSearch, Ruler, Cog, Shield, CheckCircle, Package } from "lucide-react";
import qualityCheckImg from "@/assets/vsl kattar 2.jpg";

const processSteps = [
  {
    icon: FileSearch,
    title: "Requirement Analysis",
    description: "Detailed discussion with clients to understand specifications, capacity requirements, and operational environment.",
  },
  {
    icon: Ruler,
    title: "Design & Engineering",
    description: "Our engineering team creates detailed drawings and specifications, optimizing for performance and cost-effectiveness.",
  },
  {
    icon: Cog,
    title: "Material Procurement",
    description: "Sourcing certified raw materials from approved vendors, with complete traceability and mill test certificates.",
  },
  {
    icon: Shield,
    title: "Fabrication",
    description: "Precision cutting, forming, welding, and assembly by skilled craftsmen following strict quality protocols.",
  },
  {
    icon: CheckCircle,
    title: "Quality Inspection",
    description: "Comprehensive testing including dimensional checks, weld inspection, and surface treatment verification.",
  },
  {
    icon: Package,
    title: "Delivery & Support",
    description: "Safe packaging, timely delivery, and installation support with comprehensive documentation.",
  },
];

const qualityChecks = [
  "Certified raw steel verification with mill-traceability records",
  "Continuous dimensional alignment checks during fit-up and assembly",
  "Non-destructive weld testing (visual, dye-penetrant, ultrasonic, radiography)",
  "Corrosion-resistant sandblasting and protective coat thickness verification",
  "Final load-bearing structural check and engineering clearance",
  "Complete QA compilation reports with handover certificates",
];

const QualityPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO {...PAGE_SEO.quality} breadcrumbs={[{ name: "Home", url: "https://kfabinfraproject.site" }, { name: "Quality", url: "https://kfabinfraproject.site/quality" }]} />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary text-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80"
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
              Quality &
              <br />
              <span className="text-primary">Process Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to quality is embedded in every step of our
              fabrication process, from initial design to final delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Our Fabrication Process"
            subtitle="A systematic approach ensuring quality at every stage"
          />

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {processSteps.map((step, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              >
                <div
                  className={`relative flex items-start gap-8 mb-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="card-premium p-6"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-sm font-medium text-primary">
                          Step {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-serif font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-2" />

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-secondary text-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="divider-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Rigorous
                <br />
                <span className="text-primary">Quality Control</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At KFab, our heavy-duty structures are built to bear critical industrial loads. 
                We implement a hands-on quality workflow at each phase of production, verifying 
                alignment, welding compliance, and structural integrity so that every sugarcane 
                vessel, metro girder, and silo exceeds safety requirements.
              </p>

              <div className="space-y-4">
                {qualityChecks.map((check, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80">{check}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-square rounded-[24px] overflow-hidden border border-border/10 shadow-md">
                  <img
                    src={qualityCheckImg}
                    alt="Quality inspection at KFab shop floor"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-[24px] -z-10 animate-pulse" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Standards & Compliance"
            subtitle="Meeting and exceeding industry benchmarks"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "ISO 9001:2015", desc: "Quality Management" },
              { name: "IS 2062", desc: "Structural Steel" },
              { name: "ASME Standards", desc: "Pressure Vessels" },
              { name: "AWS D1.1", desc: "Welding Quality" },
            ].map((cert, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="card-premium p-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.desc}</p>
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

export default QualityPage;
