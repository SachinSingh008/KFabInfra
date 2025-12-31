import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(43 50% 54%) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-creme mb-6">
            Ready to Engineer Your
            <br />
            <span className="gold-text">Next Industrial Project?</span>
          </h2>
          <p className="text-lg text-creme/70 max-w-2xl mx-auto mb-10">
            Let's discuss how our fabrication expertise can bring your vision to
            life. From concept to completion, we're your trusted partner.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-3 px-8 py-3 text-creme font-medium hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call +91 98765 43210</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
