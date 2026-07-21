import React from "react";
import { Helmet } from "react-helmet-async";
import {
  SITE,
  PageSEO,
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
  getBreadcrumbSchema,
} from "@/lib/seo.config";

interface SEOProps extends PageSEO {
  breadcrumbs?: { name: string; url: string }[];
  extraSchema?: object | object[];
}

/**
 * Reusable SEO component — wraps react-helmet-async with full
 * meta tags, OpenGraph, Twitter Card, and JSON-LD structured data.
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noIndex = false,
  breadcrumbs,
  extraSchema,
}) => {
  const image = ogImage || SITE.ogImage;
  const allKeywords = [
    ...(keywords || []),
    ...SITE.keywords.slice(0, 5),
  ].join(", ");

  // Build JSON-LD array
  const schemas: object[] = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getLocalBusinessSchema(),
  ];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(getBreadcrumbSchema(breadcrumbs));
  }
  if (extraSchema) {
    if (Array.isArray(extraSchema)) {
      schemas.push(...extraSchema);
    } else {
      schemas.push(extraSchema);
    }
  }

  return (
    <Helmet>
      {/* Primary */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={SITE.legalName} />
      <meta name="creator" content={SITE.legalName} />
      <meta name="publisher" content={SITE.legalName} />
      <meta name="category" content="Industrial Manufacturing, Steel Fabrication" />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"} />
      <meta name="googlebot" content={noIndex ? "noindex" : "index,follow"} />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Geo / Local SEO */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Jejuri, Pune, Maharashtra, India" />
      <meta name="geo.position" content={`${SITE.geo.latitude};${SITE.geo.longitude}`} />
      <meta name="ICBM" content={`${SITE.geo.latitude}, ${SITE.geo.longitude}`} />

      {/* Language */}
      <meta httpEquiv="content-language" content="en-IN" />
      <link rel="alternate" hrefLang="en-IN" href={canonical || SITE.url} />
      <link rel="alternate" hrefLang="x-default" href={SITE.url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical || SITE.url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content={SITE.locale} />

      {/* Facebook */}
      <meta property="fb:app_id" content="" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:creator" content={SITE.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* LinkedIn */}
      <meta property="og:see_also" content="https://www.linkedin.com/company/kfab-infra-project" />

      {/* Schema JSON-LD — all schemas in one script block via @graph */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": schemas,
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
