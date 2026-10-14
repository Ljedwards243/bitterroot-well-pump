// Submits every sitemap URL to IndexNow (Bing, Yandex, Seznam, Naver, Yep) so changes are
// picked up within hours. Bing's index also feeds ChatGPT and Copilot search (brief §17).
// Runs from .github/workflows/indexnow.yml after each production deploy; can also be run
// by hand: node scripts/indexnow.mjs
// The key must match the file served at /<key>.txt (public/da3146979a122059cfebe660c2041e7f.txt).

const SITE = "https://bitterrootwellpump.com";
const KEY = "da3146979a122059cfebe660c2041e7f";

let xml;
try {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  xml = await res.text();
} catch (err) {
  // Domain not pointed at Vercel yet: nothing to submit.
  console.warn(`Skipping IndexNow: could not fetch sitemap (${err.message}).`);
  process.exit(0);
}

const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs, HTTP ${res.status}`);
if (res.status >= 400) process.exit(1);
