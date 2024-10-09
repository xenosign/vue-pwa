<template>
  <div>
    <h1>주식 포트폴리오 비율</h1>
    <DonutChart :data="stockData" :width="390" :height="350" />
  </div>
</template>

<script setup>
import DonutChart from '@/components/DonutChart.vue';
import { ref } from 'vue';

// 차트 데이터를 아래와 같이 전달하면 됩니다! 보유량이 큰 순서대로 보내시면 됩니다!
const stockData = ref([
  { name: '삼성전자', value: 3000000 },
  { name: 'SK', value: 2000000 },
  { name: '네이버', value: 1500000 },
  { name: '카카오', value: 1000000 },
  { name: 'LG화학', value: 1000000 },
  { name: '쿠팡', value: 700000 },
  { name: 'LG전자', value: 500000 },
]);
</script>
