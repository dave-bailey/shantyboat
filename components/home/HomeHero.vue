<template>
  <section class="hero__container">
    <section class="hero__left">
      <logo />
      <div class="hero__left-bottom-container">
        <div class="hero__social-container">          
          <a href="https://www.linkedin.com/in/dave-andrew-bailey/">
            <img class="hero__social-icon" src="~public/img/LI.png">
          </a>
          <a href="https://github.com/dave-bailey">
            <img class="hero__social-icon" src="~public/img/GH.png">
          </a>
          <a href="https://trail2dev.hashnode.dev/">
            <img class="hero__social-icon" src="~public/img/HN.png">
          </a>
        </div>
        <div class="hero__resume">
          <a href="/Dave_Bailey_Resume_SE.pdf" target="_blank">
            MY<br>RESUME
          </a>
      </div>
      </div>
    </section>
    <div class="hero__img-container" alt="Hiking on the CDT"></div>
    <section class="hero__right">
      <h2 class="hero__right-subheader">software engineer<br>graphic designer<br>thru-hiker</h2>
      <div class="hero__app-links-container">
        <p class="hero__app-links-subheader">apps<br>for hikers:</p>
        <NuxtLink class="hero__app-link" to="/resupply-calculator">RESUPPLY CALCULATOR</NuxtLink>
        <NuxtLink class="hero__app-link" to="/pack-calculator">PACK CALCULATOR</NuxtLink>
      </div>
    </section>
  </section>
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

      &-bottom-container {
        padding: 0 2.9em;
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
        padding: 2em;
        text-align: right;
        white-space: nowrap;
      }
    }

    &__social-container {
      display: flex;
      flex-direction: column;
      display: flex;
      justify-content: flex-end;
    }

    &__social-icon {
      padding: .25em;
      width: 2.25em;
    } 

    &__social-icon:hover {
      transform: scale(1.1);
    }

    &__img-container {
      background-image: url(~/public/img/dave_hiking_the_cdt.jpeg);
      background-position: center;
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
      padding: 1em 1.66em 0 0;
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

    &__resume {
      font-size: 1.2em;
      font-weight: 600;
      line-height: 99%;
      margin: 0;
      padding: 1em 0 0 0;
      text-align: left;
      text-decoration: underline;

      a {
        color: $primary-font;
      }
    }

    &__resume:hover {
      color: $secondary-accent;
      cursor: pointer;
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

        &-bottom-container {
          padding: 0 2em 1em 0;
        }
      }

      &__social-container {
        flex-direction: row;
        align-items: center;
      }

      &__resume {
        text-align: right;
        padding-top: 1em;
      }

      &__right {
        flex-direction: row;
        padding: 1em 0 0 0;
        width: 100%;

        &-subheader {
          display: flex;
          align-items: center;
          text-align: left;
          padding-right: 0;
        }
      }

      &__img-container {
        height: 40em;
        width: 100%;
      }

      &__app-links {
        &-container {
          max-width: 12em;
        }
        
        &-subheader {
          padding: 0 2em;
        }
      }
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
  }
}
</style>
