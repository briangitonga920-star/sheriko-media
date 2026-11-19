self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('sheriko-v1').then(cache => {
      return cache.addAll(['/sheriko-media/', '/sheriko-media/index.html', '/sheriko-media/manifest.json']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
