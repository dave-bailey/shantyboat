<script setup lang="ts">
import { useResupplyCalculatorStore } from '../../store/useResupplyCalculatorStore';

const store = useResupplyCalculatorStore()
</script>

<template>
  <div class="resupply-calculator">
    <div class="resupply-calculator__container">
      <div class="resupply-calculator__left-container">
        <resupply-days-and-calories />
        <div class="resupply-calculator__food-list">
          <resupply-daily-food-list />
        </div>
      </div>
      <div class="resupply_right-container">
        <resupply-add-item />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resupply-calculator {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
  padding-top: 1.5em;
  flex-direction: column;
  
  &__left-container {
    display: flex;
    flex-direction: column;
    margin-right: 2em;
    width: 22em;
  }

  &__food-list {
    display: flex;
    width: 100%;
  }

  &__container {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 800px) {
  .resupply-calculator {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__container {
      flex-direction: column;
    }

    &__left-container {
      margin: 0 0 2em 0;
    }
  }

}
</style>