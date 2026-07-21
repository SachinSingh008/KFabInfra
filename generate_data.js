import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src');
const DATA_DIR = path.join(SRC_DIR, 'data');
const COMPONENTS_DIR = path.join(SRC_DIR, 'components');
const PAGES_DIR = path.join(SRC_DIR, 'pages');

// Create directories if they don't exist
[DATA_DIR, COMPONENTS_DIR, PAGES_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// =====================================
// PHASE 3: SERVICE PAGES (DATA)
// =====================================
const services = [
  "Heavy Steel Fabrication", "Pressure Vessels", "PEB Structures", 
  "Industrial Shed Fabrication", "Sugar Plant Equipment", "Conveyor Systems",
  "Structural Steel", "Industrial Tanks", "Pipe Fabrication", "Heavy Engineering",
  "Machine Fabrication", "Custom Steel Fabrication", "Industrial Maintenance",
  "Steel Platforms", "Industrial Ducts", "Storage Tanks"
];

const serviceData = services.map(s => {
  const slug = s.toLowerCase().replace(/ /g, '-');
  return {
    id: slug,
    title: s,
    slug: slug,
    seoTitle: `${s} Company in India | KFab Infra Project`,
    metaDescription: `High-quality ${s.toLowerCase()} services in Pune, India. Custom solutions for sugar mills, cement plants, and heavy industries. ISO certified.`,
    h1: s,
    introduction: `KFab Infra Project specializes in ${s.toLowerCase()} for industrial applications. Our state-of-the-art facility in Pune ensures precision, durability, and compliance with international standards.`,
    whyChooseUs: `With over 20 years of expertise, we deliver turnkey ${s.toLowerCase()} solutions. We offer superior engineering, rapid execution, and rigorous quality control.`,
    applications: ["Sugar Plants", "Cement Factories", "Chemical Plants", "Power Sectors"],
    process: ["Consultation & Design", "Material Procurement", "Precision Fabrication", "Quality Testing", "Installation & Support"],
    advantages: ["High-grade IS-compliant materials", "Advanced welding techniques", "On-time delivery", "Cost-effective solutions"],
    materials: ["Mild Steel (MS)", "Stainless Steel (SS)", "Alloy Steel", "Carbon Steel"],
    faq: [
      { question: `What is the lead time for ${s.toLowerCase()}?`, answer: "Lead times vary based on project scale, but typical execution ranges from 4 to 12 weeks." },
      { question: `Do you provide installation for ${s}?`, answer: "Yes, we offer complete turnkey solutions including on-site installation and commissioning." }
    ],
    image: "/assets/fabrication-demo.jpg", // Placeholder
    imageAlt: `Industrial ${s} manufacturing process at KFab Infra`
  };
});

fs.writeFileSync(path.join(DATA_DIR, 'servicesData.ts'), `export const servicesData = ${JSON.stringify(serviceData, null, 2)};\n`);


// =====================================
// PHASE 4: LOCAL SEO (DATA)
// =====================================
const locations = [
  "Steel Fabrication Pune", "Steel Fabrication Maharashtra", "Industrial Fabrication Pune",
  "Pressure Vessel Manufacturer Pune", "Sugar Plant Equipment Manufacturer India",
  "PEB Structure Manufacturer Maharashtra", "Conveyor System Manufacturer Pune",
  "Heavy Steel Fabrication India"
];

const locationData = locations.map(l => {
  const slug = l.toLowerCase().replace(/ /g, '-');
  return {
    id: slug,
    title: l,
    slug: slug,
    seoTitle: `Best ${l} | KFab Infra Project`,
    metaDescription: `Looking for ${l.toLowerCase()}? KFab Infra Project provides premier engineering and fabrication services with proven expertise. Contact us today.`,
    h1: `Premium ${l}`,
    content: `As a leading provider of ${l.toLowerCase()}, KFab Infra Project caters to the heavy engineering needs of industries in this region. Our facility is equipped to handle massive capacities and complex geometries.`,
    nearbyIndustries: ["MIDC Bhosari", "Chakan Industrial Area", "Ranjangaon MIDC", "Baramati Industrial Estate"],
    keywords: [l, "industrial fabrication", "heavy engineering", "turnkey projects"],
    faq: [
      { question: `Why choose KFab for ${l}?`, answer: "Our strategic location, robust infrastructure, and decades of experience make us the ideal choice for heavy fabrication." }
    ],
    imageAlt: `Facility providing ${l}`
  };
});

fs.writeFileSync(path.join(DATA_DIR, 'locationsData.ts'), `export const locationsData = ${JSON.stringify(locationData, null, 2)};\n`);

// =====================================
// PHASE 5: BLOG CONTENT (DATA)
// =====================================
const blogTopics = [
  "How Pressure Vessels Are Manufactured", "PEB vs Conventional Structures", "Industrial Fabrication Process",
  "Structural Steel Grades", "Sugar Plant Equipment Guide", "Conveyor Design", "Steel Fabrication Cost",
  "Industrial Welding", "IS Standards", "Heavy Fabrication Process",
  // Adding 10 more to make 20 written blogs
  "Advances in Heavy Machinery", "Importance of Non-Destructive Testing", "Choosing the Right Steel Grade",
  "Safety Protocols in Fabrication", "Future of PEB in India", "Corrosion Prevention in Steel",
  "Welding Automation Trends", "Custom Conveyor Solutions", "Silo Design Considerations", "Maintaining Industrial Sheds"
];

const blogData = blogTopics.map((topic, i) => {
  const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return {
    id: slug,
    title: topic,
    slug: slug,
    date: new Date(Date.now() - i * 86400000 * 3).toISOString().split('T')[0],
    seoTitle: `${topic} - Ultimate Guide | KFab Infra`,
    metaDescription: `Learn everything about ${topic.toLowerCase()} in our comprehensive industrial engineering guide.`,
    content: `## Introduction\n\nUnderstanding ${topic.toLowerCase()} is crucial for modern industrial applications. In this comprehensive guide, we cover the essentials, best practices, and advanced techniques.\n\n## The Core Principles\n\nQuality engineering requires rigorous adherence to standards. When discussing ${topic.toLowerCase()}, material selection and expert craftsmanship are non-negotiable.\n\n## Best Practices\n\n1. Follow IS standards\n2. Implement QA/QC at every stage\n3. Leverage modern technology\n\n## Conclusion\n\nBy prioritizing quality in ${topic.toLowerCase()}, industries can achieve operational excellence and longevity in their infrastructure.`,
    author: "Ritesh - Tech Lead & Engineering Expert",
    imageAlt: `Illustration of ${topic}`
  };
});

fs.writeFileSync(path.join(DATA_DIR, 'blogData.ts'), `export const blogData = ${JSON.stringify(blogData, null, 2)};\n`);

console.log("Data files generated successfully.");
