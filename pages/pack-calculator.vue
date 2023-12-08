<script setup lang="ts">
import { usePackCalculatorStore } from '../store/usePackCalculatorStore';
const store = usePackCalculatorStore()

const title = ref('DB: PACK CALCULATOR')
const description = ref('A Hiker Pack Calculator')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>

<template>
  <div class="top-bar">
    <logo />
    <NuxtLink class="home-link" to="/">home</NuxtLink>
  </div>
  <div class="pack-calculator__container">
    <div v-if="store.enabled">
      <h1 class="pack-calculator__title">PACK<br>CALCULATOR</h1>
      <form class="pack-calculator__form-container">
        <label for="pc__item-name">Item Name</label>
        <input 
          v-model="store.itemName"
          required
          name="pc__item-name"
        />
        <label for="pc__item-number">Number of Items</label>
        <input 
          type="number"
          v-model.number="store.numberOfItems"
          required
          name="pc__item-number"
        />
        <label for="pc__item-category">Item Category</label>
        <select
          v-model="store.itemCategory"
          required
          name="pc__item-category"
        >
          <option v-for="category in store.categoryList">{{ category }}</option>
        </select>
      </form>
    </div>
    <div v-else class="pack-calculator__content">
      <h1 class="pack-calculator__title">PACK<br>CALCULATOR</h1>
      <p>
      coming soon...
      </p>
    </div>
    <div class="pack-calculator__img" alt="Hiking in Iceland"></div>
  </div>
  <page-footer />
</template>

<style lang="scss" scoped>
.pack-calculator {
  &__container {
    display: flex;
    justify-content: center;
    padding-bottom: 2em;
    text-align: center;
  }

  &__img {
    background-image: url(~/public/img/iceland.jpeg);
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

  &__form-container {
    display: flex;
    flex-direction: column;
    padding: 2em;
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
  padding: 2em 2em 0 0;
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
