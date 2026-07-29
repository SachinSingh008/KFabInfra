import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Cylinder, Box, Factory, Building, Layers, Hammer, Wrench, LayoutGrid, Plane, Sparkles } from "lucide-react";
import SectionHeader from "../SectionHeader";
import { StaggerContainer, StaggerItem } from "../StaggerContainer";
import ServiceDetailModal from "../ServiceDetailModal";

import railwayGirderAssembly from "@/assets/railway gudder assebly.png";
import railwayGirder from "@/assets/railway gudder.png";
import railwayBridge from "@/assets/railway bridge.png";
import sugercanVesselImg from "@/assets/sugercan vessel.png";
import calandriaImg from "@/assets/calandria.png";
import catchallImg from "@/assets/catchall.png";
import cilo from "@/assets/cilo.jpeg";
import conocialCiloImg from "@/assets/conocial cilo.png";
import fustrumSiloImg from "@/assets/fustrum silo.png";
import ciloStool from "@/assets/cilo stool.png";
import desielTankImg from "@/assets/desiel tank.jpeg";
import cuboidalTankImg from "@/assets/cubiodal tank.png";
import trus from "@/assets/trus (1).png";
import curveShedImg from "@/assets/curve shed.png";
import plantShedImg from "@/assets/plant shed.png";
import goliathCraneLegImg from "@/assets/goliath crane leg.jpeg";
import pileHeadImg from "@/assets/pile head.jpeg";
import vslKattarImg from "@/assets/vsl kattar 2.jpg";
import deckPannelImg from "@/assets/deck pannel.jpeg";
import hooglyAirportImg from "@/assets/hoogly airport.png";
import hoogtAirportImg from "@/assets/hoogt airport.png";
import hogliImg from "@/assets/hogli.png";
import crane1 from "@/assets/crane (1).jpeg";
import crane2 from "@/assets/crane (2).jpeg";
import crane3 from "@/assets/crane (3).jpeg";
import crane123 from "@/assets/crane 123.png";
import footover1 from "@/assets/Footover bridge (1).jpeg";
import footover2 from "@/assets/Footover bridge (2).jpeg";
import footover3 from "@/assets/Footover bridge (3).jpeg";
import metroGirder1 from "@/assets/metro grider (1).jpeg";
import metroGirder2 from "@/assets/metro grider (2).jpeg";
import metroGirder3 from "@/assets/metro grider (3).jpeg";
import craneNext1 from "@/assets/crane next (1).jpeg";
import craneNext3 from "@/assets/crane next (3).jpeg";
import craneNext4 from "@/assets/crane next (4).jpeg";
import craneNext5 from "@/assets/crane next (5).jpeg";
import craneNext6 from "@/assets/crane next (6).jpeg";
import tanks1 from "@/assets/tanks (1).jpeg";
import tanks2 from "@/assets/tanks (2).jpeg";
import tanks3 from "@/assets/tanks (3).jpeg";
import tanks4 from "@/assets/tanks (4).jpeg";
import railwayGirder1 from "@/assets/railway guiders (1).jpeg";
import railwayGirder2 from "@/assets/railway guiders (2).jpeg";
import railwayGirder3 from "@/assets/railway guiders (3).jpeg";
import railwayGirder4 from "@/assets/railway guiders (4).jpeg";
import railwayGirder5 from "@/assets/railway guiders (5).jpeg";
import railwayGirder6 from "@/assets/railway guiders (6).jpeg";
import railwayGirder7 from "@/assets/railway guiders (7).jpeg";
import railwayBridge1 from "@/assets/bridges railway (1).jpeg";
import railwayBridge2 from "@/assets/bridges railway (2).jpeg";
import railwayBridge3 from "@/assets/bridges railway (3).jpeg";
import railwayBridge4 from "@/assets/bridges railway (4).jpeg";

