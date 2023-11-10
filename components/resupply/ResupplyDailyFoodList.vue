<script setup lang="ts">
import { useResupplyCalculatorStore } from '../../store/useResupplyCalculatorStore';
const store = useResupplyCalculatorStore()
</script>

<template>
  <div class="daily-food-list" v-if="store.resupplyItemList.length > 0">
    <div class="daily-food-list__title">DAILY FOOD LIST</div>
    <ul>
      <li v-for="(item, index) in store.resupplyItemList" v-bind:key="index">
        {{ item.itemName }}: {{  item.servingSize / store.daysUntilNextResupply }} Servings
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.daily-food-list {
  display: flex;
  flex-direction: column;
  padding: 2em;
  
  &__title {
    font-weight: 600;
    font-size: 1.5em;
  }
}

li {
  list-style: number;
}
</style>