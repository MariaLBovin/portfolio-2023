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
  <section class="cv" id="cv">
    <h2 class="cv-heading" >Tidigare erfarenhet</h2>
    <article class="cv-wrapper">
      <ul class="cv-list">
        <li v-for="section in sections" :key="section.key" class="cv-item">
          <h3 class="cv-listheading">
            <button
              class="cv-button"
              :aria-expanded="section.isVisible.toString()"
              :aria-controls="'ul-' + section.key"
              @click="section.isVisible = !section.isVisible"
            >
              {{ section.title }}
            </button>
          </h3>
          <ul
            :class="['cv-list-content', { hidden: !section.isVisible }]"
            :id="'ul-' + section.key"
          >
            <li
              v-for="slide in section.slides"
              :key="slide.place || slide.skills"
              class="cv-listitem"
            >
              <article class="cv-wrapper-inner">
                <div class="cv-left">
                  <h4 class="cv-place" v-if="slide.place">{{ slide.place }}</h4>
                  <h4 class="cv-skills" v-if="slide.skills">
                    {{ slide.skills }}
                  </h4>
                  <p class="cv-time" v-if="slide.time">{{ slide.time }}</p>
                </div>
                <div class="cv-right" v-if="slide.title || slide.desc">
                  <h5 class="cv-title" v-if="slide.title">{{ slide.title }}</h5>
                  <p class="cv-description" v-if="slide.desc">
                    {{ slide.desc }}
                  </p>
                </div>
              </article>
            </li>
          </ul>
        </li>
      </ul>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.cv {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  margin: 32px 0;
  flex: 1;

  @media screen and (min-width: 700px) {
    margin: 64px 0;
  }

  &-item {
    margin-bottom: 32px;
    border: 1px solid lightgrey;
    padding: 16px 32px;
    border-radius: 35px 35px 0 0;
  }
  &-heading {
    font-size: 3rem;
    margin-bottom: 32px;

    @media screen and (min-width: 700px) {
      font-size: 4rem;
    }
  }
  &-wrapper {
    &-inner {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 16px;
    }
  }
  &-button {
    display: flex;
    border: none;
    background-color: transparent;
    color: black;
    font: inherit;
    font-size: 2rem;
    padding: 0;
    width: 100%;
    justify-content: space-between;
    cursor: pointer;

    &:after {
      content: "+";
    }
    &[aria-expanded="true"]:after {
      content: "-";
    }

    @media screen and (min-width: 700px) {
      font-size: 3rem;
    }
  }

  &-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    @media screen and (min-width: 700px) {
      gap: 64px;
    }
  }
  &-list {
    &heading {
      font-size: 2.5rem;
      font-weight: 400;
      margin-bottom: 16px;
    }
  }
  &-place {
    font-size: 2rem;
    font-weight: 400;

    @media screen and (min-width: 700px) {
      font-size: 3rem;
    }
  }
  &-time {
    font-size: 1.6rem;

    @media screen and (min-width: 700px) {
      font-size: 2rem;
    }
  }
  &-title {
    font-size: 1.8rem;
    font-weight: 400;

    @media screen and (min-width: 700px) {
      font-size: 3rem;
    }
  }
  &-description {
    font-size: 1.6rem;
    margin-bottom: 16px;

    @media screen and (min-width: 700px) {
      font-size: 2.5rem;
    }
  }
  &-skills {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 16px;

    &:after {
      content: "\2713";
      padding-left: 16px;
    }
    @media screen and (min-width: 700px) {
      font-size: 2.5rem;
    }
  }
  &-right {
    border-bottom: 0.5px solid lightgrey;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