const services = [
  {
    icon: Building,
    title: "Footover Bridge & Pedestrian Viaducts",
    description: "Custom-designed industrial and urban footover bridges (FOBs), pedestrian skywalks, and elevated walkway viaducts engineered for high footfall density and RDSO / IRS compliance.",
    image: footover1,
    images: [footover1, footover2, footover3],
    tag: "Infrastructure",
    tags: ["Infrastructure", "Footover Bridge", "Urban Transit", "100% NDT Tested"],
    features: ["Custom FOB spans", "RDSO & IRS compliant space trusses", "Thermal zinc coated"],
  },
  {
    icon: Building,
    title: "Metro & Railway Girders",
    description: "Precision-engineered heavy steel bridge girders and elevated track box structures built under strict RDSO standards and 100% NDT testing for mass urban transit infrastructure across major Indian metro rail projects.",
    image: metroGirder1,
    images: [metroGirder1, metroGirder2, metroGirder3, railwayGirder7, railwayBridge1, railwayBridge2, railwayBridge3, railwayBridge4, railwayGirderAssembly, railwayGirder, railwayBridge, railwayGirder1, railwayGirder6],
    tag: "Infrastructure",
    tags: ["Infrastructure", "RDSO Certified", "100% NDT Tested", "Urban Transit", "Heavy Beam Welding"],
    features: ["Load-tested", "Precision welding", "RDSO Certified Quality"],
  },
  {
    icon: Layers,
    title: "Heavy-Load Overhead & EOT Cranes",
    description: "Custom-fabricated heavy EOT cranes, Goliath gantry crane legs, and trolley frames built to IS 807 & IS 3177 standards for up to 200+ Ton lifting capacity.",
    image: craneNext1,
    images: [craneNext1, craneNext3, craneNext4, craneNext5, craneNext6, crane1, crane2, crane3],
    tag: "Heavy Lifting",
    tags: ["Heavy Lifting", "200-Ton Capacity", "IS 807 / IS 3177", "Box Girders"],
    features: ["Custom 10T to 200T+ capacities", "IS 807 code box girders", "Internal diaphragm stiffened"],
  },
  {
    icon: Box,
    title: "Industrial Silos & Tanks",
    description: "High-capacity conical and frustum storage silos equipped with reinforced base ring-beams and stiffened shell plates engineered for chemical, cement, and bulk powder storage.",
    image: tanks1,
    images: [tanks1, tanks2, tanks3, tanks4, cilo, conocialCiloImg, fustrumSiloImg, desielTankImg, cuboidalTankImg],
    tag: "Heavy Storage",
    tags: ["Heavy Storage", "Gravity Discharge", "Chemical & Cement", "Weatherproof"],
    features: ["Gravity discharge", "Double-walled protection", "Weatherproof"],
  },
  {
    icon: Factory,
    title: "Plant Sheds & Steel Structures",
    description: "Heavy industrial PEB steel factory sheds, heavy crane-gantry structures, and spherical roof enclosures built with high-tensile steel to support heavy overhead EOT cranes.",
    image: trus,
    images: [trus, curveShedImg, plantShedImg],
    tag: "Structural",
    tags: ["Structural Steel", "PEB Sheds", "EOT Crane Gantry", "45m Span"],
    features: ["Custom spans", "High load capacity", "Quick installation"],
  },
  {
    icon: Plane,
    title: "Hubballi Airport Infrastructure",
    description: "Large-span architectural structural steel frameworks, passenger terminal trusses, and canopy structures fabricated for major aviation hubs.",
    image: hooglyAirportImg,
    images: [hooglyAirportImg, hoogtAirportImg, hogliImg],
    tag: "Aviation Infrastructure",
    tags: ["Aviation", "Airport Terminal", "Tubular Trusses", "Architectural"],
    features: ["Airport standard", "Large spans", "Precision build"],
  },
  {
    icon: Cylinder,
    title: "Sugarcane Processing Vessels",
    description: "Heavy-duty sugarcane juice extraction vessels, evaporators, and vacuum pans custom fabricated by KFab Infra to withstand intense thermal pressure, high acidity, and continuous processing demands of Tier-1 sugar mills.",
    image: sugercanVesselImg,
    images: [sugercanVesselImg],
    tag: "Process Plant",
    tags: ["Process Plant", "ASME Section VIII", "Sugar Industry", "SS304/SS316"],
    features: ["Custom capacities", "Corrosion resistant", "Easy maintenance"],
  },
];

const ServicesPreview = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/60 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          title="Engineered Capabilities & Services"
          subtitle="Comprehensive heavy steel fabrication tailored for nuclear, metro, energy, cement & crane handling conglomerates"
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleCardClick(index)}
                className="group relative bg-card dark:bg-slate-900 border border-border/80 hover:border-primary/60 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                {/* Image & Badge Overlay */}
                <div className="relative h-52 md:h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-xs font-semibold text-sky-300 border border-sky-400/30 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                      <service.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-sans font-bold text-foreground group-hover:text-primary transition-colors mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                    <span>View Specifications & Gallery</span>
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
          className="text-center mt-12 md:mt-16"
        >
          <Link 
            to="/services"
            className="group inline-flex items-center justify-center gap-3 text-base font-bold text-white bg-primary hover:bg-blue-600 px-8 py-4 rounded-xl shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
          >
            <span>Explore All Fabrication Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Service Detail Modal with Top Horizontal Image Scroll & Bottom Description */}
      <ServiceDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        services={services}
        selectedIndex={selectedIndex}
      />
    </section>
  );
};

export default ServicesPreview;

