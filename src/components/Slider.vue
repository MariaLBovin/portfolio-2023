<script setup>
import {register} from 'swiper/element/bundle';
import {allWork} from '../arrays/portfolioArray';
import {ref} from 'vue'
import 'swiper/css';
import 'swiper/css/navigation';

register();

const slides = allWork

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
        <h1 class="slideshow-heading">Mina projekt</h1>
        <div class="slideshow-wrapper">
          <article class="swiper-wrapper">
          <swiper-container 
            aria-roledescription="ul"
            ref="swiperElement" 
            class="swiper"
            :slides-per-view=1
            :loop="true"
      >
        <swiper-slide 
            class="swiper-slide" 
            v-for="slide in slides" 
            :key="slide.title"
            aria-roledescription="li">
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
        </article>
      
      <button class="swiper-button-prev arrow-back material-icons" @click="prevSlide">arrow_back</button>
      <button class="swiper-button-next material-icons arrow-forward" @click="nextSlide">arrow_forward</button>
        </div>
        
  </section>

</template>

<style lang="scss" scoped>
.slideshow {
      display: flex;
      flex-direction: column;
      padding-bottom: 20px;
      margin: 32px 64px;
      
      
      &-wrapper{
        display: flex;
        justify-content: center;
      }

      &-heading {
        font-size: 3rem;

        @media screen and (min-width: 700px) {
          font-size: 5rem;
        }
      }
     
}
.swiper {
    display: flex;
    justify-content: center;
    position: relative;
    width: 70vw;

    &-wrapper {
      
      @media screen and (min-width: 700px) {
        width: 70%;
      }
    }

    &-slide{
    display: flex;
    flex-direction: column;
    padding: 10px;
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
    
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;

    @media screen and (min-width: 700px) {
      max-width: 100%;
    }
  }

  &-text-wrapper {
    padding-left:1.25rem;
    padding-right:1.25rem;
    font-family: 'Poppins';

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
    opacity: .9;
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
.arrow-back {
   @media screen and (min-width: 700px) {
      left: 64px;
   }
}
.arrow-forward {
  @media screen and (min-width: 700px) {
    right: 64px;
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

  @media screen and (min-width: 700px){
    font-size: 3rem;
  }
}

</style>