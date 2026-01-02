import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial fabrication facility with welding sparks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-creme/90 font-medium">
              Since 2004 - 20+ Years of Engineering Excellence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-creme mb-6 leading-tight"
          >
            Engineering Strength.
            <br />
            <span className="gold-text">Fabricated with Precision.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-creme/80 max-w-2xl mb-10 leading-relaxed"
          >
            Manufacturers & Suppliers for Heavy Machinery & Equipment for Sugar,
            Cement, Paper, Chemical & Handling Equipment industries with
            uncompromising quality since 2004.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/services" className="btn-gold inline-flex items-center justify-center gap-2">
              <span>Explore Our Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="btn-gold-outline text-creme border-creme/30 hover:bg-creme hover:text-charcoal inline-flex items-center justify-center gap-2"
            >
              <span>Request a Quote</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 pt-8 border-t border-creme/10 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "20+", label: "Years Experience" },
              { value: "500+", label: "Projects Delivered" },
              { value: "10+", label: "Trusted Clients" },
              { value: "15,000", label: "Sq Ft Facility" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-creme/60">{stat.label}</div>
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
          className="w-6 h-10 rounded-full border-2 border-creme/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
