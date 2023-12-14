<script setup>
import { ref, onMounted } from 'vue';
const textElement = ref(null);

const word = ['Vue', 'React', 'Vanilla JS', 'Axios', 'UI/UX'];
let i = ref(0);
let j = ref(0);
let currentWord = ref([]);
let isDeleting = ref(false);
let isEnd = ref(false);

const loop = () => {
  isEnd.value = false;

  textElement.value.innerHTML = currentWord.value.join('');

  if (i.value < word.length) {
    if (!isDeleting.value && j.value <= word[i.value].length) {
      currentWord.value.push(word[i.value][j.value]);
      j.value++;
      textElement.value.innerHTML = currentWord.value.join('');
    }

    if (isDeleting.value && j.value <= word[i.value].length) {
      currentWord.value.pop();
      j.value--;
      textElement.value.innerHTML = currentWord.value.join('');
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
    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = isEnd.value ? 2000 : isDeleting.value ? spedUp : normalSpeed;
    setTimeout(loop, time);
  }
}

onMounted(() => {
  loop();
});

</script>

<template>
    <section class="presentation">
        <p class="presentation__greeting">Hej!</p>
        <h1 class="presentation__title">Jag är Maria,</h1>
        <p class="presentation__description">Stockholmsbaserad student som just nu nördar ner mig i
            <span class="presentation__text presentation__text--highlight" ref="textElement" v-html="currentWord"></span>
            <span class="presentation__details d-block">med målet att bli färdig frontend-utvecklare juni 2024.</span>
        </p>
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
        font-size:1rem;
        letter-spacing: 0.18rem;
        margin-top: 0;

        @media screen and (min-width: 700px) {
          font-size: 1.8rem;
        }
    }

    &__title {
        font-size: 2rem;
        line-height: 1.3;
        margin-top: 0;
        font-weight: 800;

        @media screen and (min-width: 700px) {
          font-size: 5rem;
        }
    }

    &__description {
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        font-weight: 400;
        margin-bottom: 1rem;
        font-size: 1.8rem;

        @media screen and (min-width: 700px) {
          font-size: 2rem;
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