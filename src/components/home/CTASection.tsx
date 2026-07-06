import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-[hsl(210_50%_20%)] via-[hsl(210_50%_25%)] to-[hsl(210_50%_20%)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(210 100% 50%) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-3 md:px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-20 h-1 bg-primary mx-auto mb-6 md:mb-8" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-bold text-white mb-4 md:mb-6">
            Ready to Engineer Your
            <br />
            <span className="blue-text">Next Industrial Project?</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white/80 max-w-2xl mx-auto mb-6 md:mb-8 lg:mb-10">
            Let's discuss how our fabrication expertise can bring your vision to
            life. From concept to completion, we're your trusted partner.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3">
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base text-white font-medium hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span>Call +91 99224 27381</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
