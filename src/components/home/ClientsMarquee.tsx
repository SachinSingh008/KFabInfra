import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const clients = [
  { name: "Indiana Gratings Pvt. Ltd.", domain: "indianagroup.com" },
  { name: "Indiana Conveyor Pvt. Ltd.", domain: "indianagroup.com" },
  { name: "WMI Cranes Ltd.", domain: "wmicranes.com" },
  { name: "Global Steels Hyderabad", domain: "agarwalsteelindustries.com" },
  { name: "Kushwaha Industries", domain: "kushwahaengineers.com" },
  { name: "Consolidated Hoist Pvt. Ltd.", domain: "consolidatedswift.com" },
  { name: "TOWELL Engineering Int. LLP", domain: "towellengineering.com" },
  { name: "Crossworld Industries", domain: "crossworldindustries.com" },
  { name: "General Energy Management System Pvt. Ltd.", domain: "gemsl.com" },
  { name: "Thermax Ltd.", domain: "thermaxglobal.com" },
  { name: "BHEL", domain: "bhel.com" },
  { name: "MetroTech", domain: "metrotech.com" },
  { name: "wirlpool", domain: "whirlpool.com" },
  { name: "L&T", domain: "larsentoubro.com" },
  { name: "Bajaj Mukand", domain: "mukand.com" },
  { name: "Ciscol", domain: "ciscol.com" },
  { name: "Consolidated Hoists Private Limited", domain: "consolidatedswift.com" },
  { name: "Alloyod Steel", domain: "alloyedsteel.com" },
  { name: "Zamil Steel", domain: "zamilsteel.com" },
  { name: "Wheels India", domain: "wheelsindia.com" },
  { name: "Konecranes", domain: "konecranes.com" },
  { name: "JSW", domain: "jsw.in" },
  { name: "JSPL", domain: "jindalsteelpower.com" },
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
              className="flex-shrink-0 px-4 md:px-8 lg:px-12 min-w-[160px] md:min-w-[200px] lg:min-w-[240px] flex flex-col items-center justify-center gap-3 py-4"
              title={client.name}
            >
              <img 
                src={`https://logo.clearbit.com/${client.domain}`} 
                alt={client.name} 
                className="h-20 md:h-24 w-auto object-contain transition-all duration-300" 
                onError={(e) => { 
                  e.currentTarget.onerror = null; 
                  e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`; 
                }} 
              />
              <span className="text-xs md:text-sm font-bold text-foreground/70 text-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Second Row - Reverse */}
        <div className="flex items-center gap-4 md:gap-8 lg:gap-12 animate-marquee-reverse-mobile md:animate-marquee-reverse whitespace-nowrap">
          {clientsReversedRepeated.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 md:px-8 lg:px-12 min-w-[160px] md:min-w-[200px] lg:min-w-[240px] flex flex-col items-center justify-center gap-3 py-4"
              title={client.name}
            >
              <img 
                src={`https://logo.clearbit.com/${client.domain}`} 
                alt={client.name} 
                className="h-20 md:h-24 w-auto object-contain transition-all duration-300" 
                onError={(e) => { 
                  e.currentTarget.onerror = null; 
                  e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`; 
                }} 
              />
              <span className="text-xs md:text-sm font-bold text-foreground/70 text-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
