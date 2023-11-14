<template>
  <div class="top-bar">
    <logo />
    <NuxtLink class="home-link" to="/">home</NuxtLink>
  </div>
  <div class="pack-calculator__container">
    <div class="pack-calculator__content">
      <h1 class="pack-calculator__title">PACK<br>CALCULATOR</h1>
      <p>
      coming soon...
      </p>
    </div>
      <div class="pack-calculator__img" alt="Hiking in Iceland"></div>
  </div>
</template>

<style lang="scss" scoped>
.pack-calculator {
  &__container {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  &__img {
    background-image: url(~/assets/img/iceland.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    height: 40em;
    width: 53em;
  }

  &__title {
    color: $primary-font;
    font-size: 3em;
    font-weight: 600;
    line-height: 80%;
    margin: 0;
    text-align: right;
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2em;

    p {
      text-align: right;
      width: 100%;
    }
  }
}

.top-bar {
  display: flex;
  justify-content: space-between;
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
  .pack-calculator {
    &__container {
      flex-direction: column;
    }

    &__img {
      height: 40em;
      width: 100%;
    }
  }
}
</style>