// Service Worker
self.addEventListener('install', function(e) {
    console.log('install success');
});

self.addEventListener('active', function(e) {
    self.clients.claim();
});

self.addEventListener('fetch', function() {
    
})