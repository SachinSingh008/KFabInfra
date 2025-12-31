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
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="Our Capabilities"
          subtitle="Comprehensive heavy fabrication services tailored to meet the demanding needs of modern industry"
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                className="card-premium group cursor-pointer overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/90 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-charcoal" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
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
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-gold inline-flex items-center gap-2">
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
