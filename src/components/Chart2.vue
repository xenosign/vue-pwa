<!-- LineChart.vue -->
<template>
  <div class="chart-wrapper">
    <canvas ref="lineChart"></canvas>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
} from 'chart.js';

// ChartJS 등록
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController
);

// props로 차트 데이터를 받아옴
const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
});

// lineChart를 담을 ref 변수
const lineChart = ref(null);

// 차트 인스턴스를 저장할 변수
let chartInstance = null;

// 차트 초기화 함수
const initializeChart = () => {
  console.log('!!', props.chartData);
  const ctx = lineChart.value.getContext('2d');

  // 기존 차트가 있으면 파괴
  if (chartInstance) {
    chartInstance.destroy();
  }

  // 새로운 차트 생성
  chartInstance = new ChartJS(ctx, {
    type: 'line',
    data: props.chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: '수익률 (%)',
          },
        },
        x: {
          title: {
            display: false,
            text: '날짜',
          },
          ticks: {
            callback: function (value) {
              const label = this.getLabelForValue(value);
              // 날짜 형식 변환: 20240930 -> 24.09.30
              return (
                label.slice(2, 4) +
                '.' +
                label.slice(4, 6) +
                '.' +
                label.slice(6, 8)
              );
            },
          },
        },
      },
    },
  });
};

// 컴포넌트가 마운트된 후 차트를 초기화
onMounted(() => {
  console.log('Chart Data on Mount:', props.chartData);
  initializeChart();
});

// chartData가 변경될 때마다 차트를 업데이트
watch(
  () => props.chartData,
  () => {
    if (lineChart.value) {
      console.log('🚀 ~ lineChart:', lineChart);
      initializeChart();
    }
  },
  { deep: true }
);
</script>

<style scoped>
.chart-wrapper {
  position: relative;
  width: 300px;
  height: 300px;
  padding-bottom: 20px;
  background-color: #6e2ff4;
}
</style>
