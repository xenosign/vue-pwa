importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyAmyFp_KmwuOIIF1t4-gjvrmQBp_73jXZQ',
  authDomain: 'kb-test-edbf4.firebaseapp.com',
  projectId: 'kb-test-edbf4',
  storageBucket: 'kb-test-edbf4.appspot.com',
  messagingSenderId: '1009919369072',
  appId: '1:1009919369072:web:2633c879e91dcaa94c39b5',
  measurementId: 'G-T9JGRY6ESM',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/pwa-192x192.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
