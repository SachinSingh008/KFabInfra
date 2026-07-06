import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const clients = [
  "Indiana Gratings Pvt. Ltd.",
  "Indiana Conveyor Pvt. Ltd.",
  "WMI Cranes Ltd.",
  "Global Steels Hyderabad",
  "Kushwaha Industries",
  "Consolidated Hoist Pvt. Ltd.",
  "TOWELL Engineering Int. LLP",
  "Crossworld Industries",
  "General Energy Management System Pvt. Ltd.",
  "Thermax Ltd.",
];

const ClientsMarquee = () => {
  // Create exactly 2 copies for seamless looping (animation moves 50%)
  const clientsRepeated = [...clients, ...clients];
  const clientsReversed = [...clients].reverse();
  const clientsReversedRepeated = [...clientsReversed, ...clientsReversed];

  return (
    <section className="py-8 md:py-12 lg:py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-3 md:px-4 lg:px-8 mb-6 md:mb-8 lg:mb-12">
        <SectionHeader
          title="Trusted by Industry Leaders"
          subtitle="Partnering with India's leading industrial organizations"
        />
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-secondary to-transparent z-10" />

        {/* First Row */}
        <div className="flex items-center gap-4 md:gap-8 lg:gap-12 animate-marquee-mobile md:animate-marquee mb-4 md:mb-6 lg:mb-8 whitespace-nowrap">
          {clientsRepeated.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-6 border border-border bg-card hover:border-primary/30 transition-colors min-w-[160px] md:min-w-[180px] lg:min-w-[200px] text-center"
            >
              <span className="text-sm md:text-base lg:text-lg font-sans font-medium text-foreground/80">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Second Row - Reverse */}
        <div className="flex items-center gap-4 md:gap-8 lg:gap-12 animate-marquee-reverse-mobile md:animate-marquee-reverse whitespace-nowrap">
          {clientsReversedRepeated.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-6 border border-border bg-card hover:border-primary/30 transition-colors min-w-[160px] md:min-w-[180px] lg:min-w-[200px] text-center"
            >
              <span className="text-sm md:text-base lg:text-lg font-sans font-medium text-foreground/80">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
