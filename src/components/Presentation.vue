<script setup>
import { ref, onMounted } from 'vue';
const textElement = ref(null);

const word = ['tillgänglighet', 'användarvänlighet', 'problemlösning', ];
let i = ref(0);
let j = ref(0);
let currentWord = ref([]);
let isDeleting = ref(false);
let isEnd = ref(false);

const loop = () => {
  isEnd.value = false;
  let shouldUpdate = false;

  if (i.value < word.length) {
    if (!isDeleting.value && j.value <= word[i.value].length) {
      currentWord.value.push(word[i.value][j.value]);
      j.value++;
      shouldUpdate = true;
    }

    if (isDeleting.value && j.value <= word[i.value].length) {
      currentWord.value.pop();
      j.value--;
      shouldUpdate = true;
    }

    if (j.value === word[i.value].length) {
      isEnd.value = true;
      isDeleting.value = true;
    }

    if (isDeleting.value && j.value === 0) {
      currentWord.value = [];
      isDeleting.value = false;
      i.value++;
      if (i.value === word.length) {
        i.value = 0;
      }
    }

    if (shouldUpdate) {
      textElement.value.textContent = currentWord.value.join('');
    }

    const time = isEnd.value ? 500 : isDeleting.value ? 100 : 100;
    setTimeout(loop, time);
  }
};


onMounted(() => {
  loop();
});

</script>

<template>
  <section class="presentation">
    <article class="presentation-inner">
      <p class="presentation__greeting">Hej!</p>
      <h1 class="presentation__title">Jag är Maria,</h1>
      <p class="presentation__description">Stockholmsbaserad frontendutvecklare med förkärlek för
        <span class="presentation__text presentation__text--highlight" ref="textElement" v-html="currentWord" aria-live="polite"></span>
        <span class="presentation__details d-block">som älskar att skapa roliga och användbara projekt.</span>
      </p>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.presentation {
    margin-top: 32px;
    margin-bottom: 32px;
    border-bottom: 1px solid lightblue;
    padding-bottom: 20px;

    &__greeting {
        text-transform: uppercase;
        font-size:2rem;
        letter-spacing: 0.18rem;
        margin-top: 0;

        @media screen and (min-width: 700px) {
          font-size: 3rem;
        }
    }

    &__title {
        font-size: 2rem;
        line-height: 1.3;
        margin-top: 0;
        font-weight: 800;

        @media screen and (min-width: 700px) {
          font-size: 5rem;
          margin-bottom: 32px;
        }
    }

    &__description {
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        font-weight: 400;
        margin-bottom: 1rem;
        font-size: 2rem;

        @media screen and (min-width: 700px) {
          font-size: 3rem;
        }
    }

    &__text {
        background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(255, 255, 255, 1) 100%);
    }

    &__details {
        display: block !important;
    }
}
</style>