importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyAzKCw7qaeWjdMsHikXV4mMnJ1aPQwchQI',
  authDomain: 'alarm-46c15.firebaseapp.com',
  projectId: 'alarm-46c15',
  storageBucket: 'alarm-46c15.firebasestorage.app',
  messagingSenderId: '224239831826',
  appId: '1:224239831826:web:2c73650514d062787001cb',
  measurementId: 'G-B05TZS38KE',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
