import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroVideo from "@/assets/hero video.mp4";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-[hsl(210_50%_15%)]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 md:px-4 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 border border-primary/50 bg-primary/20 backdrop-blur-sm mb-4 md:mb-6 lg:mb-8"
          >
            <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-primary" />
            <span className="text-xs md:text-sm text-white font-medium">
              Since 1998 - 25+ Years of Engineering Excellence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold text-white mb-4 md:mb-6 leading-tight"
          >
            Engineering Strength.
            <br />
            <span className="blue-text">Fabricated with Precision.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mb-6 md:mb-8 lg:mb-10 leading-relaxed"
          >
            Manufacturers & Suppliers for Heavy Machinery & Equipment for Sugar,
            Cement, Paper, Chemical & Handling Equipment industries with
            uncompromising quality since 1998.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
          >
            <Link to="/services" className="btn-gold inline-flex items-center justify-center gap-2 text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3">
              <span>Explore Our Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="btn-gold-outline text-white border-white/50 hover:bg-white hover:text-primary inline-flex items-center justify-center gap-2 text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3"
            >
              <span>Request a Quote</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8 md:mt-12 lg:mt-16 pt-6 md:pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          >
            {[
              { value: "130,000", label: "Sq Ft Facility" },
              { value: "65 HP", label: "Power Supply" },
              { value: "8", label: "Departments" },
              { value: "25+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
