<template>
  <div>
    <NuxtLink class="home-link" to="/">
      <h2 class="logo__header">DAVE<br>BAILEY</h2>
    </NuxtLink>
    <h3 class="logo__subheader">building<br>and hiking.</h3>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  &__header {
    color: $primary-font;
    font-size: 2em;
    font-weight: 600;
    line-height: 80%;
    margin: 0;
    padding: 1em 1em .5em 1em;
    text-align: left;
  }

  &__header:hover {
    color: $secondary-accent;
  }

  &__subheader {
    font-size: 1em;
    font-weight: 300;
    margin: 0;
    padding: 1em 2em;
    text-align: left;
  }
}

.home-link {
  text-decoration: none;
}
</style>