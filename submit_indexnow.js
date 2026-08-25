import fs from 'fs';
import path from 'path';

const DOMAIN = 'kfabinfraproject.site';
const KEY = '4a899c71e89f417bb892c900d81023ba';
const KEY_LOCATION = `https://${DOMAIN}/${KEY}.txt`;

// Read sitemap.xml to extract all URLs
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.error('sitemap.xml not found. Please run generate_sitemap.js first.');
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const urlMatches = [...sitemapContent.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)];
const urlList = urlMatches.map(m => m[1]);

console.log(`Found ${urlList.length} URLs to submit to Bing & DuckDuckGo IndexNow API...`);

const payload = {
  host: DOMAIN,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList
};

async function submitIndexNow() {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log('✅ IndexNow API successfully notified Bing, Yandex, Seznam & DuckDuckGo!');
    } else {
      console.log(`IndexNow returned HTTP Status: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.log('IndexNow Submission note:', err.message);
  }
}

submitIndexNow();
