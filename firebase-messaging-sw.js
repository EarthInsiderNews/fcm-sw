// Service Worker for Firebase Notifications
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Firebase Config
firebase.initializeApp({
  apiKey: "AIzaSyAjLfddB43rovDypePm84FDZZVeYcEffi4",
  authDomain: "fir-c47c5.firebaseapp.com",
  projectId: "fir-c47c5",
  storageBucket: "fir-c47c5.firebasestorage.app",
  messagingSenderId: "176664112048",
  appId: "1:176664112048:web:bdd5a6ee78dcaf9c2e8475"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Background notification received');
  
  const title = payload.notification.title || 'New Notification';
  const options = {
    body: payload.notification.body || 'You have a new message',
    icon: payload.notification.icon || 'https://cdn-icons-png.flaticon.com/512/3116/3116491.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/3116/3116491.png',
    vibrate: [200, 100, 200]
  };
  
  self.registration.showNotification(title, options);
});
