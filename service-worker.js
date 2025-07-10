self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('horario-612-v4').then(function(cache) { // Aquí cambiamos el nombre de la caché a 'horario-612-v4'
      return cache.addAll([
        './',
        '/Horario'
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
