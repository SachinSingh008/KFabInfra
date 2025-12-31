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
    slug: "metro-railway-girders",
    title: "Metro & Railway Girders",
    description: "Precision-fabricated structural girders for metro systems and railways, meeting stringent safety and load-bearing specifications.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    features: ["Load-tested", "Precision welding", "Certified quality"],
  },
  {
    slug: "silo-tanks",
    title: "Silo & Storage Tanks",
    description: "Complete range of storage solutions including conical, vertical, and frustum tanks for cement, grain, and industrial materials.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    features: ["Multiple configurations", "Weatherproof", "Large capacity"],
  },
  {
    slug: "underground-diesel-tanks",
    title: "Underground Diesel Tanks",
    description: "Heavy-duty underground storage tanks for diesel and petroleum products, built to environmental safety standards.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    features: ["Double-walled", "Leak detection", "Long lifespan"],
  },
  {
    slug: "plant-sheds",
    title: "Plant & Spherical Sheds",
    description: "Custom industrial sheds and structures, including innovative spherical designs for unique storage requirements.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    features: ["Custom spans", "Weather resistant", "Quick installation"],
  },
  {
    slug: "gratings-frames",
    title: "Gratings & Frames",
    description: "Industrial-grade gratings and structural frames for walkways, platforms, and machinery support systems.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&q=80",
    features: ["Anti-slip surface", "Heavy load capacity", "Modular design"],
  },
  {
    slug: "hoppers-rollers",
    title: "Hoppers & Rollers",
    description: "Material handling hoppers and industrial rollers for manufacturing and processing facilities.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=600&q=80",
    features: ["Wear resistant", "Custom angles", "Easy cleaning"],
  },
  {
    slug: "calandria",
    title: "Calandria",
    description: "Precision-engineered calandria for heat exchange applications in sugar and chemical processing.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    features: ["Efficient heat transfer", "Tube arrangement", "Durable construction"],
  },
  {
    slug: "gallery-structures",
    title: "Gallery Structures",
    description: "Elevated walkways and gallery structures for industrial facilities, ensuring safe access and material transport.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    features: ["Safety compliant", "Modular sections", "Heavy loads"],
  },
  {
    slug: "dish-end-tanks",
    title: "Dish End Tanks",
    description: "Precision-formed dish ends and complete tank assemblies for pressure vessels and storage applications.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    features: ["Pressure rated", "Various profiles", "Tight tolerances"],
  },
  {
    slug: "rolling-works",
    title: "Rolling Works",
    description: "Heavy metal plate rolling services for cylindrical, conical, and custom curved sections.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&q=80",
    features: ["Thick plates", "Precise radius", "Large diameters"],
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
              Comprehensive heavy fabrication solutions engineered to meet the
              demanding needs of modern industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="card-premium group h-full overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
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
