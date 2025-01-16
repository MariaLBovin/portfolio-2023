<script setup>
import { selectedWork } from "../arrays/portfolioArray";
import { ref, onMounted, onUnmounted } from "vue";

const currentTranslate = ref(0);
const slideWidth = ref(0);
const slider = ref(null);
const isFlipped = ref({});

const toggleFlipped = (index) => {
  isFlipped.value[index] = !isFlipped.value[index]
}

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
        :class="{ 'project-item--flipped': isFlipped[index] }"
        @click="toggleFlipped(index)"
        @keyup.space.enter="toggleFlipped(index)"
        tabindex="0"
        role="button"
        :aria-expanded="isFlipped[index]"
        :aria-label="`Visa mer information om ${project.title}`"
      >
        <div class="project-image-wrapper">
          <img
            :src="project.image[0].src"
            :alt="project.image[0].alt"
            class="project-image"
          />
        </div>
        <div
          class="project-content"
          :aria-hidden="!isFlipped[index]"
          :style="{ display: isFlipped[index] ? 'flex' : 'none' }"
        >
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-text">{{ project.description }}</p>
          <p class="project-text">{{ project.techstack }}</p>
          <a
            :href="project.projektlink"
            class="project-link"
            tabindex="isFlipped[index] ? 0 : -1"
          >
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
    position: relative;
    background: var(--almost-white);
    border: 1px solid var(--border-white);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    overflow: hidden;

    &:hover,
    &:focus {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border: 1px solid var(--primary-blue);
    }

    &--flipped .project-image-wrapper {
      display: none; 
    }

    &--flipped .project-content {
      display: flex; 
    }
  }

  &-image-wrapper {
    opacity: 1;
    transition: opacity 0.3s ease;
    display: flex; 
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
    background: var(--almost-white);
    transition: opacity 0.2s ease;
    gap: 16px;
    padding: 0 64px;

    &.active {
      display: flex;
      opacity: 1;
    }
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
    color: var(--primary-blue);
    text-decoration: underline;

    &:hover,
    &:focus {
      color: var(--primary-hover);
    }
  }

}

</style>
