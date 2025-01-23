<script setup>
import { ref, onMounted } from 'vue';

const getPreferredTheme = () => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  } else {
    return 'light';
  }
};

const theme = ref(getPreferredTheme());

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
  localStorage.setItem('theme', theme.value);
};

onMounted(() => {
  document.documentElement.setAttribute('data-theme', theme.value);
});
</script>

<template>
  <footer class="footer">
    <p class="footer-text">
      &copy; {{ new Date().getFullYear() }} Maria Larsson Bovin. Alla rättigheter förbehållna.
    </p>
    <button
      class="footer-toggle-button"
      @click="toggleTheme"
      :aria-label="theme === 'light' ? 'Aktivera mörkt läge' : 'Aktivera ljust läge'"
    >
      {{ theme === 'light' ? '🌙 Dark' : '☀️ Light' }}
    </button>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: var(--gap);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (min-width: 768px) {
      padding: calc(var(--gap)*2);
    }

  &-text {
    font-size: var(--mobile-font);
    color: var(--text-gray);
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: var(--desktop-font);
    }
  }
  &-toggle-button {
  padding: 0.5rem 1rem;
  border: 2px solid var(--primary-hover);
  border-radius: 5px;
  cursor: pointer;
  font-size: var(--mobile-font);
  width: 150px;

    
  &:hover {
    background-color: var(--primary-hover);
  }
  @media screen and (min-width:768px) {
      width: 100px;
    }
}
}
</style>
