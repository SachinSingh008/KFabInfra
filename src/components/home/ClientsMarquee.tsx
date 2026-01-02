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
  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <SectionHeader
          title="Trusted by Industry Leaders"
          subtitle="Partnering with India's leading industrial organizations"
        />
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10" />

        {/* First Row */}
        <div className="flex items-center gap-12 animate-marquee mb-8">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors min-w-[200px] text-center"
            >
              <span className="text-lg font-serif font-medium text-foreground/80">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Second Row - Reverse */}
        <div className="flex items-center gap-12 animate-marquee-reverse">
          {[...clients.reverse(), ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors min-w-[200px] text-center"
            >
              <span className="text-lg font-serif font-medium text-foreground/80">
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
