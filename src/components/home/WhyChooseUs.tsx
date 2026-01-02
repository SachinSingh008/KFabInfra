import { motion } from "framer-motion";
import { Shield, Clock, Award, Users, CheckCircle, Wrench } from "lucide-react";
import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";

const features = [
  {
    icon: Award,
    title: "20+ Years Experience",
    description:
      "Extensive industry experience with deep knowledge and expertise in heavy fabrication",
  },
  {
    icon: Wrench,
    title: "Customized Solutions",
    description:
      "Tailored fabrication solutions designed for your specific requirements",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Stringent quality control measures with high-grade materials at every stage",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Commitment to agreed-upon project deadlines without compromising quality",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description:
      "8 specialized departments with welders, engineers, fitters & more",
  },
  {
    icon: CheckCircle,
    title: "Long-term Partnerships",
    description:
      "Building trusted relationships with clients across India",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <div className="divider-gold mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
                Why Industry Leaders
                <br />
                <span className="text-primary">Choose Us</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Our commitment to excellence, combined with cutting-edge
                technology and unmatched expertise, makes us the preferred
                fabrication partner for leading industries across India.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Image */}
          <ScrollReveal direction="right" className="relative">
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
                  alt="Quality fabrication process"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
