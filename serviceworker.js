self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('video-store').then(function (cache) {
            return cache.addAll([
                'index.html',
                'static/css/main.css',
                'static/js/main.js',
                'static/img/Natherine.jpg',
                'static/img/Tarwaan.jpg',
                'static/img/Wee.jpg',
                'static/img/girl.png',
                'static/audio/natherine.mp3',
                'static/audio/tarwaan.mp3',
                'static/audio/wee.mp3'
            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});