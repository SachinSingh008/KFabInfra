import fs from 'fs';
import path from 'path';

// Import our data directly via reading the file (as it's ts, we can just extract slugs via regex for simplicity)
const SRC_DIR = path.join(process.cwd(), 'src');
const DATA_DIR = path.join(SRC_DIR, 'data');

const extractSlugs = (filePath) => {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf-8');
  const matches = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
  return matches.map(m => m[1]);
};

const serviceSlugs = extractSlugs(path.join(DATA_DIR, 'servicesData.ts'));
const locationSlugs = extractSlugs(path.join(DATA_DIR, 'locationsData.ts'));
const blogSlugs = extractSlugs(path.join(DATA_DIR, 'blogData.ts'));

const DOMAIN = 'https://kfabinfraproject.site';

const staticRoutes = [
  '',
  '/about',
  '/services',
  '/industries',
  '/infrastructure',
  '/quality',
  '/clients',
  '/contact',
  '/careers'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

const addUrl = (route, priority = "0.8") => {
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${DOMAIN}${route}</loc>\n`;
  sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
  sitemap += `    <changefreq>weekly</changefreq>\n`;
  sitemap += `    <priority>${priority}</priority>\n`;
  sitemap += `  </url>\n`;
};

staticRoutes.forEach(r => addUrl(r, r === '' ? "1.0" : "0.8"));
serviceSlugs.forEach(s => addUrl(`/services/${s}`, "0.9"));
locationSlugs.forEach(l => addUrl(`/location/${l}`, "0.7"));
blogSlugs.forEach(b => addUrl(`/blog/${b}`, "0.6"));

sitemap += `</urlset>`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
console.log('sitemap.xml generated successfully');

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;
fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robotsTxt);
console.log('robots.txt generated successfully');
