<script setup>
import { jobHistory, eduHistory, skills } from '../arrays/cvArray';
import { ref } from 'vue';

const jobSlides = jobHistory;
const eduSlides = eduHistory;
const skillSlides = skills

const showJobList = ref(false);
const showEduList = ref(false);
const showOtherList = ref(false);


</script>

<template>
  <section class="cv">
    <h1 class="cv-heading">Tidigare erfarenhet</h1>
    <article class="cv-wrapper">
      <ul class="cv-list">
        <li class="cv-item">
          <h2 class="cv-listheading">
            <button
              class="cv-button"
              :aria-expanded="showJobList.toString()"
              aria-controls="ul-job"
              @click="showJobList = !showJobList"
            >
              Jobb
            </button>
          </h2>
          <ul :class="['cv-joblist', { 'hidden': !showJobList }]" id="ul-job">
            <li class="cv-listitem" v-for="slide in jobSlides" :key="slide.place">
              <article class="cv-wrapper">
                <div class="cv-left">
                  <h3 class="cv-place">{{ slide.place }}</h3>
                  <p class="cv-time">{{ slide.time }}</p>
                </div>
                <div class="cv-right">
                  <h4 class="cv-title">{{ slide.title }}</h4>
                  <p class="cv-description">{{ slide.desc }}</p>
                </div>
              </article>
            </li>
          </ul>
        </li>
        <li class="cv-item">
          <h2 class="cv-listheading">
            <button
              class="cv-button"
              aria-expanded="false"
              aria-controls="ul-edu"
              @click="showEduList = !showEduList"
            >
              Utbildning
            </button>
          </h2>
          <ul :class="['cv-educationlist', { 'hidden': !showEduList }]" id="ul-edu">
            <li class="cv-listitem" v-for="slide in eduSlides" :key="slide.place">
              <article class="cv-wrapper">
                <div class="cv-left">
                  <h3 class="cv-place">{{ slide.place }}</h3>
                  <p class="cv-time">{{ slide.time }}</p>
                </div>
                <div class="cv-right">
                  <h4 class="cv-title">{{ slide.title }}</h4>
                  
                </div>
              </article>
            </li>
          </ul>
        </li>
        <li class="cv-item">
          <h2 class="cv-listheading">
            <button
              class="cv-button"
              aria-expanded="false"
              aria-controls="ul-other"
              @click="showOtherList = !showOtherList"
            >
              Skills
            </button>
          </h2>
          <ul :class="['cv-otherlist', { 'hidden': !showOtherList }]" id="ul-other">
            <li class="cv-listitem" v-for="slide in skillSlides" :key="slide.skills">
              <article class="cv-wrapper">
                <div class="cv-left">
                  <h3 class="cv-skills">{{ slide.skills }}</h3>
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
      margin: 32px;

      @media screen and (min-width: 700px) {
        margin: 32px 64px;
      }
      
    &-item {
        margin-bottom: 32px;
        border: 1px solid lightgrey;
        padding: 16px;
        border-radius: 35px 35px 0 0;

        @media screen and (min-width: 700px) {
            margin-bottom: 64px;
        }
    }
    &-heading {
        font-size: 3rem;
        margin-bottom: 32px;

        @media screen and (min-width: 700px) {
            font-size: 5rem;
        }
    }
    &-wrapper {
        @media screen and (min-width: 700px){
            width: 70%;
        }
    }
    &-button{
        display: flex;
        border:none;
        background-color: transparent;
        font: inherit;
        padding: 0;
        width: 100%;
        justify-content: space-between;
        cursor: pointer;
        

        &:after {
            content: '+';
        }
        &[aria-expanded="true"]:after{
            content: '-';

        }
    }

    &-left{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    }
    &-list{
        &heading {
            font-size: 2.5rem;
            font-weight: 400;
            margin-bottom: 16px;
        }
    }
    &-place {
        font-size: 2rem;
        font-weight: 400;
    }
    &-time {
        font-size: 1.5rem;
    }
    &-title {
        font-size: 1.3rem;
        font-weight: 400;
    }
    &-description {
        font-size: 1.2rem;
    }
    &-skills {
        font-size: 1.3rem;
        font-weight: 400;
        margin-bottom: 16px;

        &:after {
            content:'\2713';
            padding-left: 16px
        }
    }
}


</style>

