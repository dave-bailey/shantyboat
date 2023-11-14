<script setup lang="ts">
import { ref } from 'vue'
import { exportToPDF } from '#imports'

import { useResupplyCalculatorStore } from '../../store/useResupplyCalculatorStore';
const store = useResupplyCalculatorStore()

const pdfSection = ref<HTMLElement | null>(null)
</script>

<template>
  <div class="daily-food-list" v-if="store.resupplyItemList.length > 0">
    <div ref="pdfSection">
      <div class="daily-food-list__title">Daily Food List</div>
      <ul >
        <li v-for="(item, index) in store.resupplyItemList" v-bind:key="index">
          {{ item.itemName }}: {{  (item.servingSize / store.daysUntilNextResupply).toFixed(1) }} Servings
        </li>
      </ul>
    </div>
    <button class="daily-food-list__download-button" @click="exportToPDF('my-resupply-list.pdf', pdfSection)">
      Download List
    </button>
  </div>
</template>

<style lang="scss" scoped>
.daily-food-list {
  background: white;
  border: .2em solid $background;
  display: flex;
  flex-direction: column;
  margin: 2em 0 0 0;
  padding: 2em;
  box-sizing: border-box;
  width: 100%;
  
  &__title {
    font-weight: 300;
    font-size: 1.5em;
  }

  &__download-button {
    width: 50%;
    background-color: $background;
    border: none;
    border-radius: .2em;
    color: $primary-font;
    cursor: pointer;
    padding: 1em;
    text-align: center;
    text-decoration: none;
    font-size: 1em;
    font-weight: 300;
  }

  &__download-button:hover {
    background-color: $primary-accent;
  }

  &__download-button:active {
    background-color: $background;
  }
}

li {
  list-style: number;
}
</style>