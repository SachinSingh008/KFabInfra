import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-6 md:mb-10 lg:mb-12 xl:mb-16 ${centered ? "text-center" : ""}`}
    >
      <div
        className={`divider-gold mb-4 md:mb-5 lg:mb-6 ${centered ? "mx-auto" : ""}`}
      />
      <h2
        className={`section-title mb-3 md:mb-4 ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`section-subtitle ${centered ? "mx-auto" : ""} ${
            light ? "text-white/80" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
