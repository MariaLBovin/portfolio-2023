<script setup>

import Presentation from '../components/Presentation.vue';
import SliderStart from '../components/SliderStart.vue';
import Cv from '../components/Cv.vue'

</script>

<template>
  <div class="startpage">
    <Presentation/>
    <SliderStart/>
    <Cv/>
    <section class="startpage__contact">
      <h3 class="startpage__contact-heading">Vill du ta en fika?</h3>
      <button class="startpage__contact-button">
        <a href="mailto:maria.bovin@gmail.com">Hör av dig!</a>
      </button>
      
    </section>
  </div>
  
</template>

<style lang="scss" scoped>
.startpage{
 margin-bottom: 32px; 
 flex: 1;
 
  @media screen and (min-width: 700px) {
    margin-bottom: 64px;;
  }
  &__contact {
  text-align: center;

    &-heading {
      font-size: 1.8rem;
      margin-bottom: 16px;

      @media screen and (min-width: 700px){
        font-size: 3rem;
        margin-bottom: 32px
      }

    }

      &-button {
      background-color: #08c5d5;
        display: inline-block;
        text-align: center;
        padding: 16px;
        text-decoration: none;
        color: #000;
        border-radius: 16px;
        cursor: pointer;
        border: none;

        a {
          color: black;
          text-decoration: none;
          font-size: 1.5rem;

          &:hover {
            text-decoration: underline;
          }

          @media screen and (min-width: 700px) {
            font-size: 3rem; 
          }
        }
    }
}
}


</style>