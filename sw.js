const CACHE_NAME = "citato-cache-v1";
const ASSETS = [
  "index.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
  // můžeš přidat i CSS/JS soubory pokud jsou samostatně
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
