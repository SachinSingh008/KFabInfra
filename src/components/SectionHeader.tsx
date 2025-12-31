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
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      <div
        className={`divider-gold mb-6 ${centered ? "mx-auto" : ""}`}
      />
      <h2
        className={`section-title mb-4 ${
          light ? "text-creme" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`section-subtitle ${centered ? "mx-auto" : ""} ${
            light ? "text-creme/70" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
