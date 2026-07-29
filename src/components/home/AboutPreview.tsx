import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Factory, Award, CheckCircle2 } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import craneImg from "@/assets/crane 123.png";

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative group">
              <div className="overflow-hidden rounded-3xl border border-primary/20 shadow-2xl relative z-10">
                <img
                  src={craneImg}
                  alt="Industrial heavy workshop"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="absolute -bottom-6 -right-6 bg-slate-900/90 text-white w-36 h-36 rounded-3xl shadow-2xl hidden md:flex flex-col items-center justify-center text-center p-4 border-2 border-primary/40 backdrop-blur-md z-20"
              >
                <div className="text-3xl font-sans font-black text-primary mb-0.5">
                  25+
                </div>
                <div className="text-xs text-slate-200 font-semibold leading-tight">Years Industrial<br/>Excellence</div>
              </motion.div>

              {/* Decorative Accent Frame */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-primary/40 rounded-3xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <ScrollReveal direction="right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Pioneering Heavy Industrial Fabrication</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold mb-6 tracking-tight">
              Trusted Partner in
              <br />
              <span className="blue-text">Heavy Structural Fabrication</span>
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Established in 1998 with a vision to deliver world-class heavy engineering solutions, KFab Infra Project PVT LTD has grown into one of India's premier fabrication powerhouses.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Our expansive 130,000+ sq. ft. facility houses 8 specialized departments equipped to execute nuclear, metro rail, crane, power, and process plant equipment to rigorous international codes.
            </p>

            {/* Quick Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { value: "130,000+", label: "Sq Ft Workshop" },
                { value: "65 HP", label: "Power Grid" },
                { value: "8", label: "Depts & Testing Labs" },
                { value: "25+", label: "Years Trust" },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col border-l-2 border-primary pl-4 py-1.5 bg-secondary/40 rounded-r-xl">
                  <span className="text-xl md:text-2xl font-sans font-black text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2.5 text-base font-bold text-primary hover:text-blue-600 group transition-all"
            >
              <span>Discover Our Full Journey & Infrastructure</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

