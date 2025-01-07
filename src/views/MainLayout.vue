<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Startpage from './Startpage.vue';
</script>

<template>
<router-view>
      <Header/>
      <Startpage/>
      <Footer /> 
    </router-view>
  </template>
  
