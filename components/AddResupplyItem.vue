<script setup>
import { useResupplyCalculatorStore } from '../store/useResupplyCalculatorStore';
const store = useResupplyCalculatorStore()

</script>

<template>
  <div class="add-item">
    <div v-if="store.resupplyItemList.length > 0">
      <div class="add-item__remaining-calories">
        Total Calories Remaining: {{ store.totalCaloriesRemaining }}
      </div>
      <ul>
        <li v-for="(item, index) in store.resupplyItemList" v-bind:key="index">      
        Item Name: {{ item.itemName }}<br>
        Serving Size: {{ item.servingSize }}<br>
        Calories Per Serving: {{ item.caloriesPerServing }}<br>
      </li>
      </ul>
    </div>
    <form class="add-item__form-container" v-on:submit="store.addItemToResupplyList">
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
  </div>
</template>

<style lang="scss" scoped>
.add-item {
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  padding: 2em;

  &__form-container {
    display: flex;
    flex-direction: column;
    padding: 2em;
  }
}

input {
  margin: .8em;
  width: 20em;
}
</style>