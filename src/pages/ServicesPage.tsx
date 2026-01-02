import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    slug: "sugarcane-vessels",
    title: "Sugarcane Vessels",
    description: "High-capacity processing vessels engineered specifically for sugar mills, designed for optimal efficiency and durability under demanding conditions.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    features: ["Custom capacities", "Corrosion resistant", "Easy maintenance"],
  },
  {
    slug: "metro-girders",
    title: "Metro Girders",
    description: "Precision-fabricated structural girders for metro systems, meeting stringent safety and load-bearing specifications.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    features: ["Load-tested", "Precision welding", "Certified quality"],
  },
  {
    slug: "railway-girders",
    title: "Railway Girders",
    description: "Heavy-duty railway girders and structural components for rail infrastructure projects across India.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80",
    features: ["Railway certified", "High load capacity", "Durable construction"],
  },
  {
    slug: "spherical-shed",
    title: "Spherical Shed",
    description: "Innovative spherical shed designs for unique storage and industrial requirements.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    features: ["Unique design", "Space efficient", "Weather resistant"],
  },
  {
    slug: "underground-diesel-tanks",
    title: "Underground Diesel Tanks",
    description: "Heavy-duty underground storage tanks for diesel and petroleum products, built to environmental safety standards.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    features: ["Double-walled", "Leak detection", "Long lifespan"],
  },
  {
    slug: "frustum-silo",
    title: "Frustum Silo",
    description: "Specialized frustum-shaped silos for efficient material storage and discharge.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    features: ["Efficient flow", "Custom sizes", "Robust design"],
  },
  {
    slug: "conical-silo",
    title: "Conical Silo",
    description: "Conical silos designed for optimal material flow and storage efficiency.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    features: ["Gravity discharge", "Large capacity", "Weatherproof"],
  },
  {
    slug: "sugarcane-silos",
    title: "Sugarcane Silos",
    description: "Purpose-built silos for sugarcane and related material storage in sugar mills.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    features: ["Sugar industry spec", "Easy cleaning", "Durable"],
  },
  {
    slug: "roller",
    title: "Rollers",
    description: "Industrial rollers for material handling and manufacturing processes.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=600&q=80",
    features: ["Wear resistant", "Precision balanced", "Custom specs"],
  },
  {
    slug: "calandria",
    title: "Calandria",
    description: "Precision-engineered calandria for heat exchange applications in sugar and chemical processing.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    features: ["Efficient heat transfer", "Tube arrangement", "Durable construction"],
  },
  {
    slug: "gratings-frame",
    title: "Gratings & Frames",
    description: "Industrial-grade gratings and structural frames for walkways, platforms, and machinery support systems.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&q=80",
    features: ["Anti-slip surface", "Heavy load capacity", "Modular design"],
  },
  {
    slug: "catchall",
    title: "Catchall",
    description: "Specialized catchall systems for industrial material collection and handling.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=600&q=80",
    features: ["Custom design", "Easy access", "Durable build"],
  },
  {
    slug: "silo-with-base",
    title: "Silo with Base",
    description: "Complete silo systems with integrated base structures for stability and easy installation.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    features: ["Integrated base", "Quick setup", "Stable design"],
  },
  {
    slug: "plant-shed",
    title: "Plant Shed",
    description: "Custom industrial plant sheds for manufacturing and storage facilities.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    features: ["Custom spans", "Weather resistant", "Quick installation"],
  },
  {
    slug: "connector",
    title: "Connectors",
    description: "Structural connectors and joining components for industrial assemblies.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&q=80",
    features: ["High strength", "Precision fit", "Corrosion resistant"],
  },
  {
    slug: "hopper",
    title: "Hoppers",
    description: "Material handling hoppers for manufacturing and processing facilities.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=600&q=80",
    features: ["Wear resistant", "Custom angles", "Easy cleaning"],
  },
  {
    slug: "tanks",
    title: "Tanks",
    description: "Industrial storage tanks for various liquids and materials.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    features: ["Multiple sizes", "Pressure rated", "Long lifespan"],
  },
  {
    slug: "gallery-structure",
    title: "Gallery Structures",
    description: "Elevated walkways and gallery structures for industrial facilities, ensuring safe access and material transport.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    features: ["Safety compliant", "Modular sections", "Heavy loads"],
  },
  {
    slug: "silo-tanks",
    title: "Silo Tanks",
    description: "Combined silo and tank systems for versatile industrial storage needs.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    features: ["Dual purpose", "Large capacity", "Efficient design"],
  },
  {
    slug: "cuboidal-tanks",
    title: "Cuboidal Tanks",
    description: "Rectangular storage tanks optimized for space efficiency.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    features: ["Space efficient", "Easy installation", "Stackable"],
  },
  {
    slug: "metro-girders-assembly",
    title: "Metro Girders Assembly",
    description: "Complete metro girder assembly services including installation support.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    features: ["Full assembly", "Quality tested", "Installation support"],
  },
  {
    slug: "vertical-tanks",
    title: "Vertical Tanks",
    description: "Vertical storage tanks for optimized footprint and gravity-fed systems.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    features: ["Space saving", "Gravity feed", "Easy access"],
  },
  {
    slug: "rolling-works",
    title: "Rolling Works",
    description: "Heavy metal plate rolling services for cylindrical, conical, and custom curved sections.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&q=80",
    features: ["Thick plates", "Precise radius", "Large diameters"],
  },
  {
    slug: "dish-end-tanks",
    title: "Dish-end Tanks",
    description: "Precision-formed dish ends and complete tank assemblies for pressure vessels and storage applications.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    features: ["Pressure rated", "Various profiles", "Tight tolerances"],
  },
];

const ServicesPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-charcoal text-creme relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="divider-gold mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
              Our
              <br />
              <span className="gold-text">Fabrication Services</span>
            </h1>
            <p className="text-lg text-creme/70 leading-relaxed">
              Comprehensive heavy fabrication solutions for Sugar, Cement, Paper,
              Chemical & Handling Equipment industries - 25+ specialized services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="card-premium group h-full overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {service.features.slice(0, 2).map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our engineering team can design and fabricate custom solutions
              tailored to your specific requirements.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
              <span>Get a Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage;