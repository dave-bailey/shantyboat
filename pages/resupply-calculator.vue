<template>
  <div class="resupply">
    <div class="resupply__top-bar">
      <logo />
      <div class="resupply__title-container">
        <h1 class="resupply__title">RESUPPLY<br>CALCULATOR</h1>
        <NuxtLink class="home-link" to="/">home</NuxtLink>
      </div>
    </div>
    <div class="resupply__container" alt="Sierra Nevada mountains">
      <resupply-calculator />
    </div>
    <div class="resupply__grow-container"></div>
    <page-footer />
  </div>
</template>

<style lang="scss" scoped>
.resupply {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

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
    padding: .65em 1em .5em 1em;
    text-align: right;

    &-container {
      display: flex;
      justify-content: space-between;
    }
  }

  &__container {
    background-attachment: fixed;
    background-image: url(~/public/img/sierra.jpeg);
    background-position:  top;
    background-repeat: no-repeat;
  };

  &__grow-container {
    flex-grow: 1;
  }
}

.home-link {
  color: $primary-font;
  font-size: 1em;
  font-weight: 300;
  margin: 0;
  padding: 2em 2em 2em 10em;
  text-align: left;
}

.home-link:hover {
  color: $secondary-accent;
}

@media screen and (max-width: 800px) {
  .resupply {
    &__top-bar {
      display: flex;
      justify-content: space-between;
    }

      &__title-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      &__title {
      padding: .5em 1em 0 0;
    }
  }
  .home-link {
    padding: 0 3em 1em 0;
    text-align: right;
  }
}

@media screen and (max-width: 525px) {
  .resupply {
      &__title {
        font-size: 1.75em;
        padding: 1.1em .75em 0 0;
    }
  }
}
</style>
