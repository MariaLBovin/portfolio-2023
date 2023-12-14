<script setup>
import {register} from 'swiper/element/bundle';
import {selectedWork} from '../arrays/portfolioArray';
import {ref} from 'vue'
import 'swiper/css';
import 'swiper/css/navigation';

register();

const slides = selectedWork

const prevSlide = () => {
  swiperElement.value.swiper.slidePrev();
};

const nextSlide = () => {
  swiperElement.value.swiper.slideNext();
};

const swiperElement = ref(null);
</script>
<template>
      <section class="slideshow">
        <h1 class="slideshow-heading">Projekt i urval</h1>
        <div class="slideshow-wrapper">
          <swiper-container ref="swiperElement" 
      class="swiper"
      :slides-per-view=1
      :loop="true"
      >
        <swiper-slide class="swiper-slide" v-for="slide in slides" :key="slide.title">
          <div class="swiper-img">
            <img :src="slide.image[0].src" :alt="slide.image[0].alt" class="swiper-img" />
          </div>
          <div class="swiper-text-wrapper">
          <h2 class="swiper-heading">{{ slide.title}}</h2>
          <p class="swiper-text">{{ slide.description}}</p>
          <a :href="slide.projektlink" class="swiper-link">Titta på projektet</a>
        </div>
        </swiper-slide>
      </swiper-container>
      <button class="swiper-button-prev arrow-back material-icons" @click="prevSlide">arrow_back</button>
      <button class="swiper-button-next material-icons arrow-forward" @click="nextSlide">arrow_forward</button>
        </div>
      <RouterLink to="/portfolio" class="slider-router-link">Se alla projekt</RouterLink>
  </section>
  
</template>
<style lang="scss" scoped>
.slideshow {
      border-bottom: 1px solid lightblue;
      padding-bottom: 16px;
      margin-bottom: 32px;

      @media screen and (min-width: 700px) {
        padding-bottom: 32px;
        margin-bottom: 64px;
      }

      &-heading {
        font-size: 2rem;
        margin-bottom: 16px;

        @media screen and (min-width: 700px) {
          font-size: 5rem;
          margin-bottom: 32px;
        }
      }
      &-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
}

}
.swiper {
    display: flex;
    justify-content: center;
    position: relative;
    width: 70vw;

    &-slide{
    display: flex;
    flex-direction: column;
    margin-top: 0.3rem;
    margin-bottom: 0.6rem;
    border-radius: 1.25rem;

    @media screen and (min-width: 700px) {
      flex-direction: row;
      align-items: center;
      gap: 32px
    }

  }
  &-img {
    display: block;
    width: 100%;
    height: 46%;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    margin-bottom: 16px;
    padding: 0 10px;

    @media screen and (min-width: 700px) {
      max-width: 100%;
    }
  }

  &-text-wrapper {
    padding-left:1.25rem;
    padding-right:1.25rem;
    font-family: 'Poppins';
    margin-bottom: 32px;

    @media screen and (min-width: 700px) {
      width: 50%;
    }
  }
  &-heading{
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    

    @media screen and (min-width: 700px) {
      font-size: 3rem;
    }

  }
  &-text {
    font-size: 1.8rem;

    @media screen and (min-width: 700px){
      font-size: 2rem;
    }

  }
  &-link {
  cursor: pointer;
  font-size: 1.5rem;
  color: black;

  &:hover {
    text-decoration: underline;
    color: rgba(34, 193, 195, 1);
  }

  @media screen and (min-width: 700px) {
    font-size: 2rem;
  }
}

&-button-prev:after, &-button-next:after{
  display:none
}
}
  .arrow-back, .arrow-forward {
    background-color: #08c5d5;;
    opacity: 0.9;
    color: #f0e5e3;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    font-size: 1.4rem;

    @media screen and (min-width: 700px) {
      width: 64px;
      height: 64px;
    }
}
.slider-router-link {
  font-size: 1.8rem;
  font-weight: 800;
  color: black;
  cursor: pointer;
  text-decoration: none;
  

  &:hover {
    text-decoration: underline;
    color: rgba(34, 193, 195, 1);
  }

  @media screen and (min-width: 700px){
    font-size: 3rem;
  }


}
.material-icons {
  font-size: 2rem;

  @media screen and (min-width: 700px) {
    font-size: 3rem;
  }
}
</style>