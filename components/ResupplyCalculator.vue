<script setup>
import { useResupplyCalculatorStore } from '../store/useResupplyCalculatorStore';

const store = useResupplyCalculatorStore()
</script>


<template>
  <div class="total-values">
    <div>Days Until Next Resupply: {{  store.daysUntilNextResupply }}</div> 
    <div>Caloric Need for Section: {{ store.caloriesUntilNextResupply }}</div>
  </div>

  <total-days-and-calories />
  <add-resupply-item />
</template>

<style lang="scss" scoped>
.total-values {
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  padding: 2em;
}

</style>