const CACHE_NAME = 'VERSION-1';
const urlsToCache = ['index.html', 'offline.html'];




const self = this;

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
 
});

// Listen for Requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('offline.html'))
            })
    )

});

// Activate 

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                    keys.filter((key) => key !== CACHE_NAME)
                        .map((key) => caches.delete(key))
            )
        })

    )

})
