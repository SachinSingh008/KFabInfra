import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "Quality", path: "/quality" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Determine text color based on scroll state
  const textColorClass = isScrolled ? "text-foreground" : "text-creme";
  const mutedTextColorClass = isScrolled ? "text-muted-foreground" : "text-creme/70";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-elegant py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-primary-foreground">
                  P
                </span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-xl font-serif font-semibold transition-colors duration-300 ${textColorClass}`}>
                  Patel Fabrication
                </h1>
                <p className={`text-xs tracking-wider uppercase transition-colors duration-300 ${mutedTextColorClass}`}>
                  Engineering Excellence
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-primary ${
                    location.pathname === link.path 
                      ? "text-primary" 
                      : textColorClass
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+919876543210"
                className={`hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors duration-300 ${textColorClass}`}
              >
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
              <Link
                to="/contact"
                className="hidden lg:block btn-gold text-sm uppercase tracking-wide"
              >
                Get Quote
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 transition-colors duration-300 ${textColorClass}`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-background shadow-2xl pt-24 px-8"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 text-lg font-medium border-b border-border/50 transition-colors ${
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6"
                >
                  <Link to="/contact" className="btn-gold w-full text-center block">
                    Request a Quote
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
