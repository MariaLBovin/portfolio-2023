<script setup>
import { selectedWork } from "../arrays/portfolioArray";
import { ref, computed, onMounted, onUnmounted } from "vue";

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
      <li
        v-for="(project, index) in selectedWork"
        :key="index"
        class="project-item"
      >
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
          <a :href="project.projektlink" class="project-link"
            >Titta på projektet</a
          >
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.project {
  padding: 16px;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  &-heading {
    font-size: 2rem;
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
      font-size: 4rem;
      margin-bottom: 3rem;
    }
  }

  &-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &-item {
    position: relative;
    background: #f9f9f9;
    padding: 0;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    overflow: hidden;

    &:hover,
    &:focus-within {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

      .project-image-wrapper {
        opacity: 0;
      }

      .project-content {
        opacity: 1;
      }
    }
  }
  &-image-wrapper {
    transition: opacity 0.2s ease;
    opacity: 1;
  }
  &-image {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  &-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(255, 255, 255, 0.95);
    opacity: 0;
    transition: opacity 0.2s ease;
    gap: 16px;
    padding: 0 64px;
  }

  &-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  &-text {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #666;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  &-link {
    display: block;
    color: inherit;
    text-decoration: underline;
    text-decoration-color: #08c5d5;

    &:hover,
    &:focus {
      color: #0056b3;
    }

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
}
</style>
