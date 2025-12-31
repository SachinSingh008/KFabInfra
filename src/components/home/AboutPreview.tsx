import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const AboutPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=800&q=80"
                  alt="Industrial workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-charcoal text-creme p-6 rounded-lg shadow-2xl hidden md:block">
                <div className="text-4xl font-serif font-bold text-primary mb-1">
                  20+
                </div>
                <div className="text-sm text-creme/70">Years of Excellence</div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-lg -z-10" />
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <ScrollReveal direction="right">
            <div className="divider-gold mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
              Trusted Partner in
              <br />
              <span className="text-primary">Heavy Fabrication</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Established with a vision to deliver world-class fabrication solutions,
              Patel Fabrication Works has grown into one of Gujarat's most trusted
              names in heavy industrial manufacturing. Our expertise spans across
              sugar processing equipment, railway infrastructure, and industrial
              storage solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every project we undertake reflects our commitment to precision,
              durability, and client satisfaction. Our state-of-the-art facility,
              combined with skilled craftsmen, ensures that each fabrication meets
              the highest industry standards.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Contract-Based Excellence",
                "Precision Engineering",
                "Timely Delivery",
                "Quality Assurance",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
