import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const AboutPreview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-3 md:px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-20 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=800&q=80"
                  alt="Industrial workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-[hsl(210_50%_20%)] text-white p-6 shadow-2xl hidden md:block">
                <div className="text-4xl font-sans font-bold text-primary mb-1">
                  20+
                </div>
                <div className="text-sm text-white/80">Years of Excellence</div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 -z-10" />
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <ScrollReveal direction="right">
            <div className="divider-gold mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-bold mb-4 md:mb-6">
              Trusted Partner in
              <br />
              <span className="text-primary">Heavy Fabrication</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
              Established in 2004 with a vision to deliver world-class fabrication solutions,
              KFab Infra Project PVT LTD has grown into one of Maharashtra's most trusted
              names in heavy industrial manufacturing. Our expertise spans across
              sugar processing equipment, metro & railway infrastructure, and industrial
              storage solutions.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
              To provide our clients with superior-quality fabricated products that meet
              their specific requirements. We aim to deliver innovative solutions while
              adhering to the highest industry standards, ensuring customer satisfaction,
              and building long-term relationships.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {[
                "Contract-Based Excellence",
                "Precision Engineering",
                "Timely Delivery",
                "Quality Assurance",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary" />
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
