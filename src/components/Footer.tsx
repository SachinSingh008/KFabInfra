import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about" },
    { name: "Quality Assurance", path: "/quality" },
    { name: "Careers", path: "/contact" },
  ],
  services: [
    { name: "Sugar Vessels", path: "/services" },
    { name: "Metro Girders", path: "/services" },
    { name: "Silo Tanks", path: "/services" },
    { name: "Rolling Works", path: "/services" },
  ],
  industries: [
    { name: "Sugar Industry", path: "/industries" },
    { name: "Cement Industry", path: "/industries" },
    { name: "Paper Industry", path: "/industries" },
    { name: "Chemical Industry", path: "/industries" },
  ],
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-creme relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-charcoal">
                  K
                </span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold">
                  Kumar Fabricators
                </h3>
                <p className="text-xs text-creme/60 tracking-wider uppercase">
                  Heavy Machinery & Equipment
                </p>
              </div>
            </div>
            <p className="text-creme/70 mb-6 max-w-sm leading-relaxed">
              With over 20 years of excellence in heavy fabrication, we deliver
              precision-engineered solutions for Sugar, Cement, Paper, Chemical
              & Handling Equipment industries across India.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+919881309872"
                className="flex items-center gap-3 text-creme/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 98813 09872</span>
              </a>
              <a
                href="mailto:kumarfabricators4@gmail.com"
                className="flex items-center gap-3 text-creme/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>kumarfabricators4@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-creme/70">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>
                  C-46, M.I.D.C, Jejuri,
                  <br />
                  Pune, Maharashtra 412303
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-creme/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-creme/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
              Industries
            </h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-creme/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-creme/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-creme/50 text-sm">
            © {new Date().getFullYear()} Kumar Fabricators. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-creme/50 text-sm hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-creme/50 text-sm hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-charcoal rounded-full flex items-center justify-center shadow-gold z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
