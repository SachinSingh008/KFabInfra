export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  introduction: string;
  whyChooseUs: string;
  applications: string[];
  process: string[];
  advantages: string[];
  materials: string[];
  targetKeywords?: string[];
  faq: { question: string; answer: string }[];
  image: string;
  imageAlt: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "heavy-steel-fabrication",
    title: "Heavy Steel Fabrication",
    slug: "heavy-steel-fabrication",
    seoTitle: "Heavy Steel Fabrication Contractor & Services Pune | KFab Infra",
    metaDescription: "Premier heavy steel fabrication contractor & company in Pune. Specializing in heavy industrial fabrication, heavy structural steel works & high-tonnage engineering.",
    h1: "Heavy Steel Fabrication Services & Contracting Pune",
    introduction: "KFab Infra Project PVT LTD is a premier heavy steel fabrication company and contractor in Pune. We deliver high-tonnage heavy structural steel components, boiler shells, heavy machine frames, and process plant equipment for sugar, cement, power, and metro infrastructure projects across India.",
    whyChooseUs: "With over 25 years of engineering excellence, our 15,000 sq ft manufacturing workshop in Jejuri/Pune is equipped with heavy-duty overhead cranes, automatic submerged arc welding (SAW), CNC plasma plate cutting, and hydraulic plate bending rolls capable of shaping thick steel plates up to 50mm.",
    applications: ["Sugar & Ethanol Plants", "Cement & Mining Sector", "Thermal & Hydro Power Sector", "Metro Rail & Infrastructure Girders"],
    process: ["3D Blueprint Review & BOM Generation", "IS-Compliant Raw Material Sourcing", "CNC Cutting & Heavy Plate Bending", "SAW / FCAW Certified Welding", "NDT Quality Testing & Surface Coating", "Site Delivery & Erection"],
    advantages: ["Heavy crane lifting and assembly capacity", "ASME & IS 2062 certified steel fabrication", "100% Ultrasonic & Radiography NDT testing", "Proven track record with 500+ industrial projects"],
    materials: ["Mild Steel (IS 2062 E250 / E350)", "Stainless Steel (SS 304, 304L, 316, 316L)", "Boiler Quality Steel (SA 516 Gr 60 / 70)", "Alloy Steel & Weathering Steel"],
    targetKeywords: [
      "Heavy fabrication contractor Pune",
      "Heavy fabrication company Pune",
      "Heavy steel fabrication Pune",
      "Heavy structural fabrication Pune",
      "Heavy industrial fabrication Pune",
      "Heavy steel fabricator Pune",
      "Heavy engineering fabrication Pune"
    ],
    faq: [
      { question: "What maximum plate thickness can KFab Infra roll and fabricate?", answer: "Our hydraulic plate bending machines can roll steel plates up to 50mm thickness in cold condition and up to 80mm in hot condition." },
      { question: "Do you supply heavy fabrication works outside Maharashtra?", answer: "Yes, we ship heavy fabricated assemblies to clients across India and undertake site erection nationwide." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Heavy Steel Fabrication Services Pune KFab Workshop"
  },
  {
    id: "structural-steel",
    title: "Structural Steel Fabrication",
    slug: "structural-steel",
    seoTitle: "Structural Steel Fabrication Contractor Pune | KFab Infra",
    metaDescription: "Expert structural steel fabrication contractor & fabricator in Pune. High-precision structural steel work, industrial pipe racks, platforms & structural erection.",
    h1: "Structural Steel Fabrication & Erection Services Pune",
    introduction: "KFab Infra Project PVT LTD is Pune's leading structural steel fabrication contractor. We engineer, fabricate, and erect heavy structural steel frameworks, factory columns, roof trusses, crane girders, pipe bridges, and mezzanine structures.",
    whyChooseUs: "We utilize Tekla Structures BIM software to generate 3D fabrication drawings, ensuring zero clash errors during field erection. All structural joints are precision-drilled and shop-welded under strict QA parameters.",
    applications: ["Industrial Plant Structures", "Warehouse & Factory Buildings", "Heavy Pipe Bridges & Support Towers", "Commercial Steel Sky-frames"],
    process: ["Tekla 3D Structural Modeling", "Automated Beam Sawing & Drilling", "Grit Blasting to Sa 2.5 Standard", "Epoxy Primer & Topcoat Application", "Site Bolt Tightening & Erection"],
    advantages: ["Precision CNC beam processing", "Seismic-resistant structural steel designs", "Rapid on-site bolting & welding erection", "ISO certified quality control"],
    materials: ["Universal Beams & Columns (ISMB / ISMC / ISA)", "Built-up Tapered Steel Sections", "High Tensile Fasteners (Grade 8.8 / 10.9)"],
    targetKeywords: [
      "Structural fabrication Pune",
      "Structural fabrication contractor Pune",
      "Structural steel fabrication Pune",
      "Structural steel fabricator Pune",
      "Structural steel contractor Pune",
      "Steel structure fabrication Pune"
    ],
    faq: [
      { question: "What surface protection standards do you offer for structural steel?", answer: "We offer shot blasting (Sa 2.5), zinc-rich epoxy primer, polyurethane (PU) topcoats, and hot-dip galvanizing for anti-corrosion protection." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Structural Steel Fabrication Contractor Pune Steel Structures"
  },
  {
    id: "peb-structures",
    title: "PEB Structures & Buildings",
    slug: "peb-structures",
    seoTitle: "PEB Contractor & Manufacturer Pune | Pre Engineered Buildings",
    metaDescription: "Top PEB contractor, manufacturer & company in Pune. Pre-engineered building fabrication, PEB industrial shed construction & steel roof erection.",
    h1: "PEB Structure Fabrication & Contractor Services Pune",
    introduction: "KFab Infra Project PVT LTD is a top PEB contractor and pre-engineered building manufacturer in Pune. We fabricate high-durability PEB structures, factory buildings, logistics warehouses, and industrial sheds tailored to your exact span and height specs.",
    whyChooseUs: "PEB technology reduces building weight by up to 30% and speeds up project commissioning. We design clear-span buildings up to 60m wide with integrated EOT crane gantries.",
    applications: ["Manufacturing Plants", "Logistics & Distribution Warehouses", "Cold Storage Buildings", "Commercial Workshops & Showrooms"],
    process: ["Primary Frame Fabrication", "Cold-Formed Z & C Purlin Manufacturing", "Color Coated Roof & Wall Cladding", "On-site Anchor Bolt Erection"],
    advantages: ["30% faster project delivery", "100% column-free interior space available", "Seismic-rated structural design", "Low maintenance galvalume roofing"],
    materials: ["High-Tensile Steel Plates (350 MPa)", "Pre-painted Galvalume (PPGL) Sheets", "Polyurethane Foam (PUF) Insulated Panels"],
    targetKeywords: [
      "PEB contractor Pune",
      "PEB company Pune",
      "PEB manufacturer Pune",
      "PEB fabrication Pune",
      "PEB building contractor Pune",
      "Pre engineered building contractor Pune"
    ],
    faq: [
      { question: "How long does it take to construct a 50,000 sq ft PEB industrial shed in Pune?", answer: "Typically, fabrication takes 3 to 4 weeks and on-site erection takes 4 weeks, total completion in under 60 days." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "PEB Structure Manufacturer Pune Pre Engineered Steel Building"
  },
  {
    id: "industrial-shed-fabrication",
    title: "Industrial Shed Fabrication",
    slug: "industrial-shed-fabrication",
    seoTitle: "Industrial Shed Contractor Pune | Factory Shed Construction",
    metaDescription: "Leading industrial shed contractor & factory shed construction company in Pune. Steel shed fabrication, warehouse shed construction & erection near me.",
    h1: "Industrial Shed Construction & Fabrication Contractor Pune",
    introduction: "KFab Infra Project PVT LTD is Pune's leading industrial shed contractor. We manufacture and construct heavy factory sheds, warehouse sheds, steel sheds, and storage structures engineered for industrial durability.",
    whyChooseUs: "Our end-to-end shed construction covers soil anchor foundations, steel truss fabrication, crane gantry beam alignment, side cladding, and natural skylight roofing installation.",
    applications: ["Factory Production Halls", "Heavy Machinery Assembly Sheds", "Material Storage & Raw Grain Warehouses", "Automobile Ancillary Workshop Sheds"],
    process: ["Site Survey & Load Design", "Truss & Column Workshop Fabrication", "Anti-Rust Painting & Coating", "Field Crane Erection & Sheeting"],
    advantages: ["Heavy crane load support (5T to 50T)", "Weather-tight leakproof roofing systems", "Custom ventilation ridge monitors", "Cost-effective per square foot design"],
    materials: ["IS 2062 Structural Steel", "Galvalume Trapezoidal Sheeting", "Polycarbonate Skylight Sheets"],
    targetKeywords: [
      "Industrial shed contractor Pune",
      "Industrial shed construction Pune",
      "Steel shed contractor Pune",
      "Factory shed contractor Pune",
      "Warehouse shed contractor Pune"
    ],
    faq: [
      { question: "Can you install crane runway gantries inside existing industrial sheds?", answer: "Yes, we construct independent crane gantry stanchions and runway beams inside existing factory buildings." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Industrial Shed Contractor Pune Factory Shed Construction"
  },
  {
    id: "industrial-piping",
    title: "Industrial & Process Piping",
    slug: "industrial-piping",
    seoTitle: "Industrial Piping Contractor Pune | Process Piping Fabrication",
    metaDescription: "Expert industrial piping contractor & process piping company in Pune. SS & MS pipe spool fabrication, stainless steel piping & pipeline erection.",
    h1: "Industrial & Process Piping Contractor Pune",
    introduction: "KFab Infra Project PVT LTD is an experienced industrial piping contractor in Pune specializing in process piping, steam pipelines, compressed air piping, utility lines, and stainless steel sanitary piping for process industries.",
    whyChooseUs: "Our certified TIG and MIG welders fabricate pipe spools in workshop environments before transport, minimizing field welding time and guaranteeing leak-free pressure testing.",
    applications: ["Chemical & Pharma Plants", "Sugar & Distillery Piping", "Power Plant Steam & Feedwater Lines", "Food & Beverage Processing Facilities"],
    process: ["Isometric Drawing Review", "Workshop Pipe Spool Fitting", "Certified TIG/SMAW Welding", "Hydrostatic Pressure & NDT Inspection", "Field Fit-up & Erection"],
    advantages: ["ASME B31.3 compliant piping", "100% Radiography X-ray tested joints", "Smooth internal surface finishes", "High-pressure rated line execution"],
    materials: ["Stainless Steel (SS 304, SS 316, SS 316L)", "Carbon Steel (ASTM A106 Gr B / A53)", "Mild Steel ERW & Seamless Pipes"],
    targetKeywords: [
      "Industrial piping contractor Pune",
      "Industrial piping company Pune",
      "Process piping contractor Pune",
      "SS pipe fabrication Pune",
      "MS pipe fabrication Pune",
      "Stainless steel piping contractor Pune"
    ],
    faq: [
      { question: "What pressure limits do your industrial piping systems support?", answer: "We fabricate low-pressure utility lines up to high-pressure steam pipelines rated at over 100 bar." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Industrial Piping Contractor Pune Process Piping Spool Fabrication"
  },
  {
    id: "erection-work",
    title: "Industrial Erection Services",
    slug: "erection-work",
    seoTitle: "Industrial Erection Contractor Pune | Structural Steel Erection",
    metaDescription: "Trusted industrial erection contractor in Pune. Structural steel erection, PEB erection, heavy equipment installation & mechanical rigging services.",
    h1: "Industrial & Structural Erection Contractor Pune",
    introduction: "KFab Infra Project PVT LTD provides high-safety industrial erection services, structural steel erection, PEB building erection, and heavy mechanical equipment rigging across Pune and Maharashtra.",
    whyChooseUs: "With our certified rigging engineers, heavy hydraulic cranes, laser leveling tools, and strict adherence to industrial safety norms, we execute complex high-elevation erection work safely.",
    applications: ["Heavy Structural Frame Erection", "PEB Shed & Roof Sheeting Erection", "Heavy Equipment & Pressure Vessel Rigging", "Pipe Rack & Overhead Crane Gantry Erection"],
    process: ["Site Erection Planning & Safety Audit", "Crane Position & Rigging Analysis", "Structural Bolt Torque Tightening", "Laser Alignment & Final Grouting"],
    advantages: ["Zero-accident safety record", "High-tonnage mobile crane fleet access", "Certified riggers & height workers", "On-time project commissioning"],
    materials: ["High-Tensile Structural Bolts", "Non-Shrink Epoxy Anchor Grout", "Heavy Duty Shackles & Lifting Slings"],
    targetKeywords: [
      "Industrial erection contractor Pune",
      "Structural erection contractor Pune",
      "Steel erection contractor Pune",
      "PEB erection contractor Pune",
      "Fabrication and erection contractor Pune"
    ],
    faq: [
      { question: "Do you supply mobile cranes and hydras for site erection?", answer: "Yes, we manage complete mobile crane logistics, rigging tackle, and scaffolding required for structural erection." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Industrial Erection Contractor Pune Structural Steel Rigging"
  },
  {
    id: "turnkey-industrial-projects",
    title: "Turnkey Industrial EPC Projects",
    slug: "turnkey-industrial-projects",
    seoTitle: "Turnkey Industrial Contractor Pune | Industrial EPC Company",
    metaDescription: "Premier turnkey industrial contractor & EPC company in Pune. Complete greenfield plant execution, structural fabrication & turnkey solutions.",
    h1: "Turnkey Industrial Projects & EPC Solutions Pune",
    content: "KFab Infra Project PVT LTD delivers turnkey industrial contracts and EPC project execution for manufacturing plants, sugar mills, chemical units, and industrial facilities in Pune and Maharashtra.",
    introduction: "As a turnkey industrial contractor, we take complete single-point responsibility from foundation anchor design and shop fabrication to site erection, utility piping, and commissioning support.",
    whyChooseUs: "Our integrated EPC execution minimizes schedule delays and budget overruns by managing all engineering, procurement, fabrication, and erection under one roof.",
    applications: ["Greenfield Factory Construction", "Sugar Mill Expansion Projects", "Chemical Process Unit EPC", "Industrial Warehouse Parks"],
    process: ["Concept Engineering & Civil Interface", "Workshop Component Manufacturing", "Structural Steel Erection & PEB Shed", "Utility & Equipment Hookup", "Commissioning & Handover"],
    advantages: ["Single-point accountability", "Predictable project timelines", "Optimized cost management", "Comprehensive QA/QC documentation"],
    materials: ["Structural Steel", "PEB Sheeting", "Process Piping Spools", "Industrial Concrete Anchors"],
    targetKeywords: [
      "Turnkey industrial contractor Pune",
      "Industrial turnkey contractor Pune",
      "Turnkey fabrication contractor Pune",
      "Industrial EPC contractor Pune",
      "Turnkey industrial solutions Pune"
    ],
    faq: [
      { question: "What is the primary benefit of awarding a turnkey industrial contract to KFab?", answer: "You gain a single point of contact for design, fabrication, supply, erection, and commissioning without managing multiple vendors." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Turnkey Industrial Contractor Pune Industrial EPC Execution"
  },
  {
    id: "fabrication-job-work",
    title: "Fabrication Job Work & Subcontracting",
    slug: "fabrication-job-work",
    seoTitle: "Fabrication Job Work Pune | Subcontractor & Work Subcontract",
    metaDescription: "High-capacity fabrication job work & industrial fabrication subcontractor in Pune. Subcontracting heavy steel fabrication, machine components & job work.",
    h1: "Fabrication Job Work & Subcontracting Services Pune",
    introduction: "Seeking a reliable fabrication subcontractor or job work partner in Pune? KFab Infra Project PVT LTD offers high-capacity steel fabrication job work, heavy fabrication subcontracting, and component outsourcing for OEMs, machine builders, and EPC companies.",
    whyChooseUs: "With 15,000 sq ft of shop floor space, automated CNC cutting, MIG/TIG/SAW welding, and strict dimensional inspection, we act as an extended manufacturing arm for your business.",
    applications: ["OEM Heavy Machinery Components", "Machine Frame & Base Subcontracting", "Structural Subcontract Work for EPCs", "Custom Batch Steel Fabrication"],
    process: ["NDA & Spec Document Review", "Material Verification & Traceability", "Precision CNC Cutting & Assembly", "Quality Inspection & Batch Dispatch"],
    advantages: ["High shop floor throughput capacity", "Strict adherence to client CAD tolerances", "NDA protected proprietary designs", "Competitive per-kg job work pricing"],
    materials: ["Mild Steel", "Stainless Steel", "Hardox / Wear Resistant Plates", "Structural Sections"],
    targetKeywords: [
      "Fabrication job work Pune",
      "Industrial fabrication job work Pune",
      "Steel fabrication job work Pune",
      "Structural fabrication job work Pune",
      "Heavy fabrication job work Pune",
      "Fabrication subcontractor Pune",
      "Industrial fabrication subcontractor Pune",
      "Fabrication outsourcing Pune"
    ],
    faq: [
      { question: "How is your job work pricing calculated?", answer: "We quote transparent job work rates on a per-kilogram (per-kg) or per-component basis based on raw material, cutting, welding, and finishing scope." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Fabrication Job Work Pune Subcontractor Steel Component"
  },
  {
    id: "industrial-maintenance",
    title: "Industrial Maintenance & Plant Shutdown",
    slug: "industrial-maintenance",
    seoTitle: "Industrial Maintenance Contractor Pune | Plant Shutdown Services",
    metaDescription: "Expert industrial maintenance contractor & plant shutdown contractor in Pune. Plant repairs, factory maintenance, structural repair & shutdown services.",
    h1: "Industrial Maintenance & Plant Shutdown Contractor Pune",
    introduction: "KFab Infra Project PVT LTD is an experienced industrial maintenance contractor in Pune providing scheduled plant shutdown maintenance, emergency structural repairs, factory maintenance, and pipeline refurbishment.",
    whyChooseUs: "We deploy dedicated shutdown crews equipped with portable welding plants, rigging tools, and safety gear to execute heavy plant repairs within tight shutdown windows.",
    applications: ["Sugar Mill Off-Season Maintenance", "Chemical Plant Annual Shutdown", "Cement Mill Structural Refurbishment", "Factory Roof & Column Repair"],
    process: ["Shutdown Scope Assessment", "Pre-fabrication of Spares & Structural Members", "24/7 Rapid Site Work Execution", "Testing & Line Commissioning"],
    advantages: ["24/7 shift work execution", "Rapid mobilization of certified welders", "Zero delay plant restart guarantee", "Comprehensive safety compliance"],
    materials: ["Structural Steel Sections", "Replacement Pipe Spools", "Wear Plates & Liners"],
    targetKeywords: [
      "Industrial maintenance contractor Pune",
      "Factory maintenance contractor Pune",
      "Plant maintenance contractor Pune",
      "Industrial shutdown contractor Pune",
      "Shutdown maintenance contractor Pune",
      "Industrial repair contractor Pune"
    ],
    faq: [
      { question: "Can KFab execute 24/7 round-the-clock maintenance during annual plant shutdowns?", answer: "Yes, we deploy two 12-hour shifts of skilled welders, fabricators, and riggers to complete shutdown maintenance on time." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Industrial Maintenance Contractor Pune Factory Shutdown Repair"
  },
  {
    id: "drawing-based-fabrication",
    title: "Fabrication as per Drawing",
    slug: "drawing-based-fabrication",
    seoTitle: "Fabrication as per Drawing Pune | Custom Blueprint Steel Works",
    metaDescription: "Custom steel fabrication as per drawing in Pune. Manufacturing heavy structural & industrial components from CAD blueprints & Tekla models.",
    h1: "Steel Fabrication as per Drawing & Specification Pune",
    introduction: "KFab Infra Project PVT LTD specializes in precision steel fabrication as per drawing in Pune. We convert your engineering blueprints, 2D CAD files, and 3D Tekla models into physical steel structures with exact dimensional accuracy.",
    whyChooseUs: "Our engineering review team conducts thorough drawing scrutiny to verify welding symbols, material grades, bend radii, and assembly tolerances prior to shop production.",
    applications: ["Custom Industrial Machinery Frames", "Special Purpose Heavy Skids", "Complex Structural Steel Assemblies", "Process Vessels from Engineering Specs"],
    process: ["CAD Blueprint & Spec Review", "Material Grade Certificate Verification", "CNC Cutting & Precision Machining", "Coordinate Measuring & QA Sign-off"],
    advantages: ["100% adherence to drawing tolerances", "Traceable material mill test certificates (MTC)", "Advanced CNC profile cutting", "Experienced engineering oversight"],
    materials: ["Mild Steel", "Stainless Steel", "Alloy Steel", "Carbon Steel"],
    targetKeywords: [
      "Fabrication as per drawing Pune",
      "Structural fabrication as per drawing Pune",
      "Fabrication from drawing Pune",
      "Steel fabrication as per drawing Pune",
      "Industrial fabrication project contractor"
    ],
    faq: [
      { question: "Can you assist with minor design modifications if our drawing has manufacturing limitations?", answer: "Yes, our in-house engineering team provides Design for Manufacturability (DFM) feedback to optimize cost and structural strength." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Fabrication as per Drawing Pune CAD Spec Manufacturing"
  },
  {
    id: "pressure-vessels",
    title: "Pressure Vessels Manufacturing",
    slug: "pressure-vessels",
    seoTitle: "Pressure Vessels Manufacturer Pune | ASME Standard Vessels",
    metaDescription: "High-quality pressure vessels manufacturing in Pune, India. ASME Section VIII standard pressure vessels, storage tanks & reactors for chemical & sugar mills.",
    h1: "Pressure Vessel Manufacturing Services Pune",
    introduction: "KFab Infra Project PVT LTD is a certified pressure vessel manufacturer in Pune. We fabricate ASME Section VIII standard pressure vessels, chemical reaction vessels, receivers, and high-pressure storage tanks.",
    whyChooseUs: "Our welding shop features submerged arc welding (SAW) booms, dish end spinning capabilities, and full NDT inspection rigs to ensure pressure containment reliability.",
    applications: ["Chemical & Petrochemical Industry", "Sugar & Distillery Processing", "Compressed Air Storage", "Power Plant Auxiliaries"],
    process: ["ASME / IS 2825 Thermal & Mechanical Design", "Plate Rolling & Longitudinal SAW Welding", "Dish End Alignment & Circumferential Welding", "100% RT & Hydrostatic Testing"],
    advantages: ["ASME Code compliance options", "100% Radiography weld inspection", "High pressure rating capacity", "Third Party Inspection (TPI) ready"],
    materials: ["SA 516 Gr 70 Carbon Steel", "SS 316L Stainless Steel", "SS 304 Stainless Steel"],
    targetKeywords: [
      "Pressure Vessel Manufacturer Pune",
      "pressure vessel fabrication Maharashtra",
      "chemical reaction vessels",
      "air receiver manufacturer Pune"
    ],
    faq: [
      { question: "What hydro-testing pressure levels do you test pressure vessels at?", answer: "We hydro-test vessels at 1.5x working design pressure in accordance with ASME Section VIII guidelines." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Pressure Vessel Manufacturer Pune ASME Vessel Fabrication"
  },
  {
    id: "sugar-plant-equipment",
    title: "Sugar Plant Equipment",
    slug: "sugar-plant-equipment",
    seoTitle: "Sugar Plant Equipment Manufacturer India | KFab Infra",
    metaDescription: "Leading sugar plant equipment manufacturer in India & Pune. Fabricating evaporators, vacuum pans, juice heaters, clarifiers & crystallizers.",
    h1: "Sugar Plant Equipment & Heavy Machinery Manufacturing",
    introduction: "KFab Infra Project PVT LTD is a premier sugar plant equipment manufacturer in India. We design and fabricate evaporators, vacuum pans, juice heaters, clarifiers, crystallizers, and sugar factory machinery.",
    whyChooseUs: "With 25+ years in Maharashtra's sugar belt, our heavy fabrication team builds high-thermal-efficiency juice processing machinery and heavy stainless steel bodies.",
    applications: ["Sugar Mills & Refineries", "Ethanol & Bio-Distilleries", "Co-generation Power Plants"],
    process: ["Thermal Design & Tube Layout", "Body Shell Fabrication & Rolling", "Tube Expansion & Welding", "Hydro-testing & Mirror Polishing"],
    advantages: ["High energy efficiency evaporators", "Stainless steel long-life construction", "Custom capacity sizing up to 3000 sq m", "Proven sugar recovery performance"],
    materials: ["SS 304 Stainless Steel", "Mild Steel Heavy Shells", "Brass / SS Heat Exchanger Tubes"],
    targetKeywords: [
      "Sugar plant equipment manufacturer india",
      "sugar industry fabrication India",
      "evaporator pan manufacturer Pune",
      "sugar mill heavy machinery"
    ],
    faq: [
      { question: "Do you supply complete evaporator bodies for sugar expansion projects?", answer: "Yes, we fabricate complete SS/MS falling film and rising film evaporators." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Sugar Plant Equipment Manufacturer India Evaporator Body"
  },
  {
    id: "conveyor-systems",
    title: "Conveyor Systems & Handling",
    slug: "conveyor-systems",
    seoTitle: "Conveyor Systems Manufacturer Pune | Belt & Screw Conveyors",
    metaDescription: "Leading conveyor system manufacturer in Pune. Belt conveyors, screw conveyors, bucket elevators & bulk material handling solutions for industries.",
    h1: "Conveyor Systems & Bulk Material Handling Pune",
    introduction: "KFab Infra Project PVT LTD is a leading conveyor system manufacturer in Pune. We fabricate heavy-duty belt conveyors, screw conveyors, bucket elevators, and bulk material handling systems for cement, sugar, power, and mining plants.",
    whyChooseUs: "Our material handling systems feature heavy-duty drive units, impact idlers, dust-proof enclosures, and robust structural gantries built for 24/7 continuous operation.",
    applications: ["Sugar Cane & Bagasse Handling", "Coal & Ash Handling in Power Plants", "Cement & Aggregate Transportation", "Chemical Granule Handling"],
    process: ["Capacity Calculation & Belt Selection", "Structural Truss & Idler Fabrication", "Drive System Assembly & Testing", "On-site Fitting & Alignment"],
    advantages: ["High-tonnage handling throughput", "Low maintenance pulley & idler design", "Dust-sealed enclosure options", "Turnkey incline gantry erection"],
    materials: ["IS 2062 Steel Framework", "EP Rubber Belting", "Hardox Liners"],
    targetKeywords: [
      "Conveyor System Manufacturer Pune",
      "conveyor system fabrication",
      "belt conveyor manufacturer Pune",
      "bucket elevator manufacturer India"
    ],
    faq: [
      { question: "Do you supply complete enclosed overhead conveyor galleries?", answer: "Yes, we design, fabricate, and erect enclosed overhead steel conveyor galleries spanning long distances." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Conveyor System Manufacturer Pune Industrial Belt Conveyor"
  },
  {
    id: "industrial-tanks",
    title: "Industrial Storage Tanks",
    slug: "industrial-tanks",
    seoTitle: "Industrial Storage Tanks Manufacturer Pune | MS & SS Tanks",
    metaDescription: "Premier industrial storage tank manufacturer in Pune. Fabrication & site construction of SS & MS storage tanks, silos & liquid chemical tanks.",
    h1: "Industrial Storage Tanks & Silos Manufacturer Pune",
    introduction: "KFab Infra Project PVT LTD manufactures heavy industrial storage tanks, chemical tanks, water storage tanks, and bulk storage silos in Pune.",
    whyChooseUs: "We build shop-fabricated vertical and horizontal tanks up to 50,000 liters as well as site-erected bulk storage tanks up to 5,000 KL following API 650 standards.",
    applications: ["Chemical & Oil Storage", "Sugar Molasses & Alcohol Storage", "Water & Effluent Treatment Plants", "Bulk Cement & Fly Ash Silos"],
    process: ["API 650 Tank Shell Design", "Plate Rolling & Edge Preparation", "Automatic Seam Welding", "Dye Penetrant & Hydro-testing"],
    advantages: ["API 650 & IS 803 compliance", "Site-erected large volume capacity", "Corrosion-resistant epoxy linings", "Leakproof double-welded seams"],
    materials: ["Mild Steel Plate", "Stainless Steel (SS 304 / 316)", "Coated Carbon Steel"],
    targetKeywords: [
      "industrial silos and hoppers",
      "tank fabrication services",
      "storage tanks manufacturer Pune",
      "API 650 storage tanks"
    ],
    faq: [
      { question: "Do you construct site-erected large storage tanks for liquids?", answer: "Yes, our tank erection crews roll plates on-site and execute vertical storage tanks up to 5,000 KL capacity." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Industrial Storage Tanks Manufacturer Pune Silo Tanks"
  },
  {
    id: "pipe-fabrication",
    title: "Pipe Fabrication & Spooling",
    slug: "pipe-fabrication",
    seoTitle: "Pipe Fabrication & Spooling Services Pune | KFab Infra",
    metaDescription: "High-precision pipe fabrication & spooling services in Pune. Workshop pipe spooling, MIG/TIG pipe welding & high-pressure line fabrication.",
    h1: "Pipe Fabrication & Spool Manufacturing Pune",
    introduction: "KFab Infra Project PVT LTD provides precision pipe fabrication, spooling, and header manufacturing in Pune for high-pressure fluid and gas transport systems.",
    whyChooseUs: "Our indoor pipe fabrication bay features motorized pipe rotators, automatic orbital welding machines, and hydro-testing rigs to deliver shop-tested spools ready for rapid site bolting.",
    applications: ["Boiler Feedwater Pipelines", "Refinery & Petrochemical Spools", "High Pressure Gas Manifolds", "Industrial Water Headers"],
    process: ["Spool Cut-Sheet Generation", "Pipe Cutting & Beveling", "TIG Root & Sub-Arc Fill Welding", "100% Hydro-testing & Painting"],
    advantages: ["Faster site installation", "Reduced field weld defect rates", "NDT radiography certified", "Wide pipe diameter range (1/2 inch to 60 inch)"],
    materials: ["Carbon Steel Seamless", "SS 304 / 316 Stainless Steel", "Alloy Steel (P91 / P22 / P11)"],
    targetKeywords: [
      "Pipe fabrication contractor Pune",
      "Industrial pipe fabricator Pune",
      "Piping fabrication and erection Pune",
      "Pipe erection contractor Pune"
    ],
    faq: [
      { question: "What pipe diameters can KFab Infra fabricate in your workshop?", answer: "We fabricate pipe spools ranging from 1/2 inch nominal bore up to 60 inch large diameter heavy wall pipes." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Pipe Fabrication & Spooling Services Pune KFab Infra"
  },
  {
    id: "heavy-engineering",
    title: "Heavy Engineering Works",
    slug: "heavy-engineering",
    seoTitle: "Heavy Engineering Company & Contractor Pune | KFab Infra",
    metaDescription: "Leading heavy engineering company & contractor in Pune. Custom heavy machinery, steel fabrication, pressure equipment & infrastructure components.",
    h1: "Heavy Engineering & Manufacturing Services Pune",
    introduction: "KFab Infra Project PVT LTD is a premier heavy engineering company in Pune delivering custom fabricated machinery, heavy industrial equipment, and large-scale steel infrastructure.",
    whyChooseUs: "Combining advanced heavy engineering design, high-capacity workshop machinery, and rigorous quality inspection, we execute challenging engineering projects with precision.",
    applications: ["Heavy Industrial Equipment", "Infrastructure Girders & Structures", "Mining & Cement Machinery Parts", "Custom Steel Assemblies"],
    process: ["Engineering Design & FEA Analysis", "Heavy Material Sourcing", "Heavy Machining & Fabrication", "Full Mock Assembly & Quality Approval"],
    advantages: ["End-to-end heavy engineering capability", "In-house FEA structural stress analysis", "Certified ISO 9001 quality assurance", "Proven track record with PSU & Private Majors"],
    materials: ["Heavy Steel Plate", "High Grade Alloy Steel", "Forged Steel Shafts & Rings"],
    targetKeywords: [
      "Heavy engineering fabrication Pune",
      "Heavy metal fabrication Pune",
      "heavy engineering fabrication Maharashtra",
      "industrial machinery manufacturing"
    ],
    faq: [
      { question: "Do you offer FEA structural load analysis for custom heavy engineering projects?", answer: "Yes, our engineering team performs Finite Element Analysis (FEA) to validate structural load capacity before fabrication." }
    ],
    image: "/assets/fabrication-demo.jpg",
    imageAlt: "Heavy Engineering Company Pune KFab Heavy Steel Plant"
  }
];
