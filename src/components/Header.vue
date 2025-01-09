<script setup>
import { ref } from 'vue';

const menu = ref(false);

const toggleMenu = () => {
  menu.value = !menu.value;
};

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    menu.value = false; // Stäng menyn efter navigering
  }
};
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <img src="/logo.png" alt="Maria L Bovin" />
        <p class="header__title">Maria Larsson Bovin</p>
      </div>

      <button
        class="header__menu-toggle"
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

      <nav :class="['header__nav', { 'header__nav--open': menu }]">
        <ul class="header__navlist">
          <li><a @click.prevent="scrollToSection('project')">Portfolio</a></li>
          <li><a @click.prevent="scrollToSection('cv')">CV</a></li>
          <li><a @click.prevent="scrollToSection('contact')">Kontakt</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 16px;
  background-color: #fff;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }

  &__logo {
    display: flex;
    align-items: center;

    img {
      height: 40px;
    }

    .header__title {
      margin-left: 8px;
      font-size: 2rem;
      white-space: nowrap;
      color: black;

      @media screen and (min-width: 768px) {
        font-size: 3rem;
      }
    }
  }

  &__menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #08c5d5;
    color: black;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    z-index: 2;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  &__nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #08c5d5;
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

  &__navlist {
    list-style: none;
    padding: 64px 16px 16px 0px;
    margin: 0 32px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 64px;
      padding: 0;
      margin: 0
    }

    li {
      margin: 8px 0;

      @media screen and (min-width: 768px) {
        margin: 0;
      }

      a {
        text-decoration: none;
        color: black;
        font-size: 2rem;

        &:hover {
          text-decoration: underline;
        }

        @media screen and (min-width: 768px) {
          font-size: 3rem;
          &:hover {
            color: #08c5d5;
          }
        }
      }
    }
  }
}
</style>
