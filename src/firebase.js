import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyAmyFp_KmwuOIIF1t4-gjvrmQBp_73jXZQ',
  authDomain: 'kb-test-edbf4.firebaseapp.com',
  projectId: 'kb-test-edbf4',
  storageBucket: 'kb-test-edbf4.appspot.com',
  messagingSenderId: '1009919369072',
  appId: '1:1009919369072:web:2633c879e91dcaa94c39b5',
  measurementId: 'G-T9JGRY6ESM',
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { app, messaging };
