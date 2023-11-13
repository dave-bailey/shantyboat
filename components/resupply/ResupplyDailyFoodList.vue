<script setup lang="ts">
import { ref } from 'vue'
import { exportToPDF } from '#imports'

import { useResupplyCalculatorStore } from '../../store/useResupplyCalculatorStore';
const store = useResupplyCalculatorStore()

const pdfSection = ref<HTMLElement | null>(null)
</script>

<template>
  <div ref="pdfSection" class="daily-food-list" v-if="store.resupplyItemList.length > 0">
    <div class="daily-food-list__title">Daily Food List</div>
    <ul >
      <li v-for="(item, index) in store.resupplyItemList" v-bind:key="index">
        {{ item.itemName }}: {{  (item.servingSize / store.daysUntilNextResupply).toFixed(1) }} Servings
      </li>
    </ul>
    <button @click="exportToPDF('my-resupply-list.pdf', pdfSection)">
      Download as PDF
    </button>
  </div>
</template>

<style lang="scss" scoped>
.daily-food-list {
  background: white;
  display: flex;
  flex-direction: column;
  margin: 2em 0;
  padding: 2em;
  box-sizing: border-box;
  width: 100%;
  
  &__title {
    font-weight: 300;
    font-size: 1.5em;
  }
}

li {
  list-style: number;
}
</style>