import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

type NavItem =
  | { name: string; path: string; children?: undefined }
  | { name: string; path?: undefined; children: { name: string; path: string }[] };

const navLinks: NavItem[] = [
  { name: "Home", path: "/" },
  {
    name: "About",
    children: [
      { name: "About Us", path: "/about" },
      { name: "Infrastructure", path: "/infrastructure" },
      { name: "Quality", path: "/quality" },
      { name: "Clients", path: "/clients" },
      { name: "Careers", path: "/careers" },
    ],
  },
  {
    name: "What We Do",
    children: [
      { name: "Services", path: "/services" },
      { name: "Industries", path: "/industries" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHomePage = location.pathname === "/";

  const textColorClass = isHomePage
    ? isScrolled
      ? "text-foreground"
      : "text-white"
    : "text-foreground";

  // Check if any child path is active
  const isDropdownActive = (item: NavItem) =>
    item.children?.some((c) => location.pathname === c.path) ?? false;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHomePage
            ? isScrolled
              ? "bg-background/95 backdrop-blur-md shadow-elegant py-2 md:py-3"
              : "bg-transparent py-3 md:py-5"
            : "bg-background/95 backdrop-blur-md shadow-elegant py-2 md:py-3"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 md:gap-3">
              <img
                src="/logo.png"
                alt="KFab Infra Project Logo"
                className="h-12 md:h-16 lg:h-20 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className={`text-sm md:text-base lg:text-lg font-bold uppercase tracking-wide transition-colors duration-300 ${isHomePage && !isScrolled ? "text-white" : "text-foreground"}`}>
                  KFab Infra Project
                </span>
                <span className={`text-xs md:text-sm font-medium tracking-wider transition-colors duration-300 ${isHomePage && !isScrolled ? "text-white/70" : "text-muted-foreground"}`}>
                  PVT LTD
                </span>
              </div>
            </Link>

            {/* Desktop Navigation + CTA (right-aligned together) */}
            <div ref={dropdownRef} className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                if (!link.children) {
                  // Plain link
                  return (
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
                  );
                }

                // Dropdown link
                const active = isDropdownActive(link);
                const isOpen = openDropdown === link.name;

                return (
                  <div key={link.name} className="relative">
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : link.name)}
                      className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-primary ${
                        active ? "text-primary" : textColorClass
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full right-0 mt-2 w-48 bg-background/95 backdrop-blur-md shadow-elegant rounded-md border border-border overflow-hidden z-50"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-primary/10 hover:text-primary ${
                                location.pathname === child.path
                                  ? "text-primary bg-primary/5"
                                  : "text-foreground"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Divider */}
              <span className={`hidden lg:block w-px h-5 opacity-30 ${isHomePage && !isScrolled ? "bg-white" : "bg-foreground"}`} />

              {/* Phone */}
              <a
                href="tel:+919881309872"
                className={`flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors duration-300 ${textColorClass}`}
              >
                <Phone className="w-4 h-4" />
                <span>+91 99224 27381</span>
              </a>

              {/* Get Quote */}
              <Link to="/contact" className="btn-gold text-sm uppercase tracking-wide">
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4 lg:hidden">
              <a
                href="tel:+919881309872"
                className={`hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors duration-300 ${textColorClass}`}
              >
                <Phone className="w-4 h-4" />
                <span>+91 99224 27381</span>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 -mr-2 transition-colors duration-300 ${
                  isHomePage
                    ? isScrolled
                      ? "text-foreground"
                      : "text-white"
                    : "text-foreground"
                }`}
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
              className="absolute inset-0 bg-[hsl(210_50%_20%)]/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-background shadow-2xl pt-24 px-8 border-l border-border overflow-y-auto"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => {
                  if (!link.children) {
                    return (
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
                    );
                  }

                  // Mobile expandable section
                  const isExpanded = mobileExpanded === link.name;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() =>
                          setMobileExpanded(isExpanded ? null : link.name)
                        }
                        className={`flex items-center justify-between w-full py-3 text-lg font-medium border-b border-border/50 transition-colors ${
                          isDropdownActive(link)
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 flex flex-col">
                              {link.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className={`py-2.5 text-base border-b border-border/30 transition-colors ${
                                    location.pathname === child.path
                                      ? "text-primary font-medium"
                                      : "text-muted-foreground hover:text-primary"
                                  }`}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

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
