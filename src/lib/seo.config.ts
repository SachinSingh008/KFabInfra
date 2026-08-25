// ============================================================
// SEO CONFIGURATION — Central source of truth for all metadata
// KFab Infra Project — https://kfabinfraproject.site
// ============================================================

export const SITE = {
  name: "KFab Infra Project",
  legalName: "KFab Infra Project PVT LTD",
  url: "https://kfabinfraproject.site",
  tagline: "India's Premier Heavy Steel Fabrication Partner",
  description:
    "KFab Infra Project PVT LTD is a leading heavy steel fabrication company based in Jejuri, Pune, Maharashtra. Specializing in structural steel, pressure vessels, sugar plant equipment, conveyor systems, PEB structures, and industrial machinery since 1998.",
  shortDescription:
    "Premium heavy fabrication solutions for sugar, cement, power, and infrastructure industries across India since 1998.",
  keywords: [
    // 15. Priority Keywords
    "Industrial fabrication contractor Pune",
    "Heavy fabrication contractor Pune",
    "Structural fabrication contractor Pune",
    "Structural steel fabrication Pune",
    "Steel fabrication contractor Pune",
    "Fabrication contractor Pune",
    "Industrial fabrication Pune",
    "PEB contractor Pune",
    "PEB fabrication Pune",
    "PEB erection contractor Pune",
    "Industrial shed contractor Pune",
    "Industrial shed construction Pune",
    "Industrial piping contractor Pune",
    "Process piping contractor Pune",
    "Industrial erection contractor Pune",
    "Steel erection contractor Pune",
    "Fabrication and erection contractor Pune",
    "Turnkey industrial contractor Pune",
    "Industrial contractor Pune",
    "Industrial EPC contractor Pune",
    "Fabrication subcontractor Pune",
    "Industrial fabrication subcontractor Pune",
    "Fabrication job work Pune",
    "Industrial fabrication job work Pune",
    "Fabrication contractor Chakan",
    "Industrial fabrication Chakan",
    "PEB contractor Chakan",
    "Industrial shed contractor Chakan",
    "Fabrication contractor Bhosari",
    "Industrial fabrication Bhosari",

    // 1. Core industrial fabrication
    "Industrial fabrication company Pune",
    "Industrial fabrication services Pune",
    "Industrial fabrication work Pune",
    "Industrial fabrication projects Pune",
    "Industrial fabrication contractor near me",
    "Industrial fabricator Pune",
    "Fabrication company Pune",
    "Fabrication services Pune",

    // 2. Heavy fabrication
    "Heavy steel fabrication Pune",
    "Heavy structural fabrication Pune",
    "Heavy industrial fabrication Pune",
    "Heavy steel fabricator Pune",
    "Heavy engineering fabrication Pune",
    "Heavy metal fabrication Pune",
    "Heavy fabrication contractor Maharashtra",

    // 3. Structural fabrication
    "Structural steel fabricator Pune",
    "Structural steel contractor Pune",
    "Steel structure fabrication Pune",
    "Industrial structural fabrication Pune",

    // 4. PEB / Pre-engineered buildings
    "PEB company Pune",
    "PEB manufacturer Pune",
    "PEB structure contractor Pune",
    "PEB building contractor Pune",
    "Pre engineered building contractor Pune",
    "Pre engineered steel building Pune",

    // 5. Industrial shed / warehouse
    "Industrial shed manufacturer Pune",
    "Industrial shed fabrication Pune",
    "Steel shed contractor Pune",
    "Factory shed contractor Pune",
    "Warehouse shed contractor Pune",
    "Industrial warehouse contractor Pune",

    // 6. Industrial piping
    "Industrial pipe fabrication Pune",
    "Process piping fabrication Pune",
    "SS pipe fabrication Pune",
    "Stainless steel piping contractor Pune",
    "Carbon steel piping contractor Pune",
    "Industrial pipeline contractor Pune",

    // 7. Erection work
    "Structural erection contractor Pune",
    "Steel erection contractor Pune",
    "Fabrication erection services Pune",
    "Mechanical erection contractor Pune",
    "Equipment erection contractor Pune",

    // 8. Turnkey industrial projects
    "Turnkey fabrication contractor Pune",
    "Turnkey industrial project contractor Pune",
    "Industrial construction contractor Pune",
    "Industrial EPC company Pune",
    "Turnkey industrial solutions Pune",

    // 9. Location-specific (Chakan, Bhosari, PCMC, Talegaon, Ranjangaon)
    "Structural fabrication Chakan",
    "Heavy fabrication Chakan",
    "Structural fabrication Bhosari",
    "Heavy fabrication Bhosari",
    "Fabrication contractor PCMC",
    "Industrial fabrication PCMC",
    "PEB contractor PCMC",
    "Fabrication contractor Talegaon",
    "Industrial fabrication Talegaon",
    "PEB contractor Talegaon",
    "Fabrication contractor Ranjangaon",
    "Industrial fabrication Ranjangaon",
    "PEB contractor Ranjangaon",

    // 10. Job-work / Subcontracting
    "Steel fabrication job work Pune",
    "Structural fabrication job work Pune",
    "Heavy fabrication job work Pune",
    "Structural fabrication subcontractor Pune",
    "Fabrication outsourcing Pune",
    "Fabrication work subcontract Pune",

    // 11. Maintenance / Shutdown
    "Industrial maintenance contractor Pune",
    "Factory maintenance contractor Pune",
    "Plant maintenance contractor Pune",
    "Industrial shutdown contractor Pune",
    "Plant shutdown contractor Pune",
    "Shutdown maintenance contractor Pune",

    // 12. Steel fabrication
    "MS fabrication Pune",
    "Mild steel fabrication Pune",
    "Stainless steel fabrication Pune",
    "Steel structure contractor Pune",

    // 13. Drawing / Engineering-oriented
    "Fabrication as per drawing Pune",
    "Structural fabrication as per drawing Pune",
    "Fabrication from drawing Pune",
    "Steel fabrication as per drawing Pune",

    // 14. High-intent "looking for contractor"
    "Fabrication contractor required Pune",
    "Industrial contractor required Pune",
    "PEB contractor required Pune",
    "Industrial shed contractor required Pune",
    "Fabrication vendor Pune",
    "Industrial fabrication vendor Pune",
    "PEB vendor Pune",
  ],
  locale: "en_IN",
  type: "website",
  twitterHandle: "@KFabInfra",
  foundedYear: "1998",
  email: "kfab.infraproject@gmail.com",
  phone: "+91-XXX-XXX-XXXX",
  address: {
    streetAddress: "Jejuri MIDC",
    addressLocality: "Jejuri",
    addressRegion: "Pune",
    addressCountry: "IN",
    postalCode: "412303",
  },
  geo: {
    latitude: "18.2721",
    longitude: "74.0156",
  },
  ogImage: "https://kfabinfraproject.site/og-image.png",
  logo: "https://kfabinfraproject.site/logo.png",
  favicon: "/favicon.png",
} as const;

