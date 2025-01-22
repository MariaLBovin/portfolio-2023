<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const menu = ref(false);
const isScrollingUp = ref(true);
const lastScrollY = ref(window.scrollY || 0);

const toggleMenu = () => {
  menu.value = !menu.value;
};

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    menu.value = false;
  }
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isScrollingUp.value = currentScrollY < lastScrollY.value || currentScrollY === 0;
  lastScrollY.value = currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header 
    class="header" 
    :class="{ 'header--hidden': !isScrollingUp }"
  >
    <div class="header-wrapper">
      <div class="header-logo">
        <img src="/logo.png" alt="Maria L Bovin" class="header-logo-img" />
        <p class="header-title">Maria Larsson Bovin</p>
      </div>

      <button
        class="header-menu-toggle"
        @click="toggleMenu"
        :aria-expanded="menu.toString()"
        aria-label="Toggle navigation"
      >
        <span v-if="!menu">
          <i class="fa-solid fa-bars"></i>
        </span>
        <span v-else>
          <i class="fa-solid fa-xmark"></i>
        </span>
      </button>

      <nav :class="['header-nav', { 'header__nav--open': menu }]">
        <ul class="header-navlist">
          <li class="header-navlist-item"><a href='#' @click.prevent="scrollToSection('project')">Portfolio</a></li>
          <li class="header-navlist-item"><a a href='#' @click.prevent="scrollToSection('cv')">CV</a></li>
          <li class="header-navlist-item"><a a href='#' @click.prevent="scrollToSection('contact')">Kontakt</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: var(--gap);
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  max-width: 1223px;
  z-index: 1;

  &--hidden {
    transform: translateY(-100%);
    opacity: 0;
  }

  @media screen and (min-width: 768px) {
    padding: calc(var(--gap) * 2);
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;

  }

  &-logo {
    display: flex;
    align-items: center;

    &-img {
      height: 40px;
    }

    .header-title {
      margin-left: calc(var(--gap) / 2);
      font-size: var(--mobile-font);

      @media screen and (min-width: 768px) {
        font-size: var(--desktop-font);
      }
    }
  }

  &-menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-blue);
    color: black;
    border: none;
    font-size: var(--mobile-font);
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    z-index: 2;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  &-nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--primary-blue);
    width: 30%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 45%;

    &--open {
      display: flex;
      z-index: 1;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      position: static;
      flex-direction: row;
      background-color: transparent;
      box-shadow: none;
      width: auto;
    }
  }

  &-navlist {
    list-style: none;
    padding: calc(var(--gap) * 4) var(--gap) var(--gap) 0;
    margin: 0 calc(var(--gap) * 2);
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: calc(var(--gap) * 4);
      padding: 0;
      margin: 0;
    }

    li {
      margin: calc(var(--gap) / 2) 0;

      @media screen and (min-width: 768px) {
        margin: 0;
      }

      a {
        text-decoration: none;
        font-size: var(--mobile-font);
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }

        @media screen and (min-width: 768px) {
          font-size: var(--desktop-font);
          &:hover {
            color: var(--primary-blue);
          }
        }
      }
    }
  }
}
</style>
