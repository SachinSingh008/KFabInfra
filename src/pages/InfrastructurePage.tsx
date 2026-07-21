import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import { PAGE_SEO } from "@/lib/seo.config";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import { motion } from "framer-motion";
import { Zap, Users, Ruler, Cog, Gauge, HardHat, MapPin } from "lucide-react";
import curveShedImg from "@/assets/curve shed.png";
import railwayGudderAssemblyImg from "@/assets/railway gudder assebly.png";
import goliathCraneLegImg from "@/assets/goliath crane leg.jpeg";
import desielTankFabImg from "@/assets/desiel tank fab.jpeg";

const stats = [
  { icon: Ruler, value: "15,000", label: "Sq Ft Facility", suffix: "" },
  { icon: Zap, value: "65", label: "HP Power Supply", suffix: "" },
  { icon: Users, value: "8", label: "Departments", suffix: "" },
  { icon: Cog, value: "20+", label: "Years Experience", suffix: "" },
];

const equipment = [
  "CNC Plasma Cutting Machine",
  "Heavy Duty Plate Rolling Machine",
  "Welding Stations (MIG/TIG/Arc)",
  "Overhead Cranes",
  "Hydraulic Press Brake",
  "Radial Drilling Machines",
  "Lathe Machines",
  "Power Hacksaw",
  "Grinding & Finishing Equipment",
  "Quality Testing Instruments",
];

const InfrastructurePage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO {...PAGE_SEO.infrastructure} breadcrumbs={[{ name: "Home", url: "https://kfabinfraproject.site" }, { name: "Infrastructure", url: "https://kfabinfraproject.site/infrastructure" }]} />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary text-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=1200&q=80"
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
              <span className="text-primary">Infrastructure</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              State-of-the-art 15,000 Sq Ft facility in Jejuri, Pune equipped with
              modern machinery and skilled workforce to handle any fabrication challenge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-slate-900/10 flex items-center justify-center mb-4">
                    <stat.icon className="w-7 h-7 text-slate-900" />
                  </div>
                  <div className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-slate-900/70">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-[20px] overflow-hidden border border-border/10 shadow-md">
                    <img
                      src={curveShedImg}
                      alt="Curve Shed Structure"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="aspect-square rounded-[20px] overflow-hidden border border-border/10 shadow-md">
                    <img
                      src={railwayGudderAssemblyImg}
                      alt="Railway Girder Assembly"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-[20px] overflow-hidden border border-border/10 shadow-md">
                    <img
                      src={goliathCraneLegImg}
                      alt="Goliath Crane Leg Fabrication"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-[20px] overflow-hidden border border-border/10 shadow-md">
                    <img
                      src={desielTankFabImg}
                      alt="Diesel Tank Fabrication"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="divider-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                World-Class <span className="text-primary">Manufacturing Facility</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our 15,000 sq ft workshop in M.I.D.C Jejuri, Pune is designed specifically for heavy industrial fabrication. 
                Strategically positioned, the plant offers direct transport access to support logistics and project 
                dispatch to major industrial corridors across the country.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Operating with a steady 65 HP power connection, high-capacity material handling systems, and calibrated 
                welding units, we emphasize safe, consistent, and highly precise assembly. We build with the long-term 
                in mind, ensuring every structure is built to specification and double-checked for quality.
              </p>

              <div className="space-y-4">
                {[
                  "Clear-span assembly bays designed for safe, heavy-duty structure handling",
                  "15,000 Sq Ft of covered shop floor for weather-protected manufacturing",
                  "Organized raw material yard with trace-controlled inventory logs",
                  "Eight dedicated work departments led by certified, hands-on tradesmen",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Equipment List */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Our Equipment"
            subtitle="Modern machinery for precision fabrication"
          />

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {equipment.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg border border-border bg-card text-center hover:border-primary/50 transition-colors"
                >
                  <Cog className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-secondary text-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="divider-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                <span className="text-primary">Plant Location</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Strategically located in Pune's industrial corridor with
                excellent connectivity to major cities and ports.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <HardHat className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Registered Office & Workspace</h4>
                    <p className="text-muted-foreground text-sm">
                      C-46, M.I.D.C, Jejuri,<br />
                      Pune, Maharashtra 412303
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">GSTIN</h4>
                    <p className="text-muted-foreground text-sm">
                      27BLNPS7306C1ZX
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="aspect-video rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30284.91893561747!2d74.12!3d18.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9e89c2a9f4d%3A0x5b25c67c08c0d4e!2sJejuri%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Plant location - Jejuri, Pune"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default InfrastructurePage;