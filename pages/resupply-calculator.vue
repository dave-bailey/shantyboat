<template>
  <div class="resupply__top-bar">
    <logo />
    <h1 class="resupply__title">RESUPPLY<br>CALCULATOR</h1>
    <NuxtLink class="home-link" to="/">home</NuxtLink>
  </div>
  <resupply-calculator />
</template>

<style lang="scss" scoped>
.resupply {
  &__top-bar {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    color: $primary-font;
    font-size: 3em;
    font-weight: 600;
    line-height: 80%;
    margin: 0;
    padding: 1em 1em .5em 1em;
    text-align: right;
  }
}

.home-link {
  color: $primary-font;
  font-size: 1em;
  font-weight: 300;
  margin: 0;
  padding: 2em;
  text-align: left;
}

@media screen and (max-width: 525px) {
  .resupply {
    &__top-bar {
      display: flex;
      flex-direction: column;
    }
      &__title {
      padding: .5em 1em;
    }
  }
}

</style>