<script setup>

import Presentation from '../components/Presentation.vue';
import SliderStart from '../components/Projects.vue';
import Cv from '../components/Cv.vue'
import Contact from '../components/Contact.vue';

</script>

<template>
  <main class="startpage">
    <Presentation />
    <SliderStart id="project"/>
    <Cv id="cv"/>
    <Contact/>
  </main>
  
</template>

<style lang="scss" scoped>
.startpage{
 margin: calc(var(--gap)*4) 0; 
 flex: 1;
 
  @media screen and (min-width: 768px) {
    margin: calc(var(--gap)*5) 0;
  }

}


</style>