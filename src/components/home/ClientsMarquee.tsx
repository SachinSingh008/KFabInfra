import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import wmiLogo from "@/assets/wmi_cranes_logo.png";
import towellLogo from "@/assets/towell_engineering_logo.png";
import bhelLogo from "@/assets/bhel_logo.png";
import siscolLogo from "@/assets/siscol_logo.png";

interface Client {
  name: string;
  domain: string;
  logo?: string;
  scaleUp?: boolean;
}

const clients: Client[] = [
  { name: "WMI Cranes Ltd.", domain: "wmicranes.com", logo: wmiLogo },
  { name: "Siscol", domain: "siscol.com", logo: siscolLogo },
  { name: "BHEL", domain: "bhel.com", logo: bhelLogo },
  { name: "TOWELL Engineering Int. LLP", domain: "towellengineering.com", logo: towellLogo },
  { name: "L&T", domain: "larsentoubro.com", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Larsen%26Toubro_logo.svg", scaleUp: true },
  { name: "Wheels India", domain: "wheelsindia.com", scaleUp: true },
  { name: "Crossworld Industries", domain: "crossworldindustries.com", scaleUp: true },
  { name: "Consolidated Hoist Pvt. Ltd.", domain: "consolidatedswift.com", scaleUp: true },
  { name: "Indiana Gratings Pvt. Ltd.", domain: "indianagroup.com" },
  { name: "Indiana Conveyor Pvt. Ltd.", domain: "indianagroup.com" },
  { name: "Global Steels Hyderabad", domain: "agarwalsteelindustries.com" },
  { name: "Kushwaha Industries", domain: "kushwahaengineers.com" },
  { name: "General Energy Management System Pvt. Ltd.", domain: "gemsl.com" },
  { name: "Thermax Ltd.", domain: "thermaxglobal.com" },
  { name: "MetroTech", domain: "metrotech.com" },
  { name: "Whirlpool", domain: "whirlpool.com" },
  { name: "Bajaj Mukand", domain: "mukand.com" },
  { name: "Alloyed Steel", domain: "alloyedsteel.com" },
  { name: "Zamil Steel", domain: "zamilsteel.com" },
  { name: "Konecranes", domain: "konecranes.com" },
  { name: "JSW", domain: "jsw.in" },
  { name: "JSPL", domain: "jindalsteelpower.com" },
];

const ClientCard = ({ client }: { client: Client }) => {
  const isScaled = client.scaleUp;

  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -4 }}
      className="flex-shrink-0 px-4 md:px-6 py-3 md:py-4 min-w-[170px] md:min-w-[220px] lg:min-w-[250px] flex flex-col items-center justify-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-primary/20 shadow-md hover:shadow-xl hover:border-primary/60 transition-all duration-300 group"
      title={client.name}
    >
      <div className={`h-16 md:h-20 w-full flex items-center justify-center ${isScaled ? "p-0.5" : "p-2"} bg-white rounded-xl shadow-inner group-hover:scale-105 transition-transform duration-300 overflow-hidden`}>
        <img
          src={client.logo ? client.logo : `https://logo.clearbit.com/${client.domain}`}
          alt={client.name}
          className={`max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300 ${isScaled ? "scale-[1.45] md:scale-[1.6]" : ""}`}
          onError={(e) => {
            if (!client.logo) {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`;
            }
          }}
        />
      </div>
      <span className="text-xs md:text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors text-center line-clamp-1">
        {client.name}
      </span>
    </motion.div>
  );
};

const ClientsMarquee = () => {
  // Create copies for seamless looping
  const clientsRepeated = [...clients, ...clients];
  const clientsReversed = [...clients].reverse();
  const clientsReversedRepeated = [...clientsReversed, ...clientsReversed];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-secondary/50 via-background to-secondary/50 overflow-hidden relative">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 mb-8 md:mb-12 relative z-10">
        <SectionHeader
          title="Trusted by Industry Leaders"
          subtitle="Partnering with India's leading industrial organizations and engineering giants"
        />
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 group/marquee">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-36 lg:w-48 bg-gradient-to-r from-background via-background/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-36 lg:w-48 bg-gradient-to-l from-background via-background/90 to-transparent z-20 pointer-events-none" />

        {/* First Row */}
        <div className="flex items-center gap-4 md:gap-6 animate-marquee-mobile md:animate-marquee group-hover/marquee:[animation-play-state:paused] mb-6 whitespace-nowrap">
          {clientsRepeated.map((client, index) => (
            <ClientCard key={`row1-${index}`} client={client} />
          ))}
        </div>

        {/* Second Row - Reverse */}
        <div className="flex items-center gap-4 md:gap-6 animate-marquee-reverse-mobile md:animate-marquee-reverse group-hover/marquee:[animation-play-state:paused] whitespace-nowrap">
          {clientsReversedRepeated.map((client, index) => (
            <ClientCard key={`row2-${index}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;

