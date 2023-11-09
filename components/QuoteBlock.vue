<template>  
  <section class="home-page__quote-block">
    <img class="home-page__quote-block-img" src="~/assets/img/azt.jpeg" />
    <div class="home-page__quote-block-container">
      <a class="home-page__quote-block-resume">
        MY<br>RESUME
      </a>
      <div class="home-page__quote-block-text">
        <p>
          “We partook of the enthusiasm of explorers<br>whom an undreamed-of discovery was being revealed.”
        </p>
        <p> - Harlan Hubbard, Shantyboat</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.home-page {

  &__quote-block {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 1em;

    &-container {
      display: flex;
      flex-direction: column;
    }

    &-resume {
      color: $primary-font;
      font-size: 2em;
      font-weight: 600;
      line-height: 99%;
      margin: 0;
      padding: 1em 1em .5em 1em;
      text-align: left;
      text-decoration: underline;
    }

    &-resume:hover {
      color: $secondary-accent;
      cursor: pointer;
    }

    &-text {
      text-align: left;
      font-weight: 300;
      background-color: $background;
      padding: 2em;
      width: 80%;
    }

    &-img {
      background-image: url(~/assets/img/azt.jpeg);
      background-position: right;
      background-repeat: no-repeat no-repeat;
      background-size: auto 100%;
      height: 35em;
    }
  }
}

@media screen and (max-width: 1024px) {
  .home-page {

    &__quote-block-text {
      padding: 1em;
    }
  }
}

@media screen and (max-width: 525px) {
  .home-page {

    &__quote-block {
      
      &-container {
        width: 100%;
      }
      
      &-img {
        display: none;
        height: 20em;
      }

      &-resume {
        padding: .5em 1em;
      }
    }
  }
}
</style>