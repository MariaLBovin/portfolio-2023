<script setup>
import { jobHistory, eduHistory, skills } from "../arrays/cvArray";
import { ref } from "vue";

const sections = ref([
  { title: "Jobb", slides: jobHistory, key: "job", isVisible: ref(false) },
  {
    title: "Utbildning",
    slides: eduHistory,
    key: "edu",
    isVisible: ref(false),
  },
  { title: "Tech stack", slides: skills, key: "skills", isVisible: ref(false) },
]);


</script>


<template>
  <section class="cv" id="cv" aria-labelledby="cv-heading">
    <h2 id="cv-heading" class="cv-heading">Tidigare erfarenhet</h2>
    <ul class="cv-list">
      <li v-for="section in sections" :key="section.key" class="cv-item">
        <button
          class="cv-item-button"
          :aria-expanded="section.isVisible.toString()"
          :aria-controls="'ul-' + section.key"
          @click="section.isVisible = !section.isVisible"
        >
          {{ section.title }}
        </button>
        <ul
          :id="'ul-' + section.key"
          :class="['cv-inner-list', { hidden: !section.isVisible }]"
          role="region"
          :aria-labelledby="'button-' + section.key"
        >
          <li
            v-for="slide in section.slides"
            :key="slide.place || slide.skills"
            class="cv-inner-item"
          >
            <div class="cv-left">
              <h4 class="cv-place" v-if="slide.place">{{ slide.place }}</h4>
              <h5 class="cv-skills" v-if="slide.skills">{{ slide.skills }}</h5>
              <p class="cv-time" v-if="slide.time">{{ slide.time }}</p>
            </div>
            <div class="cv-right" v-if="slide.title || slide.desc">
              <h5 class="cv-title" v-if="slide.title">{{ slide.title }}</h5>
              <p class="cv-description" v-if="slide.desc">{{ slide.desc }}</p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.cv {
  display: flex;
  flex-direction: column;
  padding: var(--gap);
  margin-bottom: var(--gap);
  flex: 1;
  

  @media screen and (min-width: 768px) {
    padding: calc(var(--gap)*2);
    margin-bottom: calc(var(--gap)*2);

  }
  &-heading {
    font-size: var(--mobile-h2);
    margin-bottom:var(--gap);

    @media screen and (min-width: 768px) {
      font-size: var(--desktop-h2);
      margin-bottom:calc(var(--gap)*2);
    }
  }
  &-item {
    margin-bottom: calc(var(--gap)*2);
    border: 1px solid lightgrey;
    padding: var(--gap) calc(var(--gap)*2);
    border-radius: 35px 35px 0 0;

    &-button {
    display: flex;
    border: none;
    background-color: transparent;
    color: black;
    font: inherit;
    font-size: var(--mobile-font);
    width: 100%;
    justify-content: space-between;
    cursor: pointer;

    &:after {
      content: "+";
    }
    &[aria-expanded="true"]:after {
      content: "-";
    }

    @media screen and (min-width: 768px) {
      font-size: var(--desktop-font);
    }
  }
  }
  &-inner {
    &-item {
      margin-top: var(--gap);
    }
  }
  &-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--gap);
    margin-bottom: calc(var(--gap)/2);

    @media screen and (min-width: 768px) {
      gap: calc(var(--gap)*4);
    }
  }
  &-item {
    &-content {
      margin-top: var(--gap);
    }
    &heading {
      font-size: var(--mobile-h3);
      font-weight: 400;
      margin-bottom: var(--gap);
    }
  }
  &-place {
    font-size: var(--mobile-h4);
    font-weight: 400;

    @media screen and (min-width: 768px) {
      font-size: var(--desktop-h4);
    }
  }
  &-time {
    font-size: var(--mobile-font);

    @media screen and (min-width: 768px) {
      font-size: var(--desktop-font);
    }
  }
  &-title {
    font-size: var(--mobile-h5);
    font-weight: 400;

    @media screen and (min-width: 768px) {
      font-size: var(--desktop-h5);
    }
  }
  &-description {
    font-size: var(--mobile-font);
    margin-bottom: var(--gap);

    @media screen and (min-width: 768px) {
      font-size: var(--desktop-font);
    }
  }
  &-skills {
    font-size: var(--mobile-h5);
    font-weight: 400;
    margin-bottom: var(--gap);

    &:after {
      content: "\2713";
      padding-left: var(--gap);
    }
    @media screen and (min-width: 700px) {
      font-size: var(--desktop-h5);
    }
  }
  &-right {
    border-bottom: 0.5px solid lightgrey;
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
}
</style>
