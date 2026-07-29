import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { PAGE_SEO } from "@/lib/seo.config";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Zap } from "lucide-react";
import teamIllustration from "@/assets/team_illustration.png";
import teamImg from "@/assets/team.png";
import metroGiderImg from "@/assets/metro gider.png";
import pramodSinghImg from "@/assets/pramod_singh.png";
import ajeetSinghImg from "@/assets/ajeet_singh.png";
import abhishekSinghImg from "@/assets/abhishek_singh.png";
import riteshImg from "@/assets/Ritesh.jpeg";
import subhashImg from "@/assets/shubhash Kumar.png";
import awdeshImg from "@/assets/Awdesh Kumar.png";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Area
} from "recharts";

const milestones = [
  { year: "1998", title: "Foundation", description: "KFab Infra Project PVT LTD established in Jejuri, Pune" },
  { year: "2005", title: "Expansion", description: "Doubled capacity with new machinery" },
  { year: "2012", title: "Major Projects", description: "Started serving metro & railway sectors" },
  { year: "2018", title: "Milestone", description: "Completed 300+ industrial projects" },
  { year: "2024", title: "25+ Years", description: "Celebrating over a quarter century of excellence" },
];

const values = [
  { icon: Target, title: "Precision", description: "Every weld, every cut, engineered to perfection" },
  { icon: Eye, title: "Integrity", description: "Transparent dealings and honest partnerships" },
  { icon: Heart, title: "Commitment", description: "Dedicated to exceeding client expectations" },
  { icon: Award, title: "Excellence", description: "Continuous pursuit of the highest standards" },
];

const workforceData = [
  { name: "Helpers", value: 23, color: "#D4AF37" },
  { name: "Welders", value: 17, color: "#CD7F32" },
  { name: "Supervisors", value: 13, color: "#1E3A8A" },
  { name: "Engineers", value: 13, color: "#3B82F6" },
  { name: "Painters", value: 10, color: "#10B981" },
  { name: "Cutters", value: 9, color: "#F59E0B" },
  { name: "Fitters", value: 8, color: "#6366F1" },
  { name: "Others", value: 7, color: "#64748B" },
];

