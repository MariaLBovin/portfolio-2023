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
      class="theme-toggle"
      @click="toggleTheme"
      :aria-label="theme === 'light' ? 'Aktivera mörkt läge' : 'Aktivera ljust läge'"
    >
      {{ theme === 'light' ? '🌙 Mörkt läge' : '☀️ Ljust läge' }}
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
  .theme-toggle {
  padding: 0.5rem 1rem;
  background-color: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: var(--mobile-font);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-hover);
  }
}
}
</style>
