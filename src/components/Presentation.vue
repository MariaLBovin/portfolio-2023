<script setup>
import { ref, onMounted } from 'vue';


</script>


<template>
  <section class="presentation">
    <article class="presentation-inner">
      <p class="presentation-text">Hej!</p>       
      <h1 class="presentation-title">Jag är Maria,</h1>
      <p class="presentation-description">
  Stockholmsbaserad frontendutvecklare med förkärlek tillgänglighet, bra användargränssnitt och problemlösning 
  som älskar att skapa roliga och användbara projekt.
</p>

    </article>
  </section>
</template>


<style lang="scss" scoped>
.presentation {
    margin-bottom: var(--gap);
    padding: var(--gap);

    @media screen and (min-width: 768px) {
      padding: calc(var(--gap)*2);
      margin-bottom: calc(var(--gap)*2);

    }

    &-text {
      text-transform: uppercase;
        font-size:var(--mobile-font);
        animation: wave 1.5s infinite;
        margin-bottom: var(--gap);


        @media screen and (min-width: 768px) {
          font-size: var(--desktop-font);
          margin-bottom: calc(var(--gap)*2);

        }
    }

    @keyframes wave {
    0%, 100% {
      transform: translate(0%, 0%) rotate(0deg);
    }
    50% {
      transform: translate(0%, 0%) rotate(-2deg);
    }
  }
    &-title {
        font-size: var(--mobile-h1);
        line-height: 1.3;
        margin-top: 0;
        font-weight: 800;

        @media screen and (min-width: 768px) {
          font-size: var(--desktop-h1);
          margin-bottom: calc(var(--gap)*2);
        }
    }

    &-description {
        font-weight: 400;
        margin-bottom: 1rem;
        font-size: var(--mobile-font);
        line-height: 1.5;

        @media screen and (min-width: 700px) {
          font-size: var(--desktop-font);
        }
    }

}
</style>