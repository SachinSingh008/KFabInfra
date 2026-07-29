import { motion } from "framer-motion";
import { Shield, Clock, Award, Users, CheckCircle2, Wrench, Sparkles } from "lucide-react";
import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import chooseUsImg from "@/assets/hogli.png";

const features = [
  {
    icon: Award,
    title: "25+ Years Industrial Mastery",
    description:
      "Proven execution on nuclear, metro rail, crane, and paper plant fabrication projects.",
  },
  {
    icon: Wrench,
    title: "Tailored Technical Solutions",
    description:
      "Custom precision fabrication designed exactly to complex engineering drawings.",
  },
  {
    icon: Shield,
    title: "Zero-Defect Quality Assurance",
    description:
      "NDT testing, ultrasonic & radiographic quality controls at every fabrication stage.",
  },
  {
    icon: Clock,
    title: "Strict Turnaround Deadlines",
    description:
      "Reliable, on-schedule project completion for heavy industrial installations.",
  },
  {
    icon: Users,
    title: "Multi-Disciplinary Workforce",
    description:
      "8 specialized departments housing 6G certified welders & structural engineers.",
  },
  {
    icon: CheckCircle2,
    title: "Long-term Tier-1 Partnerships",
    description:
      "Trusted long-term supplier relationships with India's largest infrastructure leaders.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4">
                <Sparkles className="w-4 h-4" />
                <span>The KFab Engineering Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold mb-6 tracking-tight">
                Why Heavy Industry Leaders
                <br />
                <span className="blue-text">Choose KFab Infra</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Our unyielding commitment to precision engineering, combined with 130,000+ sq. ft. of heavy workshop capacity, makes us the premier choice for major infrastructure conglomerates across India.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <motion.div 
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-4 rounded-2xl bg-card/80 dark:bg-slate-900/80 border border-border/80 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-sm">
                        <feature.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Image */}
          <ScrollReveal direction="right" className="relative">
            <div className="relative group">
              <div className="aspect-square overflow-hidden rounded-3xl border border-primary/20 shadow-2xl relative z-10">
                <img
                  src={chooseUsImg}
                  alt="Quality fabrication process"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Dynamic Floating Badge inside image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-white flex items-center justify-between shadow-xl">
                  <div>
                    <div className="text-sm font-bold text-sky-300">130,000+ Sq Ft</div>
                    <div className="text-xs text-slate-300">Heavy Industrial Workshop Floor</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                    25Y+
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-3xl blur-xl -z-10" />
              <div className="absolute -top-6 -right-6 w-40 h-40 border-2 border-primary/30 rounded-3xl -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

