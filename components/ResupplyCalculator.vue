<script setup>
import { useResupplyCalculatorStore } from '../store/useResupplyCalculatorStore';

const store = useResupplyCalculatorStore()
</script>


<template>
  Days Until Next Resupply {{  store.daysUntilNextResupply }}<br>
  Caloric Need for Section {{ store.caloriesUntilNextResupply }}<br>
  <total-days-and-calories />
</template>