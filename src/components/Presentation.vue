<script setup>
import { ref, onMounted } from 'vue';


</script>


<template>
  <section class="presentation">
    <article class="presentation-inner">
      <p class="presentation-text">Hej!</p>       
      <h1 class="presentation-title">Jag är Maria,</h1>
      <p class="presentation-description">
  Stockholmsbaserad frontendutvecklare med förkärlek för 
  som älskar att skapa roliga och användbara projekt.
</p>

    </article>
  </section>
</template>


<style lang="scss" scoped>
.presentation {
    margin-bottom: 16px;
    border-bottom: 1px solid lightblue;
    padding: 16px;

    @media screen and (min-width: 700px) {
      padding: 32px;
      margin-bottom: 32px;

    }

    &-text {
      text-transform: uppercase;
        font-size:2rem;
        animation: wave 1.5s infinite;
        margin-bottom: 16px;


        @media screen and (min-width: 700px) {
          font-size: 3rem;
          margin-bottom: 32px;

        }
    }

    @keyframes wave {
    0%, 100% {
      transform: translate(0%, 0%) rotate(0deg);
    }
    50% {
      transform: translate(0%, 0%) rotate(-5deg);
    }
  }
    &-title {
        font-size: 2rem;
        line-height: 1.3;
        margin-top: 0;
        font-weight: 800;

        @media screen and (min-width: 700px) {
          font-size: 5rem;
          margin-bottom: 32px;
        }
    }

    &-description {
        font-weight: 400;
        margin-bottom: 1rem;
        font-size: 2rem;

        @media screen and (min-width: 700px) {
          font-size: 3rem;
        }
    }

}
</style>