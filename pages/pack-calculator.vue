<template>
  <logo />
  <div class="pack-calculator__container">
    <div class="pack-calculator__content">
      <h1 class="pack-calculator__title">PACK<br>CALCULATOR</h1>
      <p>
      coming soon...
      </p>
    </div>
      <div class="pack-calculator__img"></div>
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
    background-position: right;
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
    padding-right: 2em;

    p {
      text-align: right;
      width: 100%;
    }
  }
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