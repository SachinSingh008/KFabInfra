import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import { PAGE_SEO, getServicesSchema } from "@/lib/seo.config";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

import ciloStool from "@/assets/cilo stool.png";
import cilo from "@/assets/cilo.jpeg";
import furnace from "@/assets/furnace.png";
import railwayBridge from "@/assets/railway bridge.png";
import railwayGudderAssembly from "@/assets/railway gudder assebly.png";
import railwayGudder from "@/assets/railway gudder.png";
import trus from "@/assets/trus (1).png";
import calandriaImg from "@/assets/calandria.png";
import catchallImg from "@/assets/catchall.png";
import conocialCiloImg from "@/assets/conocial cilo.png";
import cuboidalTankImg from "@/assets/cubiodal tank.png";
import curveShedImg from "@/assets/curve shed.png";
import desielTankImg from "@/assets/desiel tank.jpeg";
import fustrumSiloImg from "@/assets/fustrum silo.png";
import hopperImg from "@/assets/hopper.jpeg";
import metroGiderImg from "@/assets/metro gider.png";
import plantShedImg from "@/assets/plant shed.png";
import rollerImg from "@/assets/roller.png";
import sugercanVesselImg from "@/assets/sugercan vessel.png";
import undergroungDesielTankImg from "@/assets/undergroung desiel tank.png";
import railwayGudderAsebImg from "@/assets/railway gudder aseb,y.jpeg";
import vslKattarImg from "@/assets/vsl kattar 2.jpg";
import pileHeadImg from "@/assets/pile head.jpeg";
import goliathCraneLegImg from "@/assets/goliath crane leg.jpeg";
import deckPannelImg from "@/assets/deck pannel.jpeg";
import hooglyAirportImg from "@/assets/hoogly airport.png";

