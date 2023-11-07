<script setup>
import { useResupplyCalculatorStore } from '../store/useResupplyCalculatorStore';
const store = useResupplyCalculatorStore()

</script>

<template>
  <div v-if="store.resupplyItemList.length > 0">{{ store.resupplyItemList }}</div>
  <form v-on:submit="store.addItemToResupplyList">
    <label>Items Name
      <input
        type="text"
        v-model="store.itemName"
      />  
    </label>

    <label>Serving Size
      <input
        type="text"
        v-model="store.servingSize"
      />  
    </label>
    <label>Calories Per Serving
      <input
        type="text"
        v-model="store.caloriesPerServing"
      />  
    </label>
    <button >Add Item</button>
  </form>
</template>