<script setup>
import { adventureData } from '~/assets/adventureData';

const title = ref('DAVE BAILEY')
const description = ref('Software Engineer & Hiker')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>

<template>
  <div class="home-page">
    <home-hero />
    <section class="home-page__grand-adventures">
      <h3 class="home-page__grand-adventures-title">GRAND<br>ADVENTURES</h3>
      <ul >
        <li v-for="item in adventureData">        
          <home-adventure 
            :title="item.title"
            :description="item.description"
            :title-image="item.titleImg"
            :copy="item.copy"
            :subheader="item.subheader"
          />
        </li>
      </ul>
    </section>
    <page-footer />
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  &__grand-adventures {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 2em;

    &-title {
      font-size: 3em;
      font-weight: 600;
      line-height: 85%
    }
  };
}

ul {
  align-items: center;
  align-content: space-evenly;
  column-gap: 1em;
  display: grid;
  grid-template-columns: 25em 25em 25em;
  justify-content: space-evenly;
  justify-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  row-gap: 1em;
  width: 90%;
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
