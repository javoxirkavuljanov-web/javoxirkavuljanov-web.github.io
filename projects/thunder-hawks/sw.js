// Thunder Hawks Service Worker
// Version 1.0.0

const CACHE_NAME = 'thunder-hawks-v1.0.0';
const STATIC_CACHE = 'thunder-hawks-static-v1.0.0';
const DYNAMIC_CACHE = 'thunder-hawks-dynamic-v1.0.0';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  // External resources
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Files to cache on demand
const DYNAMIC_FILES = [
  // API endpoints would go here
  '/api/players',
  '/api/games',
  '/api/news',
  '/api/stats'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Service Worker: Static files cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Error caching static files', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated successfully');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve cached files or fetch from network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension requests
  if (url.protocol === 'chrome-extension:') {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache', request.url);
          return cachedResponse;
        }
        
        // Otherwise fetch from network
        return fetch(request)
          .then((networkResponse) => {
            // Don't cache if not a valid response
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            
            // Clone the response
            const responseToCache = networkResponse.clone();
            
            // Cache dynamic content
            if (shouldCacheDynamically(request.url)) {
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  console.log('Service Worker: Caching dynamic content', request.url);
                  cache.put(request, responseToCache);
                });
            }
            
            return networkResponse;
          })
          .catch((error) => {
            console.log('Service Worker: Fetch failed, serving offline fallback', error);
            
            // Return offline fallback for HTML pages
            if (request.headers.get('accept').includes('text/html')) {
              return caches.match('/offline.html') || createOfflinePage();
            }
            
            // Return offline fallback for images
            if (request.headers.get('accept').includes('image')) {
              return caches.match('/offline-image.svg') || createOfflineImage();
            }
            
            throw error;
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync triggered', event.tag);
  
  if (event.tag === 'newsletter-signup') {
    event.waitUntil(syncNewsletterSignup());
  }
  
  if (event.tag === 'ticket-booking') {
    event.waitUntil(syncTicketBooking());
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New Thunder Hawks update!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/icons/action-explore.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/action-close.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Thunder Hawks', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked', event);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  } else if (event.action === 'close') {
    // Just close the notification
    return;
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.matchAll({ type: 'window' })
        .then((clientList) => {
          for (let client of clientList) {
            if (client.url === '/' && 'focus' in client) {
              return client.focus();
            }
          }
          if (clients.openWindow) {
            return clients.openWindow('/');
          }
        })
    );
  }
});

// Message handling from main thread
self.addEventListener('message', (event) => {
  console.log('Service Worker: Message received', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE)
        .then((cache) => {
          return cache.addAll(event.data.payload);
        })
    );
  }
});

// Utility functions
function shouldCacheDynamically(url) {
  // Cache API responses and images
  return url.includes('/api/') || 
         url.includes('.jpg') || 
         url.includes('.png') || 
         url.includes('.svg') ||
         url.includes('.webp');
}

function createOfflinePage() {
  return new Response(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thunder Hawks - Offline</title>
      <style>
        body {
          font-family: 'Rajdhani', sans-serif;
          background: linear-gradient(135deg, #1e3a8a 0%, #ea580c 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          margin: 0;
          text-align: center;
        }
        .offline-content {
          max-width: 500px;
          padding: 2rem;
        }
        .offline-icon {
          font-size: 4rem;
          margin-bottom: 2rem;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        .retry-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid white;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .retry-btn:hover {
          background: white;
          color: #1e3a8a;
        }
      </style>
    </head>
    <body>
      <div class="offline-content">
        <div class="offline-icon">⚡</div>
        <h1>Thunder Hawks</h1>
        <p>You're currently offline. Please check your internet connection and try again.</p>
        <button class="retry-btn" onclick="window.location.reload()">Retry</button>
      </div>
    </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' }
  });
}

function createOfflineImage() {
  // Return a simple SVG placeholder
  const svg = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1e3a8a"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" 
            fill="white" text-anchor="middle" dy=".3em">
        Thunder Hawks
      </text>
      <text x="50%" y="70%" font-family="Arial, sans-serif" font-size="16" 
            fill="#ea580c" text-anchor="middle" dy=".3em">
        Image unavailable offline
      </text>
    </svg>
  `;
  
  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' }
  });
}

async function syncNewsletterSignup() {
  try {
    // Get stored newsletter signups from IndexedDB
    const signups = await getStoredNewsletterSignups();
    
    for (const signup of signups) {
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(signup)
        });
        
        if (response.ok) {
          await removeStoredNewsletterSignup(signup.id);
          console.log('Newsletter signup synced successfully');
        }
      } catch (error) {
        console.error('Failed to sync newsletter signup:', error);
      }
    }
  } catch (error) {
    console.error('Error in newsletter sync:', error);
  }
}

async function syncTicketBooking() {
  try {
    // Get stored ticket bookings from IndexedDB
    const bookings = await getStoredTicketBookings();
    
    for (const booking of bookings) {
      try {
        const response = await fetch('/api/tickets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(booking)
        });
        
        if (response.ok) {
          await removeStoredTicketBooking(booking.id);
          console.log('Ticket booking synced successfully');
        }
      } catch (error) {
        console.error('Failed to sync ticket booking:', error);
      }
    }
  } catch (error) {
    console.error('Error in ticket booking sync:', error);
  }
}

// IndexedDB helper functions (simplified)
async function getStoredNewsletterSignups() {
  // Implementation would use IndexedDB to retrieve stored signups
  return [];
}

async function removeStoredNewsletterSignup(id) {
  // Implementation would remove the signup from IndexedDB
  console.log('Removing newsletter signup:', id);
}

async function getStoredTicketBookings() {
  // Implementation would use IndexedDB to retrieve stored bookings
  return [];
}

async function removeStoredTicketBooking(id) {
  // Implementation would remove the booking from IndexedDB
  console.log('Removing ticket booking:', id);
}

// Periodic background sync for live scores
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'live-scores') {
    event.waitUntil(updateLiveScores());
  }
});

async function updateLiveScores() {
  try {
    const response = await fetch('/api/live-scores');
    if (response.ok) {
      const scores = await response.json();
      
      // Broadcast to all clients
      const clients = await self.clients.matchAll();
      clients.forEach(client => {
        client.postMessage({
          type: 'LIVE_SCORES_UPDATE',
          data: scores
        });
      });
    }
  } catch (error) {
    console.error('Failed to update live scores:', error);
  }
}

console.log('Service Worker: Loaded successfully');