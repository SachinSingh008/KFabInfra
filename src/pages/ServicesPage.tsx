import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import { PAGE_SEO, getServicesSchema } from "@/lib/seo.config";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

import ciloStool from "@/assets/cilo stool.png";
import cilo from "@/assets/cilo.jpeg";
import furnace from "@/assets/furnace.png";
import railwayBridge from "@/assets/railway bridge.png";
import railwayGirderAssembly from "@/assets/railway gudder assebly.png";
import railwayGirder from "@/assets/railway gudder.png";
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
import railwayGirderAsebImg from "@/assets/railway gudder aseb,y.jpeg";
import vslKattarImg from "@/assets/vsl kattar 2.jpg";
import pileHeadImg from "@/assets/pile head.jpeg";
import goliathCraneLegImg from "@/assets/goliath crane leg.jpeg";
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
import hopper1 from "@/assets/hoppers (1).jpeg";
import hopper2 from "@/assets/hoppers (2).jpeg";
import hopper3 from "@/assets/hoppers (3).jpeg";
import hopper4 from "@/assets/hoppers (4).jpeg";
import hopper5 from "@/assets/hoppers (5).jpeg";
import railwayBridge1 from "@/assets/bridges railway (1).jpeg";
import railwayBridge2 from "@/assets/bridges railway (2).jpeg";
import railwayBridge3 from "@/assets/bridges railway (3).jpeg";
import railwayBridge4 from "@/assets/bridges railway (4).jpeg";

