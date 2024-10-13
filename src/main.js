import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { app as firebaseApp } from './firebase';

// 알림 권한 요청 함수
function requestNotificationPermission() {
  if ('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('알림 권한이 허용되었습니다.');
        // Firebase 메시징 초기화 등의 추가 로직
      } else {
        console.log('알림 권한이 거부되었습니다.');
      }
    });
  }
}

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.config.globalProperties.$firebase = firebaseApp;

// 앱 마운트 후 알림 권한 요청
app.mount('#app');

// Vue 인스턴스가 마운트된 후 실행
requestNotificationPermission();

// 전역 메서드로 등록 (필요시 컴포넌트에서 호출 가능)
app.config.globalProperties.$requestNotificationPermission =
  requestNotificationPermission;
