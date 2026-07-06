import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Cylinder, Box, Factory, Gauge, Building, Cog } from "lucide-react";
import SectionHeader from "../SectionHeader";
import { StaggerContainer, StaggerItem } from "../StaggerContainer";

const services = [
  {
    icon: Cylinder,
    title: "Sugarcane Vessels",
    description: "High-capacity processing vessels engineered for sugar mills",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
  },
  {
    icon: Building,
    title: "Metro & Railway Girders",
    description: "Precision-fabricated structural components for infrastructure",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80",
  },
  {
    icon: Box,
    title: "Silo & Storage Tanks",
    description: "Conical, vertical, and frustum tanks for industrial storage",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
  },
  {
    icon: Factory,
    title: "Plant Sheds",
    description: "Custom industrial sheds and spherical structures",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
  },
  {
    icon: Gauge,
    title: "Dish End Tanks",
    description: "Precision-formed tank ends for pressure applications",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
  },
  {
    icon: Cog,
    title: "Rolling Works",
    description: "Custom rolling and forming for heavy metal plates",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=400&q=80",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-3 md:px-4 lg:px-8">
        <SectionHeader
          title="Our Capabilities"
          subtitle="Comprehensive heavy fabrication services tailored to meet the demanding needs of modern industry"
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                className="card-premium group cursor-pointer overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210_50%_20%)]/80 to-transparent" />
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/90 flex items-center justify-center">
                      <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-sans font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <Link to="/services" className="btn-gold inline-flex items-center gap-2 text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3">
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
