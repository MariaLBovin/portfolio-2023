<script setup>
import { selectedWork } from "../arrays/portfolioArray";
import { ref, onMounted, onUnmounted } from "vue";

const currentTranslate = ref(0);
const slideWidth = ref(0);
const slider = ref(null);

const updateSlideWidth = () => {
  if (slider.value) {
    slideWidth.value = slider.value.offsetWidth;
    currentTranslate.value = slideWidth.value;
  }
};

onMounted(() => {
  updateSlideWidth();
  window.addEventListener("resize", updateSlideWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSlideWidth);
});
</script>

<template>
  <section class="project" id="project">
    <h2 class="project-heading">Projekt</h2>
    <ul class="project-wrapper">
      <li v-for="(project, index) in selectedWork" :key="index" class="project-item">
        <div class="project-image-wrapper">
          <img
            :src="project.image[0].src"
            :alt="project.image[0].alt"
            class="project-image"
          />
        </div>
        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-text">{{ project.description }}</p>
          <p class="project-text">{{ project.techstack }}</p>
          <a :href="project.projektlink" class="project-link">
            Titta på projektet
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.project {
  padding: var(--gap);
  margin-bottom: var(--gap);

  @media screen and (min-width: 768px) {
    padding: calc(var(--gap) * 2);
    margin-bottom: calc(var(--gap) * 2);
  }

  &-heading {
    font-size: var(--mobile-h2);
    margin-bottom: var(--gap);

    @media screen and (min-width: 768px) {
      font-size: var(--desktop-h2);
      margin-bottom: calc(var(--gap) * 2);
    }
  }

  &-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gap);

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &-item {
    background: var(--almost-white);
    border: 1px solid var(--border-white);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    height: auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover,
    &:focus-within {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border: 1px solid var(--primary-blue);
    }
  }

  &-image-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--almost-white);
  }

  &-image {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  &-content {
    padding: var(--gap) calc(var(--gap)*2);
    background-color: var(--almost-white);
  }

  &-title {
    font-size: var(--mobile-h3);
    margin-bottom: calc(var(--gap) / 2);

    @media screen and (min-width: 768px) {
      font-size: var(--desktop-h3);
    }
  }

  &-text {
    font-size: var(--mobile-font);
    margin-bottom: var(--gap);
    color: var(--text-gray);

    @media screen and (min-width: 768px) {
      font-size: var(--desktop-font);
    }
  }

  &-link {
    color: black;
    text-decoration: underline;
    text-decoration-color: var(--primary-blue);
    font-size: var(--mobile-font);

    @media screen and (min-width: 768px) {
      font-size: var(--desktop-font);
    }

    &:hover,
    &:focus {
      color: var(--primary-hover);
    }
  }
}
</style>
