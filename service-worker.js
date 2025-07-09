self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('horario-612').then(function(cache) {
      return cache.addAll([
        '/',
        '/horario'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});