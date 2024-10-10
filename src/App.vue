<template>
  <div id="app-container">
    <div id="app">
      <header>
        <h1>헤더 메뉴 예시</h1>
      </header>
      <main>
        <router-view></router-view>
      </main>
      <footer>
        <div class="footer-menu">
          <button class="menu-item" @click="navigateTo('/search')">
            <Search class="icon" />
            <span>차트</span>
          </button>
          <button class="menu-item" @click="navigateTo('/')">
            <Home class="icon" />
            <span>홈</span>
          </button>
          <button class="menu-item" @click="navigateTo('/fire')">
            <User class="icon" />
            <span>메세지</span>
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Home, Search, User } from 'lucide-vue-next';

const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

#app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
  width: 100%;
  max-width: 414px; /* iPhone 12 Pro Max width */
  height: 100vh;
  max-height: 896px; /* iPhone 12 Pro Max height */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

header {
  background-color: #f8f8f8;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  margin: 0;
  font-size: 1.2rem;
}

main {
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
}

footer {
  background-color: #f8f8f8;
  padding: 0.5rem;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.footer-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #2c3e50;
  font-size: 0.7rem;
}

.icon {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
}
</style>
