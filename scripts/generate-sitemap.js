import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SEO_CONFIG } from '../src/config/seo.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  for (const [route, config] of Object.entries(SEO_CONFIG)) {
    // Determine lastmod: fallback to current build date
    const lastmod = config.lastModified || currentDate;

    xml += `  <url>
    <loc>${config.canonical}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority.toFixed(1)}</priority>
  </url>
`;
  }

  xml += `</urlset>`;

  // Write to public folder (so Vite can pick it up in dev, though technically it's a build output. 
  // It's better to write to public/sitemap.xml so it always stays up to date during dev, or directly to dist if running after build.
  // We'll write it to public/sitemap.xml to be safe)
  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(`[SEO] sitemap.xml generated successfully at ${outputPath}`);
}

generateSitemap();
