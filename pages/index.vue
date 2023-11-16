<script setup>
import { adventureData } from '~/assets/adventureData';

</script>

<template>
  <div class="home-page">
    <home-hero />
    <section class="home-page__grand-adventures">
      <h3 class="home-page__grand-adventures-title">GRAND<br>ADVENTURES</h3>
      <ul >
        <li v-for="item in adventureData">        
          <home-adventure 
            :title="item?.title"
            :description="item?.description"
            :title-image="item?.titleImg"
            :copy="item?.copy"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  &__grand-adventures {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    &-title {
      font-size: 3em;
      font-weight: 600;
      line-height: 85%
    }
  };
}

ul {
  width: 90%;
  display: grid;
  grid-template-columns: 25em 25em 25em;
  list-style: none;
  padding: 0;
  column-gap: 1em;
  row-gap: 1em;

  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
}

@media screen and (max-width: 1300px) {
  ul {
    grid-template-columns: 20em 20em 20em;
  }
}

@media screen and (max-width: 1024px) {
  ul {
    grid-template-columns: 25em 25em;
  }
}

@media screen and (max-width: 875px) {
  ul {
    grid-template-columns: 20em 20em;
  }
}

@media screen and (max-width: 700px) {
  ul {
    grid-template-columns: 25em;
  }
}

@media screen and (max-width: 425px) {
  ul {
    grid-template-columns: 20em;
  }
}
</style>