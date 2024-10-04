<template>
  <div>
    <h1>Hello, firebase</h1>
    <button @click="requestNotificationPermission">알림 권한 요청</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getMessaging, getToken } from 'firebase/messaging';
import { app as firebaseApp } from '../firebase.js';

const fcmToken = ref(null);

const requestNotificationPermission = async () => {
  try {
    const messaging = getMessaging(firebaseApp);
    const token = await getToken(messaging, {
      vapidKey:
        'BODvgdE8wFmxqqLtqPlCLv9oHLuJvA4bLnQKz-r00QZwB93YLKGWCTi59iPpJt4LGPU_tgHkInUITG6OOTlqB7E',
    });
    fcmToken.value = token;
    console.log('FCM 토큰:', token);
    alert(token);
    // 여기서 토큰을 서버로 전송하거나 저장할 수 있습니다.
  } catch (error) {
    console.error('알림 권한을 얻는데 실패했습니다:', error);
  }
};
</script>
