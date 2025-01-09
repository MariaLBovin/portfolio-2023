<script setup></script>

<template>
  <section class="contact">
    <div class="contact-text">
      <h2 class="contact-heading">Kul att du vill komma i kontakt med mig!</h2>
      <p>
        Jag är alltid peppad på att ta en kopp kaffe, te eller läsk och lära
        känna nya människor
      </p>
      <img src="/kaffe.png" />
    </div>

    <div class="contact-wrapper">
      <div class="contact-inner">
        <a
          href="mailto:maria.bovin@gmail.com"
          class="contact-email-link"
          aria-label="Skicka e-post"
        >
        <i class="fa-regular fa-envelope contact-symbol"></i>
        </a>
        <h3 class="contact-inner-heading">Maila mig</h3>
      </div>

      <div class="contact-inner">
          <a href="https://www.linkedin.com/in/mariabovin/">
            <i class="fa-brands fa-linkedin-in contact-symbol"></i>
          </a>
        <h3 class="contact-inner-heading">Lägg gärna till mig på LinkedIn</h3>
      </div>
      <div class="contact-inner">
          <a href="https://github.com/MariaLBovin">
            <i class="fa-brands fa-github contact-symbol"></i>
          </a>
        <h3 class="contact-inner-heading">Eller följ mig på Github</h3>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  margin: 32px 0;

  @media screen and (min-width: 700px) {
    display: flex;
    margin: 64px 0;
    min-height: 60vh;
    gap: 80px;
  }

  &-text {
    @media screen and (min-width: 700px) {
      flex: 1;
    }
  }

  &-wrapper {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 700px) {
      flex: 1;
      gap: 64px;
    }
  }

  &-heading {
    font-size: 3rem;
    margin-bottom: 32px;

    @media screen and (min-width: 700px) {
      font-size: 5rem;
    }
  }

  &-text {
    font-size: 1.8rem;
    margin-bottom: 32px;
  }

  /* &-logos {
    margin-bottom: 32px;

    &-heading {
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 16px;

      @media screen and (min-width: 700px) {
        font-size: 3rem;
        margin-bottom: 32px;
      }
    }

    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 32px;

      svg {
        width: 60px;
        height: 63px;
        fill: #08c5d5;

        @media screen and (min-width: 700px) {
          width: 85px;
          height: 87px;
        }
      }
    }
    &-button {
      border: none;
      background-color: transparent;
      width: 100%;
      margin: auto;
      justify-self: center;

      svg {
        width: 60px;
        height: 63px;
        fill: #08c5d5;

        @media screen and (min-width: 700px) {
          width: 85px;
          height: 87px;
        }
      }
    }
  } */
  &-inner {
    @media screen and (min-width: 700px) {
      display: flex;
      align-items: center;
      gap: 32px;
    }
    &-link {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
   
    &-heading {
      font-size: 2rem;
      font-weight: 400;

      @media screen and (min-width: 700px) {
        font-size: 3rem;
      }
    }
  }

  &-symbol {
      color: #08c5d5;
      font-size: 8rem;
    }
  &-linkedIn {
    @media screen and (min-width: 700px) {
        display: flex
;
        align-items: center;
        gap: 32px;
    }
  }
}
</style>