// ============================================================
// PAGE-LEVEL SEO METADATA
// ============================================================

export type PageSEO = {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
};

export const PAGE_SEO: Record<string, PageSEO> = {
  home: {
    title: "KFab Infra Project | Heavy Steel Fabrication Company — Pune, India",
    description:
      "KFab Infra Project PVT LTD — India's premier heavy steel fabrication company in Jejuri, Pune since 1998. Specialists in structural steel, pressure vessels, sugar plant equipment, PEB structures, and industrial machinery.",
    keywords: [
      "heavy fabrication company Pune",
      "steel fabrication India",
      "industrial fabrication Maharashtra",
      "KFab Infra Project",
      "pressure vessel manufacturer",
      "structural steel Pune",
    ],
    canonical: "https://kfabinfraproject.site",
  },
  about: {
    title: "About KFab Infra Project | 25+ Years Heavy Fabrication Excellence",
    description:
      "Learn about KFab Infra Project PVT LTD — founded in 1998, with a 15,000 sq ft state-of-the-art facility in Jejuri, Pune. A trusted name in heavy industrial fabrication across India for 25+ years.",
    keywords: [
      "KFab Infra Project history",
      "heavy fabrication company Jejuri Pune",
      "about KFab steel fabrication",
      "industrial fabrication leader India",
    ],
    canonical: "https://kfabinfraproject.site/about",
  },
  services: {
    title: "Services | Steel Fabrication, Pressure Vessels, PEB Structures — KFab",
    description:
      "KFab Infra offers heavy steel fabrication services including structural steel, pressure vessels, silos, hoppers, conveyor systems, PEB structures, sugar plant equipment, and industrial tanks in Pune, Maharashtra.",
    keywords: [
      "steel fabrication services Pune",
      "pressure vessel fabrication Maharashtra",
      "PEB structures manufacturer",
      "industrial silos and hoppers",
      "conveyor system fabrication",
      "sugar plant equipment India",
      "tank fabrication services",
    ],
    canonical: "https://kfabinfraproject.site/services",
  },
  industries: {
    title: "Industries Served | Sugar, Cement, Power, Metro — KFab Infra Project",
    description:
      "KFab Infra Project serves India's core industries including sugar plants, cement plants, power generation, metro rail infrastructure, chemical plants, paper mills, and food processing.",
    keywords: [
      "sugar industry fabrication India",
      "cement plant steel fabrication",
      "metro rail girder fabrication",
      "power plant fabrication contractor",
      "chemical industry fabrication",
    ],
    canonical: "https://kfabinfraproject.site/industries",
  },
  infrastructure: {
    title: "Infrastructure & Facility | 15,000 Sq Ft Plant — KFab Infra Project",
    description:
      "Explore KFab Infra Project's state-of-the-art 15,000 sq ft manufacturing facility in Jejuri, Pune — equipped with advanced CNC machinery, welding stations, and precision fabrication tools.",
    keywords: [
      "fabrication plant Pune",
      "steel fabrication facility Maharashtra",
      "CNC fabrication machinery India",
      "heavy fabrication workshop Jejuri",
    ],
    canonical: "https://kfabinfraproject.site/infrastructure",
  },
  quality: {
    title: "Quality Assurance | ISO Standards, NDT Testing — KFab Infra Project",
    description:
      "KFab Infra Project maintains the highest quality standards in heavy fabrication including NDT testing, welding quality control, dimensional inspection, and compliance with international engineering norms.",
    keywords: [
      "fabrication quality control India",
      "NDT testing steel fabrication",
      "ISO certified fabrication company Pune",
      "weld quality inspection Maharashtra",
    ],
    canonical: "https://kfabinfraproject.site/quality",
  },
  clients: {
    title: "Our Clients | Trusted by India's Industrial Giants — KFab Infra",
    description:
      "KFab Infra Project is trusted by leading industrial companies across India's sugar, cement, power, and infrastructure sectors. 500+ projects delivered with precision and reliability.",
    keywords: [
      "heavy fabrication clients India",
      "KFab Infra Project clients",
      "steel fabrication industrial partners",
    ],
    canonical: "https://kfabinfraproject.site/clients",
  },
  contact: {
    title: "Contact KFab Infra Project | Get a Free Quote — Jejuri, Pune",
    description:
      "Contact KFab Infra Project PVT LTD for heavy steel fabrication inquiries, project quotes, and partnership opportunities. Located in Jejuri, Pune, Maharashtra. Serving clients across India.",
    keywords: [
      "contact KFab Infra Project",
      "fabrication quote Pune",
      "heavy fabrication inquiry Maharashtra",
      "steel fabrication contact India",
    ],
    canonical: "https://kfabinfraproject.site/contact",
  },
  careers: {
    title: "Careers at KFab Infra Project | Steel Fabrication Jobs — Pune",
    description:
      "Join KFab Infra Project — a growing heavy steel fabrication company in Jejuri, Pune. We're hiring skilled welders, fabricators, engineers, and project managers. Apply now.",
    keywords: [
      "fabrication jobs Pune",
      "welder jobs Maharashtra",
      "steel fabrication career India",
      "KFab Infra Project jobs",
    ],
    canonical: "https://kfabinfraproject.site/careers",
  },
};

