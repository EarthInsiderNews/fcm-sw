importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAjLfddB43rovDypePm84FDZZVeYcEffi4",
  authDomain: "fir-c47c5.firebaseapp.com",
  projectId: "fir-c47c5",
  storageBucket: "fir-c47c5.firebasestorage.app",
  messagingSenderId: "176664112048",
  appId: "1:176664112048:web:bdd5a6ee78dcaf9c2e8475"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: payload.notification.icon
    }
  );
});