const services = [
  {
    slug: "footover-bridge",
    title: "Footover Bridge & Pedestrian Viaducts",
    description: `KFab Infra PVT LTD specializes in the custom design, heavy steel fabrication, and site erection of industrial and urban footover bridges (FOBs), pedestrian skywalks, and elevated walkway viaducts. Engineered to support high pedestrian footfall density, emergency dynamic loads, and harsh atmospheric conditions across Indian railway stations, urban transit nodes, and industrial complexes, our footover bridges combine structural safety with modern architectural aesthetics.

Fabricated at our 130,000+ sq. ft. Jejuri workshop in Pune, our footover bridge structures feature high-strength steel tubular space trusses, heavy rolled I-section main girders (ISMB/ISMC), anti-skid steel deck panels, and protective stair enclosures. Primary structural components are cut on precision CNC plasma tables and assembled using submerged arc welding (SAW) and high-strength friction grip (HSFG) bolting to ensure rapid bolt-together installation during short railway mega-blocks and night erection windows.

Every footover bridge component undergoes strict non-destructive testing (NDT), including Ultrasonic Testing (UT) and Magnetic Particle Testing (MPT), followed by 100% full-span workshop trial assembly to verify structural camber and connection tolerances. All steelwork is blast-cleaned to SA 2.5 and finished with high-durability thermal zinc metalizing and polyurethane coating systems engineered for 50+ year maintenance-free protection against corrosion.`,
    image: footover1,
    images: [footover1, footover2, footover3],
    tag: "Infrastructure",
    tags: ["Infrastructure", "Footover Bridge", "Urban Transit", "RDSO & IRS Standards", "100% NDT Tested", "Thermal Zinc Coated"],
    features: [
      "Custom spans engineered for urban & railway footover bridges",
      "RDSO & IRS compliant steel space truss & deck fabrication",
      "Full workshop trial assembly for zero-delay mega-block erection",
      "SA 2.5 shot-blasted with thermal zinc metalizing coat"
    ],
  },
  {
    slug: "metro-girders",
    title: "Metro Girders",
    description: `As a leading fabrication partner for urban transit infrastructure, KFab Infra manufactures heavy structural steel metro girders, elevated track viaduct box girders, and station entry-exit bridge spans. Fabricated in compliance with Indian Railways RDSO (Railway Designs and Standards Organisation) guidelines and MORTH specifications, our girders provide immense load-bearing strength and dynamic fatigue resistance for mass rapid transit systems (MRTS).

Our Jejuri facility features heavy-duty gantry cranes, precision CNC plasma cutting tables, and automated beam welding lines capable of fabricating girders exceeding 30 meters in length and up to 40 metric tons per section. Every weld joint undergoes 100% non-destructive testing (NDT), including Ultrasonic Testing (UT) and Radiographic Testing (RT) by level II NDT certified inspectors to ensure structural integrity under heavy cyclic train loads.

Prior to dispatch, KFab conducts full dimensional trial assembly and geometry verification on our workshop floor, eliminating field fit-up delays during nocturnal city erection windows. Girders are finished with multi-layer epoxy primer and polyurethane coating systems engineered for 50+ year maintenance-free atmospheric durability in demanding urban environments.`,
    image: metroGiderImg,
    images: [metroGiderImg, metroGirder1, metroGirder2, metroGirder3],
    tag: "Infrastructure",
    tags: ["Infrastructure", "RDSO Certified", "100% NDT Tested", "Urban Transit", "Heavy Beam Welding", "MORTH Compliant"],
    features: ["RDSO & MORTH Quality Approval", "100% UT & RT Non-Destructive Testing", "Trial Assembled on Workshop Floor", "Multi-Layer Polyurethane Coating"],
  },
  {
    slug: "heavyload-cranes",
    title: "Heavy-Load Overhead & EOT Cranes",
    description: `KFab Infra PVT LTD specializes in the custom fabrication of heavy-load EOT cranes, Goliath gantry cranes, semi-Goliath cranes, and heavy industrial overhead crane structures engineered for steel mills, shipyards, power plants, and heavy fabrication facilities across India. Operating from our 130,000+ sq. ft. workshop facility in Jejuri, Pune, we manufacture high-capacity crane bridges, box girders, end carriages, and trolley frames capable of handling extreme lifting capacities from 10 metric tons up to 200+ metric tons.

Our engineering team designs every crane structure in strict compliance with IS 807, IS 3177, and CMAA standards. The main crane girders feature full-length automated box-welding with internal longitudinal diaphragm stiffeners, preventing web buckling and torsional twisting during high-torque acceleration and sudden load stops. All primary structural plates are fabricated from high-tensile E350/E450 Grade steel, cut on precision CNC plasma tables to guarantee perfect camber alignment.

KFab's manufacturing process incorporates 100% Ultrasonic Testing (UT) and Radiographic Testing (RT) on all primary tension welds, followed by precision floor-boring for wheel bogies, pin joints, and gearboxes. Before dispatch, we conduct full trial assembly and wheel alignment tests at our Jejuri workshop to ensure sub-millimeter tracking accuracy, smooth travel dynamics, and long-term operational safety for heavy industrial material handling.`,
    image: craneNext1,
    images: [craneNext1, craneNext3, craneNext4, craneNext5, craneNext6, crane1, crane2, crane3],
    tag: "Heavy Lifting",
    tags: ["Heavy Lifting", "EOT & Goliath Cranes", "IS 807 / IS 3177", "200-Ton Capacity", "High-Tensile E350", "100% NDT Tested"],
    features: [
      "Custom lifting capacities from 10T up to 200+ Tons",
      "IS 807 & IS 3177 Code Compliant Box Girders",
      "Internal diaphragm stiffeners & torsional wind bracing",
      "100% UT & RT tested with trial assembly verification"
    ],
  },
  {
    slug: "railway-girders",
    title: "Railway Girders",
    description: `KFab Infra fabricates heavy open-web steel truss girders, plate girders, and composite bridge structures engineered specifically for Indian Railways mainline network and dedicated freight corridors (DFC). Built to withstand massive train axle loads, high dynamic impact factors, and harsh environmental weathering, our railway girders represent the pinnacle of heavy steel structural engineering.

Fabricated using high-tensile structural steel (E250/E350 Quality C), our production workflows feature precision template drilling, high-strength friction grip (HSFG) bolting fit-up, and submerged arc welding. We strictly adhere to Indian Railway Standard (IRS) B1 bridge codes and quality assurance plans (QAP) approved by RITES and railway authorities.

Each girder component is shot-blasted to SA 2.5 surface cleanliness and treated with thermal metalizing (zinc coating) followed by specialized epoxy protective paint systems. With over 25 years of heavy bridge fabrication mastery, KFab ensures seamless site delivery, precision alignment, and long-term fatigue performance for critical rail river crossings and overpasses.`,
    image: railwayGirder7,
    images: [railwayGirder7, railwayBridge1, railwayBridge2, railwayBridge3, railwayBridge4, railwayGirder, railwayGirderAssembly, railwayBridge, railwayGirder1, railwayGirder6],
    tag: "Infrastructure",
    tags: ["Infrastructure", "IRS B1 Codes", "RITES Approved", "Thermal Zinc Metalizing", "Open Web Truss", "Freight Corridor"],
    features: ["RITES & IRS B1 Code Compliant", "High-Tensile E350 Quality C Steel", "Thermal Zinc Spray Metalizing", "HSFG Precision Bolting"],
  },
  {
    slug: "spherical-shed",
    title: "Spherical Shed",
    description: `KFab Infra designs and fabricates large-span spherical sheds, curved space frames, and dome-shaped industrial structural enclosures designed for bulk raw material storage, fertilizer plants, cement clinker domes, and sports arenas. These architectural steel structures offer column-free interior floor spans exceeding 60 meters, maximizing volumetric storage capacity and internal vehicle maneuverability.

Engineered using advanced 3D structural analysis software, our spherical shed structures efficiently distribute heavy dead loads, live roof loads, dynamic wind pressures, and seismic forces. Fabricated from precision-curved structural steel pipes, hollow sections (RHS/SHS), and built-up plate girders, each node and flange connection is precision-machined at our Jejuri facility for rapid bolt-together field erection.

The structural components receive specialized hot-dip galvanizing or high-durability epoxy paint finishes to protect against aggressive chemical fumes, high humidity, and industrial dust accumulation. KFab’s spherical sheds provide an economical, aesthetically striking, and structurally resilient roofing solution for modern industrial plants.`,
    image: curveShedImg,
    images: [curveShedImg],
    tag: "Structural",
    tags: ["Structural Steel", "Large-Span Domes", "Column-Free Storage", "Wind & Seismic Rated", "3D Frame Analysis", "Bulk Storage"],
    features: ["Column-free spans exceeding 60m", "Advanced 3D wind & seismic calculations", "Hot-dip galvanized / epoxy protected", "Rapid modular bolt-together erection"],
  },
  {
    slug: "underground-diesel-tanks",
    title: "Underground Diesel Tanks",
    description: `KFab Infra manufactures heavy-duty double-walled underground storage tanks for diesel, gasoline, aviation fuel, and industrial chemical solvents. Engineered in strict compliance with PESO (Petroleum and Explosives Safety Organization) and IS 10987 standards, our underground tanks provide maximum environmental protection against sub-surface fuel leaks and soil contamination.

Fabricated from heavy-gauge carbon steel plates (IS 2062 Grade B), the tanks feature dual concentric shells separated by an interstitial monitoring space equipped with electronic leak-detection sensors. Internal seams are 100% double-welded using automated submerged arc welding (SAW), followed by pneumatic air testing at 1.5 times the design pressure to guarantee absolute seal integrity.

To resist aggressive soil moisture, stray electrical currents, and chemical corrosion, the exterior tank shell is blast-cleaned to SA 2.5 and coated with a 1000-micron thick solvent-free polyurethane or coal-tar epoxy protective barrier. KFab supplies fully equipped tanks with internal anti-vortex suction pipes, calibrated dipsticks, manhole access chambers, and emergency vent nozzles ready for direct installation.`,
    image: undergroungDesielTankImg,
    images: [undergroungDesielTankImg, desielTankImg],
    tag: "Heavy Storage",
    tags: ["Heavy Storage", "PESO Approved", "Double-Walled", "Leak Detection Interstitial", "Polyurethane Coated", "Petroleum Grade"],
    features: ["PESO & IS 10987 Standard Compliant", "Double-walled with interstitial leak monitor", "1000-micron anti-corrosive polyurethane coat", "100% pneumatic & hydro-pressure tested"],
  },
  {
    slug: "frustum-silo",
    title: "Frustum Silo",
    description: `KFab Infra engineers high-capacity frustum-geometry steel storage silos specifically optimized for the storage and controlled gravity discharge of cohesive powders, cement, clinker, fly ash, lime, and crushed minerals. The tapered frustum cone design eliminates mass flow blockages, arching, and ratholing, ensuring smooth, uninterrupted material flow in automated process plants.

Fabricated from thick boiler-quality and structural steel plates, our frustum silos feature internal stiffener rings, heavy-duty leg supports, and precision-cut conical slope angles tailored to the specific angle of repose of the stored material. All circumferential and longitudinal shell joints undergo strict radiographic weld sampling and magnetic particle testing (MPT).

Our silos come equipped with internal wear liner plates, fluidizing aeration pads, dust-collector flanges, high-level radar sensors, and heavy-duty pneumatic slide gates. Whether installed as standalone storage units or integrated into multi-silo batching terminals, KFab's frustum silos deliver unmatched volumetric efficiency and structural durability.`,
    image: fustrumSiloImg,
    images: [fustrumSiloImg],
    tag: "Heavy Storage",
    tags: ["Heavy Storage", "Frustum Flow Geometry", "Cement & Fly Ash", "Radiographic Tested", "Wear Liner Plates", "Automated Discharge"],
    features: ["Tapered frustum geometry prevents jamming", "Radiographic & MPT weld joint tested", "Integrated aeration pads & pneumatic gates", "Heavy internal ring-girder stiffeners"],
  },
  {
    slug: "conical-silo",
    title: "Conical Silo",
    description: `KFab Infra manufactures heavy structural conical storage silos designed for storing dry bulk materials, grains, plastic granules, chemical salts, and industrial minerals. Engineered with steep conical bottom hoppers (45° to 60° slopes), these silos utilize natural gravity to achieve complete emptying without requiring mechanical sweep augers.

Constructed using high-strength steel plate shell rings with heavy vertical column stiffeners and base anchor ring-beams, our conical silos are calculated to withstand extreme internal hydrostatic material pressure, wind overturning moments, and seismic zone forces. The roof cone features weather-tight flanged seams, safety access hatches, perimeter handrails, and dust filtration connection ports.

At our 130,000+ sq. ft. workshop, silo segments are trial-assembled in modules to ensure perfect field alignment. All steel surfaces are shot-blasted and painted with food-grade epoxy or chemical-resistant industrial coatings based on project requirements.`,
    image: conocialCiloImg,
    images: [conocialCiloImg, cilo],
    tag: "Heavy Storage",
    tags: ["Heavy Storage", "Gravity Discharge Cone", "Bulk Chemical & Grain", "Seismic Zone Rated", "Flanged Segment Assembly", "Food-Grade Coated"],
    features: ["Steep 45°-60° cone for 100% gravity discharge", "Calculated for high seismic & wind loads", "Food-grade epoxy or chemical lining", "Complete with access ladders & handrails"],
  },
  {
    slug: "roller",
    title: "Rollers",
    description: `KFab Infra produces precision-engineered industrial conveyor rollers, heavy sugar mill crushing rollers, guide rollers, and drive drums for heavy material handling systems, paper mills, and steel rolling facilities. Operating in continuous high-stress environments, our rollers are built to maintain perfect concentricity, low rotational resistance, and superior wear life.

Fabricated from seamless heavy-wall steel pipes or forged alloy steel shafts, each roller undergoes precision CNC turning, deep-hole boring, and static and dynamic balancing on state-of-the-art balancing rigs. Housing seats are precision bored to accept heavy-duty spherical roller bearings with multi-lip labyrinth grease seals, protecting internal components against abrasive dust and moisture ingress.

KFab offers specialized surface treatments including hard-chrome plating, rubber lagging, polyurethane coating, and induction hardening to prevent surface scoring and slippage. Our rollers deliver exceptional reliability and smooth power transmission across high-speed conveyor belts and heavy industrial production lines.`,
    image: rollerImg,
    images: [rollerImg],
    tag: "Industrial Handling",
    tags: ["Industrial Handling", "Dynamic Balanced", "CNC Turned", "Labyrinth Sealed", "Heavy-Duty Bearings", "Hard-Chrome Coated"],
    features: ["Dynamic balanced to G2.5 precision", "Seamless heavy-wall pipe & forged shaft", "Multi-lip labyrinth grease seals", "Hard-chrome or rubber lagged finish"],
  },
  {
    slug: "calandria",
    title: "Calandria",
    description: `KFab Infra manufactures high-efficiency shell-and-tube calandrias, juice heaters, and heat exchangers engineered for sugar refineries, chemical processing units, and evaporative concentration plants. Designed for maximum thermal performance, our calandrias facilitate rapid heat transfer between high-pressure heating steam and process liquids while minimizing fouling rates.

Fabricated using high-grade SS304/SS316 stainless steel or boiler quality carbon steel (SA 516 Gr 70), each calandria shell contains precision CNC-drilled tube sheets holding hundreds of seamless heat exchanger tubes. Tubes are expanded and seal-welded into tube sheets using orbital TIG welding, guaranteeing leak-free performance under thermal cycling.

Every calandria undergoes rigorous hydrostatic shell-and-tube side pressure testing, ultrasonic tube thickness checks, and helium leak detection prior to dispatch. KFab's calandrias significantly improve energy efficiency, steam economy, and evaporation throughput for heavy process industries.`,
    image: calandriaImg,
    images: [calandriaImg],
    tag: "Process Plant",
    tags: ["Process Plant", "Shell-and-Tube Exchanger", "Orbital TIG Welded", "SS316/SA516 Gr 70", "ASME Compliant", "Steam Economy"],
    features: ["Precision CNC-drilled tube sheets", "Orbital TIG seal-welded heat tubes", "Boiler grade SA 516 Gr 70 / SS316 steel", "Hydrostatic & helium leak tested"],
  },
  {
    slug: "catchall",
    title: "Catchall",
    description: `KFab Infra fabricates custom industrial catchalls, entrainment separators, and vapor-liquid separator vessels installed in sugar boiling pans and chemical evaporation trains. Designed to trap and recover liquid droplets entrained in high-velocity steam vapor streams, our catchalls prevent valuable product loss and protect downstream condenser systems from syrup fouling.

Utilizing multi-vane baffle plates, tangential cyclone entry geometry, and mesh demister pads, KFab catchalls achieve liquid removal efficiencies exceeding 99.5%. Vessels are fabricated from corrosion-resistant carbon steel or stainless steel plates with full-penetration welded seams inspected via magnetic particle testing (MPT).

Equipped with automatic condensate drain traps, sight glass ports, and wash-down spray nozzles, our catchall units operate with minimal pressure drop and zero maintenance downtime. KFab tailors catchall dimensions to fit existing factory layouts and piping nozzles.`,
    image: catchallImg,
    images: [catchallImg],
    tag: "Industrial Handling",
    tags: ["Industrial Handling", "Vapor-Liquid Separator", "99.5% Efficiency", "Demister Baffles", "Zero Pressure Drop", "Syrup Recovery"],
    features: ["99.5%+ entrainment separation efficiency", "Multi-vane baffle & cyclone design", "Zero maintenance & minimal pressure drop", "Integrated condensate traps & spray nozzles"],
  },
  {
    slug: "silo-with-base",
    title: "Silo with Base",
    description: `KFab Infra offers complete modular silo systems integrated with heavy structural steel support bases, elevated discharge hoppers, operator access platforms, and maintenance stairways. Designed as an all-in-one storage solution, these integrated silos eliminate the need for separate civil concrete support pillars, enabling rapid installation on simple raft foundations.

The support base framework is fabricated from heavy-rolled I-beams (ISMB/ISMC) and tubular bracing columns engineered to support the full vertical weight of the loaded silo along with dynamic wind and seismic loads. The lower cone hopper features integrated maintenance isolation valves, rotary airlock feeders, and truck loading spouts.

At our Jejuri workshop, the complete structural base and silo body are trial-fitted to ensure zero-defect assembly on site. All steel components receive heavy industrial protective coatings for long-term outdoor weather resistance.`,
    image: ciloStool,
    images: [ciloStool],
    tag: "Heavy Storage",
    tags: ["Heavy Storage", "Modular Structural Base", "Rapid Site Erection", "Truck Loading Spouts", "Trial Assembled", "ISMB Heavy Frames"],
    features: ["Self-supporting heavy ISMB structural base", "Eliminates civil concrete support pillars", "Pre-fitted truck loading & feeder spouts", "Trial-assembled at workshop floor"],
  },
  {
    slug: "plant-shed",
    title: "Plant Shed",
    description: `KFab Infra designs, fabricates, and erects heavy industrial PEB (Pre-Engineered Building) factory sheds, heavy crane gantry structures, and industrial warehouse complexes. Engineered for heavy manufacturing facilities, power plants, and logistics hubs, our plant sheds support heavy overhead EOT cranes ranging from 10 to 100 metric tons lifting capacity.

Fabricated from high-tensile structural steel plates (E350 Grade) cut on precision CNC plasma machines, main rigid frames feature tapered built-up I-sections, heavy crane runway girders, Z/C cold-formed roof purlins, and wall girts. All primary structural connections utilize high-strength friction grip (HSFG) bolts for fast, safe field erection.

Roofing and wall cladding options include high-durability color-coated Galvalume sheets with insulation layers, sky-light translucent panels, and continuous roof ridge ventilators. KFab’s industrial sheds deliver column-free spans up to 45 meters, superior weather tightness, and 50+ year structural longevity.`,
    image: plantShedImg,
    images: [plantShedImg, trus],
    tag: "Structural",
    tags: ["Structural Steel", "PEB Industrial Sheds", "EOT Crane Gantry", "High-Tensile E350", "45m Column-Free Span", "HSFG Bolted"],
    features: ["Supports up to 100-Ton overhead EOT cranes", "Column-free clear spans up to 45 meters", "High-tensile E350 Grade CNC plasma cut steel", "Color Galvalume cladding & skylight panels"],
  },
  {
    slug: "hopper",
    title: "Hoppers",
    description: `KFab Infra fabricates heavy industrial material handling hoppers, receiving hoppers, and surge bins engineered for coal washeries, cement plants, mining crushers, and aggregate quarries. Designed to handle severe impact loads from falling bulk rocks and abrasive minerals, our hoppers feature heavy structural rib stiffeners and replaceable internal wear liner plates.

Wetted interior surfaces are lined with high-hardness HARDOX / SAILHARD abrasion-resistant alloy steel plates or UHMW-PE liners secured with countersunk bolting for easy field replacement. Sloped hopper walls are calculated at steep angles (55° to 65°) to prevent sticky material buildup and bridging.

Hoppers can be integrated with hydraulic clamshell gates, vibrating feeder flanges, dust suppression spray manifolds, and heavy load cell weighing mounts. KFab’s robust hopper construction ensures zero wall deformation and continuous heavy-duty throughput.`,
    image: hopper1,
    images: [hopper1, hopper2, hopper3, hopper4, hopper5, hopperImg],
    tag: "Industrial Handling",
    tags: ["Industrial Handling", "HARDOX Wear Liners", "Coal & Mineral Handling", "High-Impact Resistant", "Vibrating Feeder Ready", "Heavy Structural Ribs"],
    features: ["Replaceable HARDOX / SAILHARD liner plates", "Steep 55°-65° anti-bridging wall angles", "Heavy structural stiffener rib matrix", "Vibrating feeder & load cell compatible"],
  },
  {
    slug: "tanks",
    title: "Tanks",
    description: `KFab Infra manufactures custom vertical, horizontal, and rectangular liquid storage tanks for water treatment plants, chemical storage, fuel reserves, process fluids, and fire-fighting reserves. Engineered in accordance with API 650, BS 2654, and IS 2825 codes, our storage tanks offer volumetric capacities ranging from 5,000 liters to over 500,000 liters.

Fabricated from high-grade carbon steel or SS304/SS316 stainless steel, tanks are constructed using staggered plate shell rings with fully automatic submerged arc welding (SAW). All circumferential and vertical seams undergo 100% dye penetrant testing, vacuum box testing on bottom plates, and full hydrostatic water testing.

Tanks are supplied complete with internal anti-vortex baffles, floating suction units, spiral access stairways, roof manholes, level gauge indicators, and anti-corrosive internal lining (epoxy/rubber lining) tailored to the stored liquid.`,
    image: tanks1,
    images: [tanks1, tanks2, tanks3, tanks4, desielTankImg],
    tag: "Heavy Storage",
    tags: ["Heavy Storage", "API 650 Certified", "Hydrostatic Tested", "SS316 & Carbon Steel", "500kL Capacity", "Epoxy Internal Lining"],
    features: ["API 650 & IS 2825 Code Compliant", "Capacities up to 500,000 Liters", "100% SAW welded & Hydro-tested", "Specialized internal chemical epoxy lining"],
  },
  {
    slug: "gallery-structure",
    title: "Gallery Structures",
    description: `KFab Infra fabricates elevated structural steel conveyor galleries, pipe rack bridges, and cross-over walkways designed for long-distance bulk material handling between industrial processing buildings. Our gallery structures safely house heavy belt conveyors, utility piping networks, electrical cable trays, and maintenance access walkways across road crossings and railway tracks.

Constructed from heavy structural steel trusses (pipes, angles, and channel sections) or box girders, the galleries are pre-fabricated in transportable spans of 15 to 30 meters. The floor deck features anti-skid chequered plates or galvanized steel gratings with continuous safety toe-boards and handrails.

Enclosed galleries are clad with profile Galvalume sheeting or wire mesh to protect conveyed materials from wind and rain. Pre-assembled and trial-fitted at our Jejuri factory, KFab gallery structures ensure minimal site disruption during final crane placement.`,
    image: railwayBridge,
    images: [railwayBridge],
    tag: "Structural",
    tags: ["Structural Steel", "Conveyor Galleries", "Elevated Pipe Racks", "Anti-Skid Chequered Deck", "Pre-Assembled Spans", "Galvalume Cladding"],
    features: ["Pre-fabricated spans from 15m to 30m", "Anti-skid chequered plate or grating floor", "Weather-tight Galvalume side cladding", "Trial-assembled prior to crane erection"],
  },
  {
    slug: "cuboidal-tanks",
    title: "Cuboidal Tanks",
    description: `KFab Infra manufactures compact cuboidal (rectangular) steel storage tanks specifically engineered for indoor industrial utility rooms, basement fuel storage, chemical dosing, and space-constrained factory floor plans. Unlike cylindrical tanks, cuboidal tanks maximize floor footprint efficiency, fitting neatly against factory walls and structural columns.

To withstand internal hydrostatic pressure without bulging, our cuboidal tanks feature heavy internal tie-rod grid matrices, external channel stiffeners (ISMC), and corner gusset plates. Fabricated from 6mm to 12mm thick steel plates, all internal seams are double-welded and tested with magnetic particle inspection (MPI).

Tanks are fitted with top inspection manholes, sight glass level indicators, drain valves, overflow nozzles, and lifting lugs. Available with internal epoxy coatings or hot-dip galvanizing, KFab cuboidal tanks deliver high structural rigidity and leak-proof storage.`,
    image: cuboidalTankImg,
    images: [cuboidalTankImg],
    tag: "Heavy Storage",
    tags: ["Heavy Storage", "Space-Saving Rectangular", "Internal Tie-Rod Matrix", "ISMC Channel Stiffened", "Basement Fuel Tank", "MPI Leak Tested"],
    features: ["Space-saving rectangular footprint", "Internal tie-rod matrix prevents bulging", "Heavy ISMC external channel stiffeners", "100% MPI & leak-tested double welds"],
  },
  {
    slug: "metro-girders-assembly",
    title: "Metro Girders Assembly",
    description: `KFab Infra provides specialized workshop trial assembly and shop fit-up verification for complex metro bridge girders, pier caps, and steel viaduct segments. Utilizing our 130,000+ sq. ft. heavy workshop floor and 20-ton overhead gantry cranes, we assemble multi-segment girder spans to verify 3D camber alignment, bolt-hole line-up, and interface tolerances prior to site delivery.

Our Quality Assurance (QA) team uses precision total-station optical survey instruments and digital laser trackers to measure structural dimensions against approved fabrication drawings within sub-millimeter accuracy. Any minor shop adjustments are completed immediately, preventing expensive site rework and project delays.

Trial assembly is witnessed and certified by client inspectors (RITES, DMRC, Maha-Metro). Once verified, match-marking tags are hard-stamped on every connection interface for rapid bolt-together assembly at site.`,
    image: railwayGirderAsebImg,
    images: [railwayGirderAsebImg, railwayGirderAssembly],
    tag: "Infrastructure",
    tags: ["Infrastructure", "Workshop Trial Assembly", "3D Optical Survey", "Sub-Millimeter Accuracy", "Match-Marked Connections", "Zero Site Rework"],
    features: ["130,000+ sq. ft. trial assembly bay", "Sub-millimeter 3D optical laser survey", "RITES & Metro authority inspection ready", "Hard-stamped match-marking for fast site fit"],
  },
  {
    slug: "vsl-kattar",
    title: "VSL Kattar",
    description: `KFab Infra fabricates heavy structural steel VSL kattar assemblies, segment launcher beams, and bridge gantry cross-heads engineered for pre-stressed concrete bridge construction. Designed to carry immense concentrated loads during segment hoisting and span launching, these structural components demand exceptional steel strength and fatigue resistance.

Fabricated from high-strength structural steel plates (E350/E450 Grade), VSL kattar units feature heavy box-section geometry with internal diaphragm stiffeners, machined pin-joint connections, and high-tensile tie-rod anchor plates. All critical tension welds undergo 100% Radiographic Testing (RT) and Ultrasonic Testing (UT).

KFab’s heavy machining facility ensures pin hole diameters and face alignment are machined to tight ISO tolerances. Our VSL kattar assemblies provide safety-certified lifting performance for major highway viaducts and railway flyovers across India.`,
    image: vslKattarImg,
    images: [vslKattarImg],
    tag: "Infrastructure",
    tags: ["Infrastructure", "VSL Launching Gantry", "High-Strength E450 Steel", "Diaphragm Stiffened", "100% Radiographic Tested", "ISO Pin Tolerances"],
    features: ["High-strength E350/E450 grade steel plate", "100% Radiographic & Ultrasonic weld tested", "Precision bored ISO pin connections", "Engineered for heavy launcher loads"],
  },
  {
    slug: "pile-head",
    title: "Pile Head",
    description: `KFab Infra fabricates heavy structural steel pile head caps, embedment ring assemblies, and foundation load-transfer plates engineered for deep foundation piles in marine ports, river bridges, thermal power plants, and high-rise structures. These heavy steel components transfer massive vertical compression and lateral shear loads from superstructures into underground concrete pile foundations.

Fabricated from heavy plate sections up to 50mm thickness, pile head assemblies incorporate thick base plates, anchor shear studs, internal stiffener webs, and pre-drilled rebar clearance holes. All heavy plate joints are prepared with double-V bevels and welded using multi-pass submerged arc welding (SAW).

Surfaces are treated with heavy-duty anti-corrosive primers or hot-dip galvanizing to withstand harsh underground moisture and chemical soil conditions. KFab pile heads guarantee structural load distribution and long-term foundation safety.`,
    image: pileHeadImg,
    images: [pileHeadImg],
    tag: "Infrastructure",
    tags: ["Infrastructure", "Heavy Foundation Cap", "Up to 50mm Plate", "Multi-Pass SAW Welded", "Anchor Shear Studs", "Marine & Bridge Grade"],
    features: ["Heavy plate sections up to 50mm thickness", "Multi-pass submerged arc welding (SAW)", "Integrated shear studs & stiffener webs", "Hot-dip galvanized or anti-corrosive coat"],
  },
  {
    slug: "goliath-crane-leg",
    title: "Goliath Crane Leg",
    description: `KFab Infra manufactures heavy structural box-girder legs, gantry sills, and top equalizer beams for Goliath and Semi-Goliath overhead travelling cranes. Engineered for heavy shipyard lifting, stockyard material handling, and pre-cast concrete yards, our crane legs support working loads ranging from 20 tons to 200 tons.

Fabricated from high-tensile steel plates, crane legs feature full-length automated box-welding with internal diaphragm plates and diagonal wind bracing to prevent torsional buckling under heavy crane travel acceleration. Pin joints and bogie mounting plates are precision-bored on heavy floor-boring machines.

Every leg assembly undergoes complete non-destructive testing (NDT), dimensional alignment checks, and trial connection with top main girders at our Jejuri facility. KFab crane structures ensure smooth crane travel dynamics and maximum structural stability.`,
    image: goliathCraneLegImg,
    images: [goliathCraneLegImg],
    tag: "Heavy Lifting",
    tags: ["Heavy Lifting", "Goliath Gantry Legs", "200-Ton Load Capacity", "Box-Girder Construction", "Floor-Bored Pin Joints", "Torsional Wind Braced"],
    features: ["Supports up to 200-Ton Goliath cranes", "Full-length box girder with internal diaphragms", "Floor-bored pin & bogie mounting seats", "Trial-connected at Jejuri workshop bay"],
  },
  {
    slug: "deck-panel",
    title: "Deck Panel",
    description: `KFab Infra fabricates modular steel deck panels, orthotropic bridge deck units, and heavy industrial mezzanine floor panels designed for bridge rehabilitation, temporary bypass bridges, and factory walkways. Engineered for high axle load distribution, these steel deck panels offer light deadweight combined with exceptional bending stiffness.

Constructed with top chequered or flat steel cover plates welded to longitudinal trapezoidal (rib) stiffeners and transverse floor beams, the deck panels are fabricated on automated robotic/SAW welding beds to maintain flat surface tolerances. Panels feature pre-punched perimeter bolt holes for quick modular interconnection.

Finished with thermal zinc spray or heavy anti-skid epoxy-grit wearing coats, KFab deck panels provide immediate traffic-ready surfaces with high skid resistance and zero maintenance requirements.`,
    image: deckPannelImg,
    images: [deckPannelImg],
    tag: "Infrastructure",
    tags: ["Infrastructure", "Modular Orthotropic Deck", "Trapezoidal Rib Stiffened", "Anti-Skid Epoxy Grit", "High Axle Load", "Rapid Field Installation"],
    features: ["Modular orthotropic design for rapid assembly", "Trapezoidal rib stiffeners for high axle loads", "Anti-skid thermal zinc or epoxy grit coating", "Pre-punched precision connection holes"],
  },
  {
    slug: "hubballi-airport",
    title: "Hubballi Airport Infrastructure",
    description: `KFab Infra fabricated large-span architectural structural steel frameworks, passenger terminal roof trusses, and drop-off canopy structures for the Hubballi Airport expansion project in Karnataka. Engineered to modern aviation architectural standards, these structures combine high structural strength with sleek visual aesthetics.

The project featured complex tubular steel space trusses, curved canopy purlins, and heavy tree-column support structures fabricated from high-grade structural steel pipes and hollow sections (CHS/RHS). Precision 3D profiling and computerized CNC pipe-notching at KFab ensured perfect node fit-ups and seamless full-penetration weld joints.

All structural steelwork was shot-blasted to SA 2.5 and finished with multi-coat fluorocarbon/epoxy paint systems designed for long-term weather resistance and high visual appeal. KFab’s successful execution demonstrates our capability in high-spec aviation infrastructure.`,
    image: hooglyAirportImg,
    images: [hooglyAirportImg, hoogtAirportImg, hogliImg],
    tag: "Aviation Infrastructure",
    tags: ["Aviation Infrastructure", "Airport Terminal Trusses", "Tubular Space Frame", "3D CNC Pipe Notched", "Hubballi Airport Project", "Architectural Steel"],
    features: ["Executed for Hubballi Airport expansion", "3D CNC pipe-notched tubular space frames", "Tree-column architectural support structures", "SA 2.5 shot-blasted with fluorocarbon coat"],
  },
  {
    slug: "sugarcane-vessels",
    title: "Sugarcane Vessels",
    description: `KFab Infra PVT LTD specializes in the custom fabrication of high-capacity sugarcane processing vessels, juice extraction units, heavy evaporators, and vacuum pans engineered for Tier-1 sugar mills and ethanol distilleries across Maharashtra and India. Built at our 130,000+ sq. ft. heavy workshop in Jejuri, Pune, each vessel is fabricated from high-grade stainless steel (SS304/SS316) and IS 2062 Grade B carbon steel to withstand extreme thermal expansion, continuous operating pressures, and corrosive acidic juice environments.

Our manufacturing process includes state-of-the-art CNC plate rolling, submerged arc welding (SAW), 100% dye penetrant (DP) inspection, and hydrostatic pressure testing to guarantee zero-leak performance during peak crushing seasons. Designed with optimal juice circulation geometry, our evaporators maximize heat transfer coefficients, drastically reducing steam consumption and operational downtime for sugar plants.

KFab's engineering team collaborates directly with sugar factory technical directors to build custom vessel capacities ranging from 1,000 sq. m. to 4,000 sq. m. heating surface areas. All structural supports, access platforms, and nozzle connections are built in accordance with ASME Section VIII specifications, ensuring total compliance with Indian and international industrial safety standards.`,
    image: sugercanVesselImg,
    images: [sugercanVesselImg],
    tag: "Process Plant",
    tags: ["Process Plant", "ASME Section VIII", "Sugar Industry", "SS304/SS316", "Hydro-Tested", "CNC Plate Rolled"],
    features: ["Custom capacities up to 4,000 sq.m", "Corrosion & acid resistant SS304/316", "100% Hydrostatic & DP Leak Tested", "ASME Section VIII Compliant"],
  },
];

const ServicesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

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
                  onClick={() => handleCardClick(index)}
                  className="card-premium group h-full overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xs font-medium px-3 py-1.5 bg-black/60 rounded-full border border-white/20 backdrop-blur-sm">
                        Click to Expand Gallery & Specs
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

      {/* Interactive 2-Section Lightbox Modal */}
      <ServiceDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        services={services}
        selectedIndex={selectedIndex}
      />

      <Footer />
    </main>
  );
};

export default ServicesPage;