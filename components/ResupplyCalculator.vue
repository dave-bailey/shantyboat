<script setup lang="ts">
import { useResupplyCalculatorStore } from '../store/useResupplyCalculatorStore';

const store = useResupplyCalculatorStore()
</script>


<template>
  <div class="resupply-calculator">
    <div class="resupply-calculator__left-container">
      <div class="resupply-calculator__totals">
        <div>Caloric Need for Section: {{ store.caloriesUntilNextResupply }}</div>
        <div>Days Until Next Resupply: {{  store.daysUntilNextResupply }}</div> 
      </div>
    
      <total-days-and-calories />
    </div>
    <add-resupply-item />
  </div>
</template>

<style lang="scss" scoped>
.resupply-calculator {
  display: flex;
  justify-content: space-around;

  &__left-container {
    border: 2px solid black;
    border-radius: .5em;
    display: flex;
    flex-direction: column;
  }

  &__totals {
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    padding: 2em;
  }
}

</style>