const productionData = [
  { year: "2019", tonnage: 100 },
  { year: "2020", tonnage: 55 },
  { year: "2021", tonnage: 50 },
  { year: "2022", tonnage: 90 },
  { year: "2023", tonnage: 115 },
  { year: "2024", tonnage: 130 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const value = payload[0].value;
    
    let labelText = "";
    if (data.sector) {
      labelText = `${data.sector}: ${value}%`;
    } else if (data.name) {
      labelText = `${data.name}: ${value}%`;
    } else {
      labelText = `${payload[0].payload.year || label || "Production"}: ${value} Tons`;
    }

    return (
      <div className="bg-background border border-border p-3 rounded-lg shadow-xl text-foreground text-xs">
        <p className="text-primary font-bold">{labelText}</p>
      </div>
    );
  }
  return null;
};

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO {...PAGE_SEO.about} breadcrumbs={[{ name: "Home", url: "https://kfabinfraproject.site" }, { name: "About", url: "https://kfabinfraproject.site/about" }]} />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary text-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src={metroGiderImg}
            alt="Metro girder fabrication"
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
              Crafting Industrial
              <br />
              <span className="text-primary">Excellence Since 1998</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over two decades of engineering precision and unwavering commitment to quality
              have made us one of India's most trusted names in heavy fabrication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-[24px] overflow-hidden shadow-[15px_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[20px_20px_45px_rgba(0,0,0,0.4)] transition-all duration-300">
                  <img
                    src={teamImg}
                    alt="Our professional team"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Badge */}
                <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-[24px] shadow-lg">
                  <div className="text-4xl font-serif font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-900/70">Projects Completed</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="divider-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                It started in 1998 with a simple workbench, a set of welding torches, and a conviction: 
                that heavy industrial fabrication demands both absolute precision and a craftsman's pride. 
                KFab Infra Project PVT LTD began as a small, focused workshop in Jejuri, Pune. 
                We didn't set out to be the largest, but we resolved to be the most reliable.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Today, that single workbench has grown into a 15,000 sq. ft. state-of-the-art facility. 
                Yet, our core remains unchanged. We combine advanced machinery with the hand-calibrated 
                skill of veteran fabricators. Every column, silo, and girder we build is a testament 
                to honest work, engineered to withstand the rigorous demands of India's core infrastructure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From heavy-duty sugarcane vessels to critical metro girders, our work stands quietly 
                but strongly at the center of the industries that build the nation.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Mission & Vision"
            subtitle="Driven by hand-crafted precision, guided by long-term trust"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="card-premium p-8 h-full">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver heavy fabrication work that engineering teams can trust without hesitation. 
                  We build to last, fusing rigorous quality standards with flexible, custom engineering. 
                  We don't just supply metal structures—we support our clients' daily operations through 
                  reliability, technical transparency, and a commitment to keeping our promises.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="card-premium p-8 h-full">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To remain India’s premier choice for complex and heavy fabrication, recognized 
                  not just for our machinery, but for the integrity of our welds and the longevity 
                  of our partnerships. We aim to support the next generation of sugar, cement, power, 
                  and infrastructure projects with honest craftsmanship and advanced engineering.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Owners / Leadership Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Our Leadership"
            subtitle="The visionaries and hands-on managers driving KFab Infra's success"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {[
              {
                name: "Pramod Singh",
                role: "Founder",
                image: pramodSinghImg,
                description: "Over 25 years of leadership in heavy engineering and structural fabrication, driving KFab Infra's core vision, quality benchmarks, and strategic growth since 1998."
              },
              {
                name: "Ajeet Singh",
                role: "Marketing & Relationship Manager",
                image: ajeetSinghImg,
                description: "Spearheads client acquisitions, key account management, and strategic market expansion for large-scale industrial and infrastructure projects."
              },
              {
                name: "Abhishek Singh",
                role: "CFO",
                image: abhishekSinghImg,
                description: "Manages corporate financial strategy, commercial contracts, budget allocation, and fiscal operations to ensure sustainable enterprise growth."
              },
              {
                name: "Ritesh Singh",
                role: "CTO",
                image: riteshImg,
                description: "Drives digital transformation, technology integration, and automated project workflows to elevate engineering precision and operational efficiency."
              },
              {
                name: "Subhash Kumar",
                role: "Site Engineer",
                image: subhashImg,
                description: "Oversees on-site structural erection, safety protocols, and precision alignment for heavy bridge and industrial infrastructure projects."
              },
              {
                name: "Awdesh Kumar",
                role: "Site Engineer",
                image: awdeshImg,
                description: "Directs field assembly, fit-up inspections, and site compliance to deliver zero-defect installation for high-capacity steel structures."
              }
            ].map((owner, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="card-premium p-8 rounded-[24px] text-center flex flex-col h-full items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mb-6 relative">
                    <img
                      src={owner.image}
                      alt={owner.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                    {owner.name}
                  </h3>
                  <div className="text-primary font-semibold text-sm mb-4">
                    {owner.role}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {owner.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Our Journey"
            subtitle="Milestones that define our legacy"
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2" />

            {milestones.map((milestone, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              >
                <div
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} ml-12 md:ml-0`}>
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2 text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-secondary -translate-x-1/2" />

                  {/* Spacer for desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Metrics & Workforce */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-3 md:px-4 lg:px-8">
          <SectionHeader
            title="Operational Metrics & Workforce"
            subtitle="A data-driven look at our team composition, project sectors, and production growth"
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-12 max-w-4xl mx-auto">
            {/* Workforce Donut Chart */}
            <ScrollReveal>
              <div className="card-premium p-6 flex flex-col h-[400px] rounded-[24px]">
                <h3 className="text-lg font-serif font-semibold mb-4 text-center">Workforce Distribution</h3>
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={workforceData}
                        cx="50%"
                        cy="45%"
                        innerRadius={55}
                        outerRadius={85}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {workforceData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                      <Legend 
                        layout="horizontal" 
                        verticalAlign="bottom" 
                        align="center"
                        iconType="circle"
                        iconSize={6}
                        wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ScrollReveal>

            {/* Production Growth Bar Chart */}
            <ScrollReveal delay={0.1}>
              <div className="card-premium p-6 flex flex-col h-[400px] rounded-[24px]">
                <h3 className="text-lg font-serif font-semibold mb-4 text-center">Annual Fabrication Output (Tonnes)</h3>
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={productionData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="year" stroke="#888888" fontSize={10} />
                      <YAxis stroke="#888888" fontSize={10} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="tonnage" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Tonnage" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Our Core Values"
            subtitle="Principles that guide every project we undertake"
          />

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="card-premium p-6 text-center h-full"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "8", label: "Specialized Departments" },
              { value: "65+", label: "Advanced Equipment" },
              { value: "15,000", label: "Sq Ft Facility" },
              { value: "25+", label: "Years Experience" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-900/70">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;