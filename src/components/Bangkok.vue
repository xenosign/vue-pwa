<!-- <template>
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

// 실제 방콕 도시 전경 이미지
const headerImage = ref(
  'https://images.unsplash.com/photo-1583491470869-ca0e85bd8a5d'
);

const attractions = ref([
  {
    name: '왕궁 (Grand Palace)',
    description: '태국 왕실의 공식 거주지였던 화려한 건축물',
    image: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763',
  },
  {
    name: '왓 프라깨우 (Wat Phra Kaew)',
    description: '에메랄드 불상이 있는 태국에서 가장 신성한 사원',
    image: 'https://images.unsplash.com/photo-1590579629391-5380a5d730ef',
  },
  {
    name: '차오프라야 강',
    description: '방콕을 가로지르는 생명의 강',
    image: 'https://images.unsplash.com/photo-1617170788899-c6f3d0d9e2a7',
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
  height: 400px; /* 높이를 증가시켜 더 큰 이미지 표시 */
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
  font-size: 2.5rem; /* 글자 크기 증가 */
}

.content-section {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.info-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.quick-facts {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
}

.fact {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.attraction-item {
  background: white;
  border-radius: 12px;
  margin-bottom: 24px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.attraction-item:hover {
  transform: translateY(-4px);
}

.attraction-item img {
  width: 100%;
  height: 300px; /* 이미지 높이 증가 */
  object-fit: cover;
}

.attraction-info {
  padding: 24px;
}

.attraction-info h3 {
  margin: 0 0 12px 0;
  color: #333;
  font-size: 1.3rem;
}

.weather-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-top: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.temperature {
  font-size: 2.5rem;
  margin: 0;
  color: #333;
}

.humidity {
  color: #666;
  margin: 12px 0 0 0;
  font-size: 1.1rem;
}

h2 {
  color: #333;
  margin: 0 0 20px 0;
  font-size: 1.8rem;
}

@media (min-width: 768px) {
  .attractions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }

  .attraction-item {
    margin-bottom: 0;
  }
}
</style> -->
