import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import { motion } from "framer-motion";
import { Zap, Users, Ruler, Cog, Gauge, HardHat, MapPin } from "lucide-react";

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
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-charcoal text-creme relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=1200&q=80"
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
              <span className="gold-text">Infrastructure</span>
            </h1>
            <p className="text-lg text-creme/70 leading-relaxed">
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
                  <div className="w-14 h-14 mx-auto rounded-full bg-charcoal/10 flex items-center justify-center mb-4">
                    <stat.icon className="w-7 h-7 text-charcoal" />
                  </div>
                  <div className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-charcoal/70">{stat.label}</div>
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
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80"
                      alt="Workshop"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=400&q=80"
                      alt="Machinery"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=400&q=80"
                      alt="Welding"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80"
                      alt="Facility"
                      className="w-full h-full object-cover"
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
                Our 15,000 sq ft manufacturing facility is strategically located
                in M.I.D.C, Jejuri, Pune, providing excellent connectivity
                to major industrial hubs across India.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Equipped with 65 HP power supply, heavy-duty cranes, precision cutting machines, and
                advanced welding systems, we handle projects of any scale with
                consistent quality and efficiency.
              </p>

              <div className="space-y-4">
                {[
                  "Dedicated fabrication bays for large assemblies",
                  "15,000 Sq Ft shed area for manufacturing",
                  "Raw material storage with inventory management",
                  "8 specialized departments with skilled workforce",
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
      <section className="py-24 bg-charcoal text-creme">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="divider-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                <span className="gold-text">Plant Location</span>
              </h2>
              <p className="text-creme/70 leading-relaxed mb-6">
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
                    <p className="text-creme/60 text-sm">
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
                    <p className="text-creme/60 text-sm">
                      27BLNPS7306C1ZX
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="aspect-video rounded-lg overflow-hidden border border-creme/10">
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