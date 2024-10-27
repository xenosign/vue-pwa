<template>
  <div class="bangkok-container">
    <div
      class="header-image"
      :style="{ backgroundImage: `url(${headerImage})` }"
    >
      <h1 class="city-title">방콕 (Bangkok)</h1>
    </div>

    <div class="content-section">
      <div class="info-card">
        <h2>도시 정보</h2>
        <p>태국의 수도이자 최대 도시</p>
        <div class="quick-facts">
          <div class="fact">
            <span class="label">인구:</span>
            <span class="value">약 1,070만 명</span>
          </div>
          <div class="fact">
            <span class="label">지역:</span>
            <span class="value">1,569 km²</span>
          </div>
          <div class="fact">
            <span class="label">기후:</span>
            <span class="value">열대성 사바나</span>
          </div>
        </div>
      </div>

      <div class="attractions">
        <h2>주요 관광지</h2>
        <div
          v-for="(spot, index) in attractions"
          :key="index"
          class="attraction-item"
        >
          <img :src="spot.image" :alt="spot.name" />
          <div class="attraction-info">
            <h3>{{ spot.name }}</h3>
            <p>{{ spot.description }}</p>
          </div>
        </div>
      </div>

      <div class="weather-section" v-if="weather">
        <h2>현재 날씨</h2>
        <div class="weather-info">
          <p class="temperature">{{ weather.temperature }}°C</p>
          <p class="humidity">습도: {{ weather.humidity }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const headerImage = ref('/api/placeholder/800/400');
const weather = ref(null);

const attractions = ref([
  {
    name: '왕궁 (Grand Palace)',
    description: '태국 왕실의 공식 거주지였던 화려한 건축물',
    image: '/api/placeholder/300/200',
  },
  {
    name: '왓 프라깨우 (Wat Phra Kaew)',
    description: '에메랄드 불상이 있는 태국에서 가장 신성한 사원',
    image: '/api/placeholder/300/200',
  },
  {
    name: '차오프라야 강',
    description: '방콕을 가로지르는 생명의 강',
    image: '/api/placeholder/300/200',
  },
]);

// 날씨 데이터 가져오기 (실제 구현 시 API 연동 필요)
onMounted(() => {
  weather.value = {
    temperature: 32,
    humidity: 75,
  };
});
</script>

<style scoped>
.bangkok-container {
  max-width: 100%;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

.header-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 20px;
}

.city-title {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  font-size: 2rem;
}

.content-section {
  padding: 16px;
}

.info-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.quick-facts {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

.fact {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.attraction-item {
  background: white;
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
}

.attraction-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.attraction-info {
  padding: 16px;
}

.attraction-info h3 {
  margin: 0 0 8px 0;
  color: #333;
}

.weather-section {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-top: 20px;
}

.temperature {
  font-size: 2rem;
  margin: 0;
  color: #333;
}

.humidity {
  color: #666;
  margin: 8px 0 0 0;
}

h2 {
  color: #333;
  margin: 0 0 16px 0;
  font-size: 1.5rem;
}
</style>