// ============================================================
// JSON-LD STRUCTURED DATA
// ============================================================

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.legalName,
  alternateName: "KFab Infra",
  url: SITE.url,
  logo: {
    "@type": "ImageObject",
    url: SITE.logo,
    width: 400,
    height: 400,
  },
  description: SITE.description,
  foundingDate: SITE.foundedYear,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    ...SITE.address,
  },
  geo: {
    "@type": "GeoCoordinates",
    ...SITE.geo,
  },
  sameAs: [
    "https://www.linkedin.com/company/kfab-infra-project",
    "https://www.facebook.com/kfabinfra",
  ],
  knowsAbout: [
    "Heavy Steel Fabrication",
    "Structural Steel",
    "Pressure Vessels",
    "Sugar Plant Equipment",
    "Conveyor Systems",
    "PEB Structures",
    "Industrial Machinery",
  ],
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#localbusiness`,
  name: SITE.legalName,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Bank Transfer, Cheque",
  openingHours: "Mo-Sa 09:00-18:00",
  address: {
    "@type": "PostalAddress",
    ...SITE.address,
  },
  geo: {
    "@type": "GeoCoordinates",
    ...SITE.geo,
  },
  hasMap: `https://maps.google.com/?q=${SITE.geo.latitude},${SITE.geo.longitude}`,
  image: SITE.ogImage,
  logo: SITE.logo,
  areaServed: [
    { "@type": "State", name: "Maharashtra" },
    { "@type": "Country", name: "India" },
  ],
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/services?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const getServicesSchema = () => [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Heavy Steel Fabrication",
    description:
      "Custom heavy steel fabrication for structural, pressure, and industrial applications across India.",
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: "India",
    serviceType: "Heavy Fabrication",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pressure Vessel Manufacturing",
    description:
      "Design and fabrication of pressure vessels for chemical, sugar, and process industries.",
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: "India",
    serviceType: "Pressure Vessel Fabrication",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "PEB Structure Fabrication",
    description:
      "Pre-Engineered Building (PEB) structure fabrication for industrial and commercial applications.",
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: "India",
    serviceType: "PEB Structures",
  },
];

export const getBreadcrumbSchema = (
  crumbs: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});

export const getFAQSchema = (
  faqs: { question: string; answer: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
