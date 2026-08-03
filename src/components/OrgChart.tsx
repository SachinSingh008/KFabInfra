import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCheck,
  Building2,
  HardHat,
  Hammer,
  Flame,
  Calculator,
  Briefcase,
  MapPin,
  Users,
  ShieldCheck,
  Wrench,
  Award,
  FileCheck2,
  CalendarDays,
  ChevronDown,
  Factory,
  CheckCircle2,
  ClipboardList
} from "lucide-react";

import pramodSinghImg from "@/assets/pramod_singh.png";
import ajeetSinghImg from "@/assets/ajeet_singh.png";
import abhishekSinghImg from "@/assets/abhishek_singh.png";
import riteshImg from "@/assets/Ritesh.jpeg";
import subhashImg from "@/assets/shubhash Kumar.png";
import awdeshImg from "@/assets/Awdesh Kumar.png";

interface MemberDetail {
  name: string;
  role: string;
  department?: string;
  location?: string;
  image?: string;
  initials?: string;
  skills?: string[];
  responsibilities?: string[];
}

export const OrgChart: React.FC = () => {
  const [activeMember, setActiveMember] = useState<MemberDetail | null>(null);

  // Top Managing Director
  const mdNode = {
    name: "Pramod Singh",
    role: "Founder & Managing Director",
    department: "Executive Management & Board of Directors",
    image: pramodSinghImg,
    skills: ["Executive Leadership", "Heavy Fabrication Strategy", "Corporate Governance", "EPC Project Direction"],
    responsibilities: [
      "Guiding overall corporate strategy, expansion, and high-level client relations",
      "Pioneering KFab Infra's quality standards and compliance frameworks since 1998",
      "Approving major capital expenditure, enterprise investments, and joint ventures"
    ]
  };

  // 3 Directors
  const directors = [
    {
      name: "Abhishek Singh",
      role: "Director – Finance & Administration",
      department: "Finance, Commercial & General Administration",
      image: abhishekSinghImg,
      skills: ["Financial Strategy", "Fiscal Risk Governance", "Commercial Contracts", "Corporate Administration"],
      responsibilities: [
        "Directing corporate financial planning, capital budgeting, and banking relations",
        "Managing enterprise audit, tax compliance, and commercial contract negotiations",
        "Overseeing general administration, corporate legal affairs, and store accounting"
      ],
      subFunctions: ["Corporate Finance", "Fiscal Risk Governance", "Accounts & Store Logistics"]
    },
    {
      name: "Ajeet Singh",
      role: "Director – Business Development",
      department: "Business Development & Commercial",
      image: ajeetSinghImg,
      skills: ["Client Relations", "Tendering & Bidding", "Project Estimation", "Procurement & Vendor Dev"],
      responsibilities: [
        "Spearheading international & domestic business development and EPC client acquisition",
        "Directing commercial proposals, tender submissions, and estimation workflows",
        "Managing strategic vendor pre-qualification and supply chain partner networks"
      ],
      subFunctions: ["Client Relations", "Tendering & Proposals", "Estimation", "Procurement & Vendor Dev"]
    },
    {
      name: "Ritesh Singh",
      role: "Director – Engineering & Projects",
      department: "Engineering, Planning & Project Execution",
      image: riteshImg,
      skills: ["Planning & Scheduling", "Engineering Documentation", "CAD/CAM Integration", "Project Execution"],
      responsibilities: [
        "Overseeing project engineering designs, structural detailing, and CAD/CAM models",
        "Directing master project planning, baseline scheduling, and progress monitoring",
        "Managing engineering documentation, technical submittals, and fabrication drawings"
      ],
      subFunctions: ["Planning & Scheduling", "Engineering Documentation", "CAD / Structural Detailing"]
    }
  ];

  // Accounts & Store Manager (Under Finance & Administration)
  const accountsStoreManager = {
    name: "Mr. Avinash Pawar",
    role: "Accountant & Store Manager",
    department: "Finance & Accounts / Stores Division",
    initials: "AP",
    skills: ["Store Logistics", "Financial Accounting", "Material Inventory", "Purchase Auditing"],
    responsibilities: [
      "Overseeing daily store inventories, raw material intake, and stock ledgers",
      "Managing shop-floor accounts, billing, and vendor payment clearing",
      "Maintaining inventory records for steel plates, beams, and welding consumables"
    ]
  };

  // Production & Operations Department Supervisors
  const productionSupervisors = [
    {
      name: "Santosh Pawar",
      role: "Fabrication Supervisor",
      department: "Production & Operations",
      initials: "SP",
      skills: ["Fit-Up Inspection", "Structural Assembly", "Job Scheduling"]
    },
    {
      name: "Jitendra Singh",
      role: "Erection Supervisor",
      department: "Production & Operations",
      initials: "JS",
      skills: ["Heavy Erection", "Safety Protocol", "Crane Operations"]
    },
    {
      name: "Roshan Ali",
      role: "Workshop Supervisor",
      department: "Production & Operations",
      initials: "RA",
      skills: ["Workforce Management", "Machinery Ops", "Material Flow"]
    },
    {
      name: "Vikas Yadav",
      role: "QA/QC & HSE Supervisor",
      department: "Production & Operations",
      initials: "VY",
      skills: ["NDT Testing", "Weld Inspection", "HSE & ISO Compliance"]
    }
  ];

  // Project Execution Team (Resident Site Engineers - Visually Separate)
  const residentSiteEngineers = [
    {
      name: "Awdesh Kumar",
      role: "Resident Site Engineer",
      location: "Bhilai Project Site",
      department: "Project Execution Team",
      image: awdeshImg,
      skills: ["Site Fit-up", "Erection Quality", "HSE Compliance", "Field Assembly"],
      responsibilities: [
        "Leading site erection & structural assembly at Bhilai project location",
        "Enforcing safety standards, tolerances, and inspection checkpoints",
        "Coordinating with client site representatives and technical inspectors"
      ]
    },
    {
      name: "Subhash Kumar",
      role: "Resident Site Engineer",
      location: "Hubli Project Site",
      department: "Project Execution Team",
      image: subhashImg,
      skills: ["On-Site Erection", "Bridge Alignment", "Tolerance Verification", "Site Safety"],
      responsibilities: [
        "Managing high-precision site erection at Hubli site location",
        "Directing field fitters and assembly teams for zero-defect positioning",
        "Maintaining structural alignment and site compliance certification"
      ]
    }
  ];

  // Skilled Workforce & Engineering Team (Personnel Counts Preserved)
  const workforce = {
    title: "Skilled Fabrication & Engineering Team",
    subtext: "Welders : 1G, 3G, 6G | Fitters | Riggers | Cutter Man & Helpers | Engineering Interns",
    totalCount: "82 Personnel",
    categories: [
      { name: "Welders (1G, 3G, 6G)", count: "8", details: "Certified SMAW, TIG & MIG Welders", icon: Flame },
      { name: "Fitters", count: "10", details: "Precision Structural Assembly Fitters", icon: Hammer },
      { name: "Riggers", count: "12", details: "Heavy Lifting & Erection Rigging Specialists", icon: ShieldCheck },
      { name: "Cuttermen", count: "16", details: "Oxy-Fuel & Gas Plasma Cutterman", icon: Wrench },
      { name: "Machine Operators", count: "4", details: "CNC Machine & Crane Operators", icon: HardHat },
      { name: "Engineers & Interns", count: "7", details: "Engineering Interns & Site Support", icon: UserCheck },
      { name: "Helpers", count: "25", details: "Workshop & Shop-Floor Support Staff", icon: Users }
    ]
  };

  return (
    <div className="w-full py-12 px-3 sm:px-6 lg:px-8 bg-secondary/40 rounded-3xl border border-primary/20 shadow-2xl relative overflow-hidden backdrop-blur-sm">
      {/* Background Decorative Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-3">
          EPC Company Standard Governance
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground tracking-tight">
          Organization Hierarchy & Management Structure
        </h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto mt-2">
          Enterprise operational hierarchy configured for vendor qualification with leading EPC, Oil & Gas, and Heavy Fabrication contractors.
        </p>
      </div>

      {/* Main Structure Chart Canvas */}
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">

        {/* ================= LEVEL 1: MANAGING DIRECTOR ================= */}
        <div className="flex flex-col items-center relative group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveMember(mdNode)}
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-primary p-1 bg-background shadow-2xl hover:shadow-primary/40 transition-all cursor-pointer relative z-20"
          >
            <img
              src={mdNode.image}
              alt={mdNode.name}
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute -bottom-1 right-1 bg-primary text-slate-950 p-1.5 rounded-full shadow-lg">
              <Award className="w-4 h-4" />
            </div>
          </motion.div>
          <div className="mt-3 text-center z-20">
            <h3 className="text-lg md:text-xl font-serif font-bold text-foreground">{mdNode.name}</h3>
            <p className="text-xs md:text-sm font-semibold text-primary">{mdNode.role}</p>
          </div>

          {/* Vertical Stem Line Down */}
          <div className="w-0.5 h-10 bg-primary shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
          <div className="w-3 h-3 rounded-full bg-primary border-2 border-background shadow-md -mt-1.5 z-20" />
        </div>

        {/* ================= LEVEL 2: DIRECTORS TIER (ABHISHEK, AJEET, RITESH) ================= */}
        <div className="w-full relative flex flex-col items-center">
          {/* Horizontal Connector Bus Line */}
          <div className="w-full max-w-[850px] relative h-8 hidden md:block">
            {/* Top entry from MD */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-primary" />
            
            {/* Horizontal Spanner Bar */}
            <div className="absolute top-4 left-[16.66%] right-[16.66%] h-0.5 bg-primary shadow-[0_0_8px_rgba(212,175,55,0.5)]" />

            {/* Left drop line to Director Finance */}
            <div className="absolute top-4 left-[16.66%] w-0.5 h-4 bg-primary" />
            <div className="absolute top-8 left-[16.66%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary z-20" />

            {/* Center drop line to Director BD */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-primary" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary z-20" />

            {/* Right drop line to Director Engineering */}
            <div className="absolute top-4 right-[16.66%] w-0.5 h-4 bg-primary" />
            <div className="absolute top-8 right-[16.66%] translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary z-20" />
          </div>

          {/* 3 Executive Directors Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-start mt-2 md:mt-0">
            {directors.map((dir) => (
              <div key={dir.name} className="flex flex-col items-center relative">
                <motion.div
                  whileHover={{ scale: 1.03, y: -3 }}
                  onClick={() => setActiveMember(dir)}
                  className="card-premium p-4 rounded-2xl border border-primary/30 hover:border-primary flex flex-col items-center text-center cursor-pointer transition-all duration-300 w-full max-w-[270px] bg-background/95 shadow-xl relative z-10"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-primary/50 p-0.5 overflow-hidden mb-3 relative shadow-md">
                    <img
                      src={dir.image}
                      alt={dir.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h4 className="font-serif font-bold text-base text-foreground leading-snug">{dir.name}</h4>
                  <span className="text-xs font-semibold text-primary mt-1 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                    {dir.role}
                  </span>
                  <p className="text-[11px] text-muted-foreground mt-2 line-clamp-2">{dir.department}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= LEVEL 3: DEPARTMENTAL FUNCTIONAL BLOCKS ================= */}
        <div className="w-full mt-6 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
            
            {/* LEFT COLUMN: Accounts & Stores (Under Director – Finance & Admin) */}
            <div className="lg:col-span-3 flex flex-col justify-start items-center lg:items-end pt-2">
              <motion.div
                whileHover={{ scale: 1.04 }}
                onClick={() => setActiveMember(accountsStoreManager)}
                className="card-premium p-4 rounded-2xl border-2 border-primary/40 hover:border-primary w-full max-w-[250px] cursor-pointer bg-background/95 shadow-xl relative"
              >
                <div className="absolute -top-3 left-4 bg-primary text-slate-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  Finance & Admin Wing
                </div>
                <div className="flex items-center gap-3 mb-2 mt-1">
                  <div className="w-12 h-12 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center text-primary font-bold text-sm shrink-0 shadow-md">
                    {accountsStoreManager.initials}
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-sm text-foreground">{accountsStoreManager.name}</h5>
                    <p className="text-[11px] font-semibold text-primary">{accountsStoreManager.role}</p>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-border/60 text-[11px] text-muted-foreground flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-primary shrink-0" />
                  <span>Accounts & Store Logistics</span>
                </div>
              </motion.div>
            </div>

            {/* CENTER COLUMN: Business Development & Commercial Main Box */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="w-full bg-gradient-to-br from-secondary via-background to-secondary border-2 border-primary rounded-2xl p-6 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full pointer-events-none" />
                <div className="flex items-center justify-center gap-2 mb-2 text-primary font-serif font-bold text-lg md:text-xl text-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <h3>Business Development & Commercial</h3>
                </div>
                <p className="text-xs text-muted-foreground text-center mb-5 font-medium">
                  Commercial operations, tendering, estimation, and vendor qualification.
                </p>

                <div className="grid grid-cols-2 gap-3 text-center text-xs font-semibold">
                  <div className="p-3 rounded-xl bg-background/80 border border-primary/20 flex items-center justify-center gap-2 text-foreground hover:border-primary/60 transition-colors shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    Client Relations
                  </div>
                  <div className="p-3 rounded-xl bg-background/80 border border-primary/20 flex items-center justify-center gap-2 text-foreground hover:border-primary/60 transition-colors shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    Tendering & Proposals
                  </div>
                  <div className="p-3 rounded-xl bg-background/80 border border-primary/20 flex items-center justify-center gap-2 text-foreground hover:border-primary/60 transition-colors shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    Estimation
                  </div>
                  <div className="p-3 rounded-xl bg-background/80 border border-primary/20 flex items-center justify-center gap-2 text-foreground hover:border-primary/60 transition-colors shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    Procurement & Vendor Dev
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Project Execution Team (Resident Site Engineers - Deployed On-Site) */}
            <div className="lg:col-span-3 flex flex-col justify-center items-center lg:items-start pt-2 gap-3">
              <div className="w-full max-w-[250px]">
                <div className="text-center lg:text-left mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                    Project Execution Team
                  </span>
                  <p className="text-[10px] text-muted-foreground mt-1 font-medium leading-tight">
                    Site Deployed Resident Engineers at Client Infrastructure Locations
                  </p>
                </div>

                <div className="space-y-3">
                  {residentSiteEngineers.map((engineer) => (
                    <motion.div
                      key={engineer.name}
                      whileHover={{ scale: 1.04 }}
                      onClick={() => setActiveMember(engineer)}
                      className="card-premium p-3 rounded-2xl border-2 border-primary/40 hover:border-primary w-full flex items-center gap-3 cursor-pointer bg-background/95 shadow-xl relative"
                    >
                      <div className="w-11 h-11 rounded-full border-2 border-primary/40 overflow-hidden shrink-0 shadow-md">
                        <img src={engineer.image} alt={engineer.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-serif font-bold text-xs text-foreground truncate">{engineer.name}</h5>
                        <p className="text-[10px] text-primary font-semibold truncate">{engineer.role}</p>
                        <div className="flex items-center gap-1 text-[9px] text-muted-foreground mt-0.5 font-medium">
                          <MapPin className="w-3 h-3 text-primary shrink-0" />
                          <span className="truncate">{engineer.location}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Stem Line Down to Production & Operations */}
        <div className="flex flex-col items-center my-5">
          <div className="w-0.5 h-10 bg-primary shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
          <div className="w-3 h-3 rounded-full bg-primary border-2 border-background shadow-md -mt-1.5 z-20" />
        </div>

        {/* ================= LEVEL 4: PRODUCTION & OPERATIONS DEPARTMENT (WORKSHOP & PRODUCTION) ================= */}
        <div className="w-full max-w-4xl bg-gradient-to-r from-secondary/90 via-background to-secondary/90 border-2 border-primary/40 rounded-[36px] p-6 md:p-8 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary px-4 py-1 rounded-full bg-primary/10 border border-primary/30 mb-1">
              <Factory className="w-4 h-4 text-primary" /> Production & Operations Department
            </div>
            <h4 className="text-lg font-serif font-bold text-foreground mt-1">Workshop Fabrication, Assembly & HSE Management</h4>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {productionSupervisors.map((sup) => (
              <motion.div
                key={sup.name}
                whileHover={{ scale: 1.05, y: -2 }}
                onClick={() => setActiveMember(sup)}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-secondary/80 border border-primary/20 hover:border-primary cursor-pointer transition-all shadow-md"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/25 to-primary/5 border-2 border-primary/50 flex items-center justify-center text-primary font-bold text-base mb-2 shadow-lg">
                  {sup.initials}
                </div>
                <h5 className="font-serif font-bold text-xs md:text-sm text-foreground">{sup.name}</h5>
                <p className="text-[10px] md:text-xs text-primary font-semibold mt-0.5">{sup.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stem Line Down to Workforce */}
        <div className="flex flex-col items-center my-5">
          <div className="w-0.5 h-10 bg-primary shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
          <div className="w-3 h-3 rounded-full bg-primary border-2 border-background shadow-md -mt-1.5 z-20" />
        </div>

        {/* ================= LEVEL 6: SKILLED WORKFORCE & ENGINEERING TEAM ================= */}
        <div className="w-full max-w-4xl bg-gradient-to-b from-secondary to-background border-2 border-primary/40 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 border-b border-border/70 pb-4">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0 shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-foreground">{workforce.title}</h3>
                <p className="text-xs text-primary font-semibold mt-0.5">{workforce.subtext}</p>
              </div>
            </div>
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary whitespace-nowrap shadow-sm">
              82 Total Technical Personnel
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {workforce.categories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div key={cat.name} className="p-3.5 rounded-2xl bg-background/90 border border-border/70 flex flex-col items-start gap-1.5 hover:border-primary/40 transition-colors shadow-sm relative overflow-hidden">
                  <div className="flex items-center justify-between w-full">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-950 px-2.5 py-0.5 rounded-full bg-primary shadow-sm">
                      {cat.count} Personnel
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-xs text-foreground mt-1">{cat.name}</h4>
                  <p className="text-[10px] text-muted-foreground leading-snug">{cat.details}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <div className="mt-8 text-center text-xs text-muted-foreground font-medium italic border-t border-border/60 pt-4 w-full max-w-4xl">
          Note: Organization structure may be modified based on project requirements and business needs.
        </div>

      </div>

      {/* Member Details Modal / Drawer */}
      <AnimatePresence>
        {activeMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMember(null)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-secondary border-2 border-primary/40 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative overflow-hidden"
            >
              <button
                onClick={() => setActiveMember(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-sm p-2 rounded-full hover:bg-background/50 transition-colors"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-6">
                {activeMember.image ? (
                  <img
                    src={activeMember.image}
                    alt={activeMember.name}
                    className="w-20 h-20 rounded-full border-2 border-primary object-cover shrink-0 shadow-lg"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold text-xl shrink-0 shadow-lg">
                    {activeMember.initials || activeMember.name.slice(0, 2).toUpperCase()}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground">{activeMember.name}</h3>
                  <p className="text-sm font-semibold text-primary">{activeMember.role}</p>
                  {activeMember.location && (
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground mt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-primary" /> {activeMember.location}
                    </span>
                  )}
                </div>
              </div>

              {activeMember.department && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Division</h4>
                  <p className="text-sm text-foreground font-semibold">{activeMember.department}</p>
                </div>
              )}

              {activeMember.skills && activeMember.skills.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Core Competencies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeMember.skills.map((skill) => (
                      <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeMember.responsibilities && activeMember.responsibilities.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Key Responsibilities</h4>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {activeMember.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrgChart;
