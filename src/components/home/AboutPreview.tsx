import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import craneImg from "@/assets/crane 123.png";

const AboutPreview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-3 md:px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-20 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden bg-secondary/30 rounded-lg">
                <img
                  src={craneImg}
                  alt="Industrial workshop"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-[hsl(210_50%_20%)] text-white w-32 h-32 rounded-full shadow-2xl hidden md:flex flex-col items-center justify-center text-center p-3 border-4 border-background">
                <div className="text-3xl font-sans font-bold text-primary mb-0.5">
                  25+
                </div>
                <div className="text-[10px] sm:text-xs text-white/90 font-medium leading-tight">Years of<br/>Excellence</div>
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
