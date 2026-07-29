import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Factory, Award, ChevronDown } from "lucide-react";
import heroVideo from "@/assets/hero video.mp4";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-slate-950">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/60" />
      </div>

      {/* Dynamic Floating Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/25 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16 md:py-32">
        <div className="max-w-4xl">
          {/* Active Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/40 bg-slate-900/80 backdrop-blur-md shadow-lg shadow-primary/10 mb-6 md:mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-xs md:text-sm text-slate-200 font-semibold tracking-wide flex items-center gap-1.5">
              <Award className="w-4 h-4 text-primary" />
              Established 1998 — 25+ Years of Heavy Industrial Fabrication
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sans font-extrabold text-white mb-6 leading-[1.08] tracking-tight"
          >
            Engineering Strength.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
              Fabricated with Precision.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-xl text-slate-300 max-w-2xl mb-8 md:mb-10 leading-relaxed font-normal"
          >
            Premier Tier-1 Heavy Industrial Fabrication & Engineering. Partnering with India's largest infrastructure, crane, paper, cement, sugar & energy conglomerates.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/services"
              className="group relative inline-flex items-center justify-center gap-3 text-base font-bold text-white bg-primary hover:bg-blue-600 px-8 py-4 rounded-xl shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Explore Our Capabilities</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold text-slate-100 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-primary/50 backdrop-blur-md px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
            >
              <span>Request a Technical Quote</span>
            </Link>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="mt-12 md:mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { value: "130,000+", label: "Sq Ft Heavy Workshop", icon: Factory },
              { value: "65 HP", label: "Power Capacity", icon: Sparkles },
              { value: "8", label: "Specialized Depts", icon: ShieldCheck },
              { value: "25+", label: "Years Industry Trust", icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-primary/50 p-4 md:p-5 rounded-2xl transition-all duration-300 group shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl md:text-3xl lg:text-4xl font-sans font-black text-primary group-hover:text-sky-300 transition-colors">
                    {stat.value}
                  </span>
                  <stat.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                </div>
                <div className="text-xs md:text-sm font-medium text-slate-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1.5 text-slate-400 text-xs font-semibold"
        >
          <span>SCROLL</span>
          <ChevronDown className="w-4 h-4 text-primary animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

