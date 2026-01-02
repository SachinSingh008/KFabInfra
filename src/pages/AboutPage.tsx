import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Zap } from "lucide-react";

const milestones = [
  { year: "2004", title: "Foundation", description: "Kumar Fabricators established in Jejuri, Pune" },
  { year: "2008", title: "Expansion", description: "Doubled capacity with new machinery" },
  { year: "2013", title: "Major Projects", description: "Started serving metro & railway sectors" },
  { year: "2018", title: "Milestone", description: "Completed 300+ industrial projects" },
  { year: "2024", title: "20 Years", description: "Celebrating two decades of excellence" },
];

const values = [
  { icon: Target, title: "Precision", description: "Every weld, every cut, engineered to perfection" },
  { icon: Eye, title: "Integrity", description: "Transparent dealings and honest partnerships" },
  { icon: Heart, title: "Commitment", description: "Dedicated to exceeding client expectations" },
  { icon: Award, title: "Excellence", description: "Continuous pursuit of the highest standards" },
];

const workforceData = [
  { role: "Helpers", percentage: 23 },
  { role: "Welders", percentage: 17 },
  { role: "Supervisors", percentage: 13 },
  { role: "Engineers", percentage: 13 },
  { role: "Painters", percentage: 10 },
  { role: "Cutters", percentage: 9 },
  { role: "Fitters", percentage: 8 },
  { role: "Others", percentage: 7 },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-charcoal text-creme relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-504917595217-d4dc5ebb6122?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
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
              <span className="gold-text">Excellence Since 2004</span>
            </h1>
            <p className="text-lg text-creme/70 leading-relaxed">
              Two decades of engineering precision and unwavering commitment to quality
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
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
                    alt="Our manufacturing facility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-lg">
                  <div className="text-4xl font-serif font-bold text-charcoal">500+</div>
                  <div className="text-sm text-charcoal/70">Projects Completed</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="divider-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2004 by visionary engineers, Kumar Fabricators began
                as a focused workshop with a big dream – to deliver world-class heavy
                fabrication solutions that power India's industrial growth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Today, we stand as a testament to that vision. Our 15,000 sq ft
                state-of-the-art facility in Jejuri, Pune houses cutting-edge machinery
                operated by skilled craftsmen who bring decades of expertise to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From sugar mills to metro rail infrastructure, our fabrications form
                the backbone of industries that drive the nation's economy.
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
            subtitle="Guided by purpose, driven by excellence"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="card-premium p-8 h-full">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide our clients with superior-quality fabricated products that meet 
                  their specific requirements. We aim to deliver innovative solutions while 
                  adhering to the highest industry standards, ensuring customer satisfaction, 
                  and building long-term relationships.
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
                  To be India's most trusted heavy fabrication partner, recognized
                  for our engineering excellence, innovation, and unwavering
                  commitment to quality across Sugar, Cement, Paper, Chemical
                  & Handling Equipment industries.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-charcoal text-creme">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Our Journey"
            subtitle="Milestones that define our legacy"
            light
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
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-creme/60">{milestone.description}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-charcoal -translate-x-1/2" />

                  {/* Spacer for desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workforce Distribution */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Our Workforce"
            subtitle="8 specialized departments working together"
          />

          <div className="max-w-3xl mx-auto">
            <StaggerContainer className="space-y-4">
              {workforceData.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm font-medium text-foreground">
                      {item.role}
                    </div>
                    <div className="flex-1 h-8 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-primary rounded-full flex items-center justify-end pr-3"
                      >
                        <span className="text-xs font-medium text-charcoal">
                          {item.percentage}%
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
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
              { value: "8", label: "Departments" },
              { value: "65", label: "HP Power Supply" },
              { value: "15,000", label: "Sq Ft Facility" },
              { value: "20+", label: "Years Experience" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-2">
                    {stat.value}
                  </div>
                  <div className="text-charcoal/70">{stat.label}</div>
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