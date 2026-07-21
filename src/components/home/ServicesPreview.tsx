import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Cylinder, Box, Factory, Building, Layers, Hammer, Wrench, LayoutGrid, Plane } from "lucide-react";
import SectionHeader from "../SectionHeader";
import { StaggerContainer, StaggerItem } from "../StaggerContainer";

import cilo from "@/assets/cilo.jpeg";
import railwayGudderAssembly from "@/assets/railway gudder assebly.png";
import trus from "@/assets/trus (1).png";
import sugercanVesselImg from "@/assets/sugercan vessel.png";
import vslKattarImg from "@/assets/vsl kattar 2.jpg";
import pileHeadImg from "@/assets/pile head.jpeg";
import goliathCraneLegImg from "@/assets/goliath crane leg.jpeg";
import deckPannelImg from "@/assets/deck pannel.jpeg";
import hooglyAirportImg from "@/assets/hoogly airport.png";

const services = [
  {
    icon: Cylinder,
    title: "Sugarcane Vessels",
    description: "High-capacity processing vessels engineered for sugar mills",
    image: sugercanVesselImg,
  },
  {
    icon: Building,
    title: "Metro & Railway Girders",
    description: "Precision-fabricated structural components for infrastructure",
    image: railwayGudderAssembly,
  },
  {
    icon: Box,
    title: "Silo & Storage Tanks",
    description: "Conical, vertical, and frustum tanks for industrial storage",
    image: cilo,
  },
  {
    icon: Factory,
    title: "Plant Sheds",
    description: "Custom industrial sheds and spherical structures",
    image: trus,
  },
  {
    icon: Wrench,
    title: "VSL Kattar",
    description: "Specialized fabrication of VSL Kattar components for robust infrastructure support",
    image: vslKattarImg,
  },
  {
    icon: Hammer,
    title: "Pile Head",
    description: "Precision-engineered pile heads designed to securely transfer heavy structural loads",
    image: pileHeadImg,
  },
  {
    icon: Layers,
    title: "Goliath Crane Leg",
    description: "Heavy-duty structural legs for Goliath cranes, engineered for immense lifting operations",
    image: goliathCraneLegImg,
  },
  {
    icon: LayoutGrid,
    title: "Deck Panel",
    description: "Durable and precisely fabricated deck panels for bridges, walkways, and industrial platforms",
    image: deckPannelImg,
  },
  {
    icon: Plane,
    title: "Hubballi Airport Infrastructure",
    description: "Structural fabrication and infrastructure support for major airport construction and expansions",
    image: hooglyAirportImg,
  },
];

const ServicesPreview = () => {
  const visibleServices = services.slice(0, 4);

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-3 md:px-4 lg:px-8">
        <SectionHeader
          title="Our Capabilities"
          subtitle="Comprehensive heavy fabrication services tailored to meet the demanding needs of modern industry"
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {visibleServices.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                className="card-premium group cursor-pointer overflow-hidden h-full"
              >
                {/* Image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
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
          <Link 
            to="/services"
            className="btn-gold inline-flex items-center gap-2 text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3"
          >
            <span>Show More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