const services = [
  {
    slug: "sugarcane-vessels",
    title: "Sugarcane Vessels",
    description: "High-capacity processing vessels engineered specifically for sugar mills.",
    image: sugercanVesselImg,
    features: ["Custom capacities", "Corrosion resistant", "Easy maintenance"],
  },
  {
    slug: "metro-girders",
    title: "Metro Girders",
    description: "Precision-fabricated structural girders for metro systems.",
    image: metroGiderImg,
    features: ["Load-tested", "Precision welding", "Certified quality"],
  },
  {
    slug: "railway-girders",
    title: "Railway Girders",
    description: "Heavy-duty railway girders and structural components for rail infrastructure.",
    image: railwayGudder,
    features: ["Railway certified", "High load capacity", "Durable construction"],
  },
  {
    slug: "spherical-shed",
    title: "Spherical Shed",
    description: "Innovative spherical shed designs for unique storage and industrial requirements.",
    image: curveShedImg,
    features: ["Unique design", "Space efficient", "Weather resistant"],
  },
  {
    slug: "underground-diesel-tanks",
    title: "Underground Diesel Tanks",
    description: "Heavy-duty underground storage tanks for diesel and petroleum products.",
    image: undergroungDesielTankImg,
    features: ["Double-walled", "Leak detection", "Long lifespan"],
  },
  {
    slug: "frustum-silo",
    title: "Frustum Silo",
    description: "Specialized frustum-shaped silos for efficient material storage and discharge.",
    image: fustrumSiloImg,
    features: ["Efficient flow", "Custom sizes", "Robust design"],
  },
  {
    slug: "conical-silo",
    title: "Conical Silo",
    description: "Conical silos designed for optimal material flow and storage efficiency.",
    image: conocialCiloImg,
    features: ["Gravity discharge", "Large capacity", "Weatherproof"],
  },
  {
    slug: "roller",
    title: "Rollers",
    description: "Industrial rollers for material handling and manufacturing processes.",
    image: rollerImg,
    features: ["Wear resistant", "Precision balanced", "Custom specs"],
  },
  {
    slug: "calandria",
    title: "Calandria",
    description: "Precision-engineered calandria for heat exchange applications in sugar and chemical processing.",
    image: calandriaImg,
    features: ["Efficient heat transfer", "Tube arrangement", "Durable construction"],
  },
  {
    slug: "catchall",
    title: "Catchall",
    description: "Specialized catchall systems for industrial material collection and handling.",
    image: catchallImg,
    features: ["Custom design", "Easy access", "Durable build"],
  },
  {
    slug: "silo-with-base",
    title: "Silo with Base",
    description: "Complete silo systems with integrated base structures for stability and easy installation.",
    image: ciloStool,
    features: ["Integrated base", "Quick setup", "Stable design"],
  },
  {
    slug: "plant-shed",
    title: "Plant Shed",
    description: "Custom industrial plant sheds for manufacturing and storage facilities.",
    image: plantShedImg,
    features: ["Custom spans", "Weather resistant", "Quick installation"],
  },
  {
    slug: "hopper",
    title: "Hoppers",
    description: "Material handling hoppers for manufacturing and processing facilities.",
    image: hopperImg,
    features: ["Wear resistant", "Custom angles", "Easy cleaning"],
  },
  {
    slug: "tanks",
    title: "Tanks",
    description: "Industrial storage tanks for various liquids and materials.",
    image: desielTankImg,
    features: ["Multiple sizes", "Pressure rated", "Long lifespan"],
  },
  {
    slug: "gallery-structure",
    title: "Gallery Structures",
    description: "Elevated walkways and gallery structures for industrial facilities, ensuring safe access and material transport.",
    image: railwayBridge,
    features: ["Safety compliant", "Modular sections", "Heavy loads"],
  },
  {
    slug: "cuboidal-tanks",
    title: "Cuboidal Tanks",
    description: "Rectangular storage tanks optimized for space efficiency.",
    image: cuboidalTankImg,
    features: ["Space efficient", "Easy installation", "Stackable"],
  },
  {
    slug: "metro-girders-assembly",
    title: "Metro Girders Assembly",
    description: "Complete metro girder assembly services including installation support.",
    image: railwayGudderAsebImg,
    features: ["Full assembly", "Quality tested", "Installation support"],
  },
  {
    slug: "vsl-kattar",
    title: "VSL Kattar",
    description: "Specialized fabrication of VSL Kattar components for robust infrastructure support.",
    image: vslKattarImg,
    features: ["Robust construction", "Custom specs", "High durability"],
  },
  {
    slug: "pile-head",
    title: "Pile Head",
    description: "Precision-engineered pile heads designed to securely transfer heavy structural loads to foundations.",
    image: pileHeadImg,
    features: ["High load bearing", "Secure foundation", "Corrosion resistant"],
  },
  {
    slug: "goliath-crane-leg",
    title: "Goliath Crane Leg",
    description: "Heavy-duty structural legs for Goliath cranes, engineered for immense lifting operations.",
    image: goliathCraneLegImg,
    features: ["Heavy lifting support", "Precision fabrication", "Certified strength"],
  },
  {
    slug: "deck-panel",
    title: "Deck Panel",
    description: "Durable and precisely fabricated deck panels for bridges, walkways, and industrial platforms.",
    image: deckPannelImg,
    features: ["High strength", "Modular design", "Quality material"],
  },
  {
    slug: "hubballi-airport",
    title: "Hubballi Airport Infrastructure",
    description: "Structural fabrication and infrastructure support for major airport construction and expansions",
    image: hooglyAirportImg,
    features: ["Airport standard", "Large spans", "Precision build"],
  },
];

const ServicesPage = () => {
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO {...PAGE_SEO.services} breadcrumbs={[{ name: "Home", url: "https://kfabinfraproject.site" }, { name: "Services", url: "https://kfabinfraproject.site/services" }]} extraSchema={getServicesSchema()} />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary text-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src={curveShedImg}
            alt="Hero Background"
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
              <span className="text-primary">Fabrication Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive heavy fabrication solutions for Sugar, Cement, Paper,
              Chemical & Handling Equipment industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="card-premium group h-full overflow-hidden"
                >
                  {/* Image */}
                  <div 
                    className="relative h-48 overflow-hidden cursor-zoom-in"
                    onClick={() => setActiveImage({ src: service.image, title: service.title })}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xs font-medium px-3 py-1.5 bg-black/60 rounded-full border border-white/20 backdrop-blur-sm">
                        Click to Expand
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {service.features.slice(0, 2).map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our engineering team can design and fabricate custom solutions
              tailored to your specific requirements.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
              <span>Get a Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute -top-12 right-0 md:-right-12 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                aria-label="Close image"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full bg-[#12151c] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl p-2 md:p-3">
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-[16px] mx-auto"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-serif font-semibold text-white">
                    {activeImage.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default ServicesPage;