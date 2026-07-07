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
    <footer className="bg-[hsl(210_50%_20%)] text-white relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-3 md:px-4 lg:px-8 pt-8 md:pt-12 lg:pt-16 pb-6 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <img 
                src="/logo.png" 
                alt="KFab Infra Project Logo" 
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
              />
            </div>
            <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6 max-w-sm leading-relaxed">
              With over 20 years of excellence in heavy fabrication, we deliver
              precision-engineered solutions for Sugar, Cement, Paper, Chemical
              & Handling Equipment industries across India.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+919881309872"
                className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 99224 27381</span>
              </a>
              <a
                href="mailto:kumarfabricators4@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>kumarfabricators4@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
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
                    className="text-white/80 hover:text-primary transition-colors"
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
                    className="text-white/80 hover:text-primary transition-colors"
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
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()}  KFab Infra Project PVT LTD. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-white/60 text-sm hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-white/60 text-sm hover:text-primary transition-colors"
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
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white flex items-center justify-center shadow-blue z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
