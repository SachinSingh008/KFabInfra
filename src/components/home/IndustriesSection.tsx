import { motion } from "framer-motion";
import { Wheat, Building2, FileText, FlaskConical, Factory, Truck, HardHat, Package } from "lucide-react";
import SectionHeader from "../SectionHeader";
import { StaggerContainer, StaggerItem } from "../StaggerContainer";

const industries = [
  {
    icon: Wheat,
    name: "Sugar",
    description: "Complete fabrication solutions for sugar mills",
  },
  {
    icon: Building2,
    name: "Cement",
    description: "Heavy equipment for cement manufacturing",
  },
  {
    icon: FileText,
    name: "Paper",
    description: "Precision components for paper mills",
  },
  {
    icon: FlaskConical,
    name: "Chemical",
    description: "Corrosion-resistant industrial equipment",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Custom solutions for diverse industries",
  },
  {
    icon: HardHat,
    name: "Construction",
    description: "Structural components for construction",
  },
  {
    icon: Truck,
    name: "Logistics",
    description: "Material handling equipment",
  },
  {
    icon: Package,
    name: "Handling Equipment",
    description: "Industrial handling solutions",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-charcoal text-creme relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A24D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Trusted by leading industrial giants across India"
          light
        />

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="group text-center p-6 rounded-lg border border-creme/10 bg-creme/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <p className="text-creme/60 text-xs">
                  {industry.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default IndustriesSection;
