<script setup lang="ts">
import { useResupplyCalculatorStore } from '../../store/useResupplyCalculatorStore';

const store = useResupplyCalculatorStore()
</script>

<template>
  <div class="resupply-calculator">
    <div class="resupply-calculator__left-container">
      <resupply-days-and-calories />
      <resupply-daily-food-list />
    </div>
    <div class="resupply-calculator__right-container">
      <resupply-add-item />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resupply-calculator {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
  padding-top: 1em;
  
  &__left-container {
    border: .2em solid $primary-font;
    border-radius: .5em;
    display: flex;
    flex-direction: column;
    margin-right: 2em;
    width: 22em;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 800px) {
  .resupply-calculator {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__left-container {
      margin: 0 0 2em 0;
    }
  }

}
</style>