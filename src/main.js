import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { app as firebaseApp } from './firebase';
import { getMessaging, getToken } from 'firebase/messaging';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.config.globalProperties.$firebase = firebaseApp;

// Firebase Messaging 초기화
const messaging = getMessaging(firebaseApp);

// 서비스 워커 등록
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')
    .then(function (registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function (error) {
      console.log('Service Worker registration failed:', error);
    });
}

// FCM 토큰 가져오기
getToken(messaging, {
  vapidKey:
    'BODvgdE8wFmxqqLtqPlCLv9oHLuJvA4bLnQKz-r00QZwB93YLKGWCTi59iPpJt4LGPU_tgHkInUITG6OOTlqB7E',
})
  .then((currentToken) => {
    if (currentToken) {
      // 토큰을 서버로 전송하거나 필요한 곳에 저장
      console.log('FCM 토큰:', currentToken);
    } else {
      console.log('토큰을 가져올 수 없습니다.');
    }
  })
  .catch((err) => {
    console.log('토큰 가져오기 오류:', err);
  });

app.mount('#app');
