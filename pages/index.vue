<template>
  <div class="home-page">
    <section class="hero__container">
      <section class="hero__left">
        <div>  
          <h1 class="hero__left-header">DAVE<br>BAILEY</h1>
          <h3 class="hero__left-subheader">building<br>and hiking.</h3>
        </div>
        <div class="hero__social-container">
          <a href="https://www.linkedin.com/in/dave-andrew-bailey/">
            <img class="hero__social-icon" src="~assets/img/LI.png">
          </a>
          <a href="https://github.com/dave-bailey">
            <img class="hero__social-icon" src="~assets/img/GH.png">
          </a>
          <a href="https://trail2dev.hashnode.dev/">
            <img class="hero__social-icon" src="~assets/img/HN.png">
          </a>
        </div>
      </section>
      <div class="hero__img-container"></div>

      <div class="hero__right">
        <h2 class="hero__right-subheader">software engineer<br>graphic designer<br>thru-hiker</h2>
        <div class="hero__app-links-container">
          <p class="hero__app-links-subheader">apps<br>for hikers:</p>
          <NuxtLink class="hero__app-link" to="/resupply-calculator">RESUPPLY CALCULATOR</NuxtLink>
          <NuxtLink class="hero__app-link" to="/pack-calculator">PACK CALCULATOR</NuxtLink>
        </div>
      </div>

    </section>
    <quote-block />
    <section class="home-page__grand-adventures">
      THOSE<br>GRAND ADVENTURES<br><br>

      Appalachian Trail<br>
      Continental Divide Trail<br>
      Pacific Crest Trail<br><br>
      Long Trail<br>
      Colorado Trail<br>
      John Muir Trail<br><br>
      Arizona Trail<br>
      Camino De Santiago<br>
      Laugavegur and Fimmvörðuháls Trails<br><br>
      New Hampshire 4,000 Footers<br>
      South Beyond 6,000 Footers<br>
      Colorado 14ers<br>

    </section>
  </div>
</template>

<style lang="scss" scoped>

.home-page {

  .hero {

    &__container {
      display: flex;
      justify-content: center;
    }
  
    &__left {
      align-items: flex-end;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &-header {
        color: $primary-font;
        font-size: 2em;
        font-weight: 600;
        line-height: 80%;
        margin: 0;
        padding: 1em 1em .5em 1em;
        text-align: left;
      }

      &-subheader {
        font-size: 1em;
        font-weight: 300;
        margin: 0;
        padding: 1em 2em;
        text-align: left;
      }
    }

    &__right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 13em;
  
      &-subheader {
        font-size: 1em;
        font-weight: 300;
        margin: 0;
        padding: 1em 2em;
        text-align: right;
        white-space: nowrap;
      }
    }

    &__social-container {
      display: flex;
      flex-direction: column;
      padding-right: 2em;
    }

    &__social-icon {
      padding: .25em;
      width: 2.25em;
    } 

    &__social-icon:hover {
      transform: scale(1.1);
    }

    &__img-container {
      background-image: url(~/assets/img/dave_hiking_the_cdt.jpeg);
      background-position: right;
      background-repeat: no-repeat no-repeat;
      background-size: auto 100%;
      height: 40em;
      max-width: 66.5em;
      width: 100%;
    }
    
    &__app-link {
      color: $primary-font;
      font-size: 1.2em;
      font-weight: 600;
      line-height: 95%;
      margin: 0;
      padding: 16px 32px 0 32px;
      text-align: right;
    }

    &__app-link:hover {
      color: $secondary-accent;
    }

    &__app-links-container {
      display: flex;
      flex-direction: column;
    }

    &__app-links-subheader {
      font-weight: 300;
      margin: 0;
      padding: 1em 2em 0 1em;
      text-align: right;
    }
  }

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
    .hero {
    
      &__container {
        display: flex;
        flex-direction: column;
      }

      &__left {
        flex-direction: row;
        padding: 0 0 1em 0;
      }

      &__right {
        flex-direction: row;
        padding: 1em 0 0 0;
        width: 100%;

        &-subheader {
          text-align: left;
        }
      }

      &__img-container {
        height: 40em;
        width: 100%;
      }

      &__app-links-subheader {
        padding: 0 2em;
      }
    }

    &__quote-block-text {
      padding: 1em;
    }
  }
}

@media screen and (max-width: 525px) {
  .home-page {
    .hero {
      &__img-container {
        height: 20em;
        width: 100%;
      }
    }

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