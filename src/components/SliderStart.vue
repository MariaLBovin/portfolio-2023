<script setup>
import { selectedWork } from "../arrays/portfolioArray";
import { ref, computed, onMounted, onUnmounted } from "vue";

const slides = ref(selectedWork);

const currentIndex = ref(0);
const currentTranslate = ref(0);
const slideWidth = ref(0);
const slider = ref(null);

const visibleSlides = computed(() => {
  return [
    ...slides.value.slice(-1),
    ...slides.value,
    ...slides.value.slice(0, 1),
  ];
});

// Uppdatera bredden på slides (används för beräkning av translateX)
const updateSlideWidth = () => {
  if (slider.value) {
    slideWidth.value = slider.value.offsetWidth;
    currentTranslate.value = slideWidth.value; // Starta på första riktiga sliden
  }
};

// Nästa slide
const nextSlide = () => {
  currentIndex.value++;
  if (currentIndex.value >= slides.value.length + 1) {
    // Återställ till första riktiga bilden
    currentIndex.value = 1;
    setTimeout(() => {
      currentTranslate.value = slideWidth.value;
    }, 300);
  }
  currentTranslate.value = currentIndex.value * slideWidth.value;
};

// Föregående slide
const prevSlide = () => {
  currentIndex.value--;
  if (currentIndex.value < 0) {
    // Återställ till sista riktiga bilden
    currentIndex.value = slides.value.length - 1;
    setTimeout(() => {
      currentTranslate.value = slides.value.length * slideWidth.value;
    }, 300);
  }
  currentTranslate.value = currentIndex.value * slideWidth.value;
};

// Hantera fönsterstorleksändringar
onMounted(() => {
  updateSlideWidth();
  window.addEventListener("resize", updateSlideWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSlideWidth);
});
</script>
<template>
  <section class="portfolio-grid">
    <h2 class="grid-heading">Projekt</h2>
    <ul class="grid-wrapper">
      <li
        v-for="(project, index) in selectedWork"
        :key="index"
        class="grid-item"
      >
        <div class="grid-image-wrapper">
          <img
            :src="project.image[0].src"
            :alt="project.image[0].alt"
            class="grid-image"
          />
        </div>
        <div class="grid-content">
          <h2 class="grid-title">{{ project.title }}</h2>
          <p class="grid-description">{{ project.description }}</p>
          <p>{{project.techstack}}</p>
          <a :href="project.projektlink" class="grid-link"
            >Titta på projektet</a
          >
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.portfolio-grid {
  padding: 1rem;
}

.grid-heading {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px){
    font-size: 4rem;
    margin-bottom: 3rem;
  }
}

.grid-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.grid-item {
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

    .grid-image-wrapper {
      opacity: 0;
    }

    .grid-content {
      opacity: 1;
    }
  }
}

.grid-image-wrapper {
  transition: opacity 0.2s ease;
  opacity: 1;
}

.grid-image {
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
.grid-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  opacity: 0;
  transition: opacity 0.2s ease;
  text-align: center;
}

.grid-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.grid-description {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #666;
}

.grid-link {
  display: block;
  color: inherit; 
  text-decoration: none;

  &:hover,
  &:focus {
    color: #0056b3;
  }
}
</style>
