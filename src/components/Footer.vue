<script setup>
</script>

<template>
  <footer class="footer">
    <p class="footer-text">
      &copy; {{ new Date().getFullYear() }} Maria Larsson Bovin. Alla rättigheter förbehållna.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: var(--gap);

  @media screen and (min-width: 768px) {
      padding: calc(var(--gap)*2);
    }

  &-text {
    font-size: var(--mobile-font);
    color: var(--text-gray);
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: var(--desktop-font);
    }
  }
}
</style>
