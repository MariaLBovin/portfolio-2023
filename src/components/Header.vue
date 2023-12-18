<script setup>
import { ref } from 'vue';

const menu = ref(false);

const toggleMenu = () => {
  menu.value = !menu.value;
  console.log('klickade');
}
</script>

<template>
  <header class="header">
    <div class="header__wrapper"> 
      <router-link to="/" class="header__logo">
        <img src="/logo.png" alt="Maria L Bovin">
        <p class="header__title">Maria Larsson Bovin</p>
      </router-link>
      <nav :class="{ 'hidden': !menu, 'header__nav': menu }" aria-label="main" :aria-hidden="!menu">
        <ul :class="{ 'header__navlist--showmenu': menu }">
            <div class="header-nav-wrapper">
            <li class="header__navitem" >
                <router-link to="/portfolio/" class="header__navitem-link" @click="toggleMenu">Portfolio</router-link>
            </li>
            <li class="header__navitem">
                <router-link to="/cv/" class="header__navitem-link" @click="toggleMenu">CV</router-link>
            </li>
            <li class="header__navitem">
              <router-link to="/contact/" class="header__navitem-link" @click="toggleMenu">Kontakt</router-link>
            </li>
            </div>
        </ul>
    </nav>
    <nav class="header__desktop-nav" aria-label="desktopMain">
        <ul class="header__desktop-navlist">
            <div class="header__desktop-navwrapper">
            <li class="header__navitem">
                <router-link to="/portfolio/" class="header__navitem-link">Portfolio</router-link>
            </li>
            <li class="header__navitem">
                <router-link to="/cv/" class="header__navitem-link">CV</router-link>
            </li>
            <li class="header__navitem">
              <router-link to="/contact/" class="header__navitem-link">Kontakt</router-link>
            </li>
            </div>
        </ul>
    </nav>
    <button class="header__navbutton" @click="toggleMenu" aria-label="toggle-button" aria-controls="mainNavigation" :aria-expanded="menu.toString()">
        <span class="header__menu-icon material-icons" v-show="!menu">menu</span>
        <span class="header__close-icon material-icons" v-show="menu">close</span>
      </button>
    </div>

  </header>
</template>

<style lang="scss" scoped>
.header {
  &__wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    align-items: center;

  }

  &__logo {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      text-decoration: none;
      
    }

    @media screen and (min-width: 700px) {
      margin: 0;
      flex: 0 0 40%;
    }

    img {
      width: 50px;
    }
  }

  &__title {
    padding-left: 5px;
    font-size: 2rem;

    @media screen and (min-width: 700px) {
      font-size: 3rem;
      padding-left: 10px;
    }
  }

  &-nav-wrapper {
    margin-top: 40px;
    padding:0 32px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 700px) {

    }
  }

  &__navlist {
    transform: translateY(-100%);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    list-style: none;
    padding-top: 4rem;
    z-index: 1;

    &--showmenu {
      transform: translateY(0);
      background-color: #08c5d5;
      right: 0;
      left: 65%;
      top: 0;
      height: fit-content;
      padding-bottom: 20px;
      padding-top: 45px;
      border-radius: 0 0 0 45px;
      margin: 0;
      position: fixed;
      z-index: 2;
    }
  }

  &__navbutton {
    padding: 4px;
    border-radius: 50%;
    background: #08c5d5;
    cursor: pointer;
    height: 40px;
    width: 40px;
    border: none;
    z-index: 2;
    position: fixed;
    right: 20px;

    @media screen and (min-width: 700px) {
      display: none;
    }
  }

  &__menu-icon, &__close-icon {
    color: black;
  }

  &__navitem {
    font-size: 2rem;
    display: block;
    padding-bottom: 5px;

    &-link {
      color: black;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        color:#08c5d5;
      }
    }
    

    @media screen and (min-width: 700px) {
      font-size: 3rem;
    }
  }

  &__desktop-nav {
    display: none;

    @media screen and (min-width: 700px) {
        display: flex;
        width: 100%;
    }

    &list {
        display: flex;
        width:100%;
    }
    &wrapper {
        display: flex;
        flex-direction: row;
      justify-content: flex-end;
      gap: 64px;
      flex: 0 0 90%;
    }
  }

}

</style>
