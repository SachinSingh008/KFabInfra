import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import { motion } from "framer-motion";
import { Wheat, Building2, FileText, FlaskConical, Factory, Truck, HardHat, Package } from "lucide-react";

import sugercanVessel from "@/assets/sugercan vessel.png";
import ciloImg from "@/assets/cilo.jpeg";
import plantShed from "@/assets/plant shed.png";
import undergroungDesielTank from "@/assets/undergroung desiel tank.png";
import curveShed from "@/assets/curve shed.png";
import metroGider from "@/assets/metro gider.png";
import catchall from "@/assets/catchall.png";
import roller from "@/assets/roller.png";

const industries = [
  {
    icon: Wheat,
    name: "Sugar Industry",
    description: "Complete fabrication solutions for sugar mills including vessels, calandria, evaporators, and processing equipment. Our decades of experience serving major sugar producers ensures optimal performance and durability.",
    projects: ["Sugarcane Vessels", "Calandria", "Sugarcane Silos", "Evaporator bodies"],
    image: sugercanVessel,
  },
  {
    icon: Building2,
    name: "Cement Industry",
    description: "Heavy-duty fabrication for cement plants including silos, hoppers, conveyors, and structural steel. Built to withstand the demanding conditions of cement manufacturing.",
    projects: ["Storage silos", "Hoppers", "Conical Silo", "Frustum Silo"],
    image: ciloImg,
  },
  {
    icon: FileText,
    name: "Paper Industry",
    description: "Precision components for paper mills including digesters, pulp storage tanks, and processing vessels. Quality fabrication for the demands of paper manufacturing.",
    projects: ["Storage Tanks", "Processing Vessels", "Gallery Structures", "Plant Sheds"],
    image: plantShed,
  },
  {
    icon: FlaskConical,
    name: "Chemical Industry",
    description: "Corrosion-resistant fabrication for chemical processing including reactors, storage tanks, and specialized vessels designed for harsh chemical environments.",
    projects: ["Underground Diesel Tanks", "Vertical Tanks", "Dish-end Tanks", "Cuboidal Tanks"],
    image: undergroungDesielTank,
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Custom fabrication solutions for diverse manufacturing needs including plant structures, platforms, and specialized equipment support structures.",
    projects: ["Plant Sheds", "Spherical Sheds", "Gratings & Frames", "Gallery Structures"],
    image: curveShed,
  },
  {
    icon: HardHat,
    name: "Construction",
    description: "Structural components for construction projects including girders, frames, and support structures for major infrastructure projects.",
    projects: ["Metro Girders", "Railway Girders", "Connectors", "Structural Frames"],
    image: metroGider,
  },
  {
    icon: Truck,
    name: "Logistics",
    description: "Material handling equipment including conveyors, hoppers, and loading systems. Engineered for efficiency and safety in logistics operations.",
    projects: ["Rollers", "Hoppers", "Catchall", "Transfer Systems"],
    image: catchall,
  },
  {
    icon: Package,
    name: "Handling Equipment",
    description: "Specialized handling equipment for various industries including rollers, conveyors, and material transfer systems.",
    projects: ["Rollers", "Conveyor Components", "Rolling Works", "Custom Equipment"],
    image: roller,
  },
];

const IndustriesPage = () => {
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
              Industries
              <br />
              <span className="text-primary">We Serve</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trusted by leading organizations across Sugar, Cement, Paper, Chemical,
              Manufacturing, Construction, Logistics & Handling Equipment sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Detail */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-video rounded-[24px] overflow-hidden border border-border/80 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute bottom-6 left-6">
                      <div className="w-14 h-14 rounded-[16px] bg-primary flex items-center justify-center shadow-md">
                        <industry.icon className="w-7 h-7 text-slate-900" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="divider-gold mb-4" />
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                    {industry.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                    Key Products
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {industry.projects.map((project, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-foreground">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default IndustriesPage;