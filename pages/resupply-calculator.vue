<template>
  <div class="resupply__top-bar">
    <logo />
    <div class="resupply__title-container">
      <h1 class="resupply__title">RESUPPLY<br>CALCULATOR</h1>
      <NuxtLink class="home-link" to="/">home</NuxtLink>
    </div>
  </div>
  <div class="resupply__container">
    <resupply-calculator />
  </div>
  <div class="resupply__footer"></div>
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

  &__container {
    background-image: url(~/assets/img/sierra.jpeg);
    min-height: 40em;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  };

  &__footer {
    background-color: $background;
    height: 5em;
    width: 100%;
  }
}

.home-link {
  color: $primary-font;
  font-size: 1em;
  font-weight: 300;
  margin: 0;
  padding: 2em 2em 2em 8em;
  text-align: left;
}

.home-link:hover {
  color: $secondary-accent;
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