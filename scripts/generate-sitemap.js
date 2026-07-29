import fs from 'fs';
import path from 'path';

// Parse JS data files using Regex to avoid module loading complexities in raw Node
function extractSlugs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const slugs = [];
  const regex = /slug:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

const BASE_URL = 'https://botzo.io';
const sitemapPath = path.resolve('./public/sitemap.xml');

const today = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/platform', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'monthly' },
  { url: '/solutions', priority: '0.9', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { url: '/resources', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/about', priority: '0.7', changefreq: 'yearly' },
  { url: '/contact', priority: '0.8', changefreq: 'yearly' },
  { url: '/demo', priority: '0.9', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/security', priority: '0.4', changefreq: 'yearly' },
];

const platformSlugs = extractSlugs(path.resolve('./src/data/platformPages.js'));
const serviceSlugs = extractSlugs(path.resolve('./src/data/servicePages.js'));
const solutionSlugs = extractSlugs(path.resolve('./src/data/solutionPages.js'));

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Add static routes
for (const route of staticRoutes) {
  xml += `  <url>\n    <loc>${BASE_URL}${route.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>\n`;
}

// Add Platform routes
for (const slug of platformSlugs) {
  xml += `  <url>\n    <loc>${BASE_URL}/platform/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
}

// Add Service routes
for (const slug of serviceSlugs) {
  xml += `  <url>\n    <loc>${BASE_URL}/services/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
}

// Add Solution routes
for (const slug of solutionSlugs) {
  xml += `  <url>\n    <loc>${BASE_URL}/solutions/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
}

xml += `</urlset>`;

fs.writeFileSync(sitemapPath, xml);
console.log(`Successfully generated sitemap.xml with ${staticRoutes.length + platformSlugs.length + serviceSlugs.length + solutionSlugs.length} URLs!`);
