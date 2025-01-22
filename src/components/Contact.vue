<script setup></script>

<template>
  <section class="contact" id="contact">
    <div class="contact-content">
        <h2 class="contact-heading">
          Kul att du vill komma i kontakt med mig!
        </h2>
        <div class="contact-content-inner">
        <p class="contact-text">
          Jag är alltid peppad på att ta en kopp kaffe, te eller läsk och lära
          känna nya människor
        </p>
        <img src="/kaffe.png" alt="en kopp kaffe i svartvitt" class="contact-img"/>
      </div>
    </div>

    <ul class="contact-wrapper">
      <li class="contact-inner">
        <a href="mailto:maria.bovin@gmail.com" class="contact-link">
          <i class="fa-regular fa-envelope contact-link-symbol"></i>
          <span class="contact-link-text">Maila mig</span>
        </a>
      </li>
      <li class="contact-inner">
        <a href="https://www.linkedin.com/in/mariabovin/" class="contact-link">
          <i class="fa-brands fa-linkedin-in contact-link-symbol"></i>
          <span class="contact-link-text">Lägg gärna till mig på LinkedIn</span>
        </a>
      </li>
      <li class="contact-inner">
        <a href="https://github.com/MariaLBovin" class="contact-link">
          <i class="fa-brands fa-github contact-link-symbol"></i>
          <span class="contact-link-text">Eller följ mig på Github</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  padding: var(--gap);
  margin-bottom: var(--gap);

  @media screen and (min-width: 768px) {
    display: flex;
    min-height: 60vh;
    gap: calc(var(--gap) * 4);
    padding: calc(var(--gap)*2);
    margin-bottom: calc(var(--gap)*2);
  }
  &-heading {
    font-size: var(--mobile-h2);
    margin-bottom: var(--gap);

    @media screen and (min-width: 768px) {
      font-size: var(--desktop-h2);
      margin-bottom: calc(var(--gap)*2);
    }
  }

  &-content {
    @media screen and (min-width: 768px) {
      flex: 1;
    }

    &-inner {
      display: flex;
      flex-direction: row;
      align-items: center;

      @media screen and (min-width: 768px) {
      flex-direction: column;
    }
    }
  }
  &-img {
    width: 30%;
    content: url('/kaffe.png');

    @media screen and (min-width: 768px) {
      width: 50%;
    }
  }
  &-wrapper {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex: 1;
      gap: calc(var(--gap) * 4);
    }
  }



  &-text {
    font-size: var(--mobile-font);

    @media screen and (min-width: 768px) {
      font-size: var(--desktop-font);
    }
  }
  &-link {
    display: flex;
    align-items: center;
    gap: calc(var(--gap)*2);
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-decoration-color: var(--primary-blue);
    }

    &-symbol {
      color: var(--primary-blue);
      font-size: 6rem;
    }

    &-text {
      font-size: var(--mobile-font);
      font-weight: 400;

      @media screen and (min-width: 768px) {
        font-size: var(--desktop-font);
      }
    }
  }
}
[data-theme='dark'] .contact-img {
  content: url('/kaffe-vit.png');
}
</style>
