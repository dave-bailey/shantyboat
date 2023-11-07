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
        <li class="add-item__list-item" v-for="(item, index) in store.resupplyItemList" v-bind:key="index">      
          Item Name: {{ item.itemName }}<br>
          Serving Size: {{ item.servingSize }}<br>
          Calories Per Serving: {{ item.caloriesPerServing }}<br>
          Total Calories: {{ item.caloriesPerServing * item.servingSize }}<br>
          Servings Per Day: {{  item.servingSize / store.daysUntilNextResupply }}
        </li>
      </ul>
    </div>
    <form
      v-if="store.caloriesUntilNextResupply !== 0"
      class="add-item__form-container" 
      v-on:submit="store.addItemToResupplyList">
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
    <div v-else>
      Add Your Calorie Needs and Mileage to Add Items To Your List
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-item {
  border: 2px solid black;
  border-radius: .5em;
  display: flex;
  flex-direction: column;
  padding: 2em;

  &__remaining-calories {
    font-size: 1.5em;
  }

  &__form-container {
    display: flex;
    flex-direction: column;
    padding: 2em;
  }

  &__list-item {
    padding: 1em 0;
  }
}

input {
  margin: .8em;
  width: 20em;
}
ul {
  margin: 0;
  padding: 0;
  overflow: auto;
  max-height: 20em;
}

li {
  list-style: none;
}
</style>