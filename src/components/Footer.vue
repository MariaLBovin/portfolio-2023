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

  @media screen and (min-width: 700px) {
      padding: calc(var(--gap)*2);
    }

  &-text {
    font-size: 14px;
    color: #333;
    margin: 0;

    @media screen and (min-width: 700px) {
      font-size: 16px;
    }
  }
}
</style>
