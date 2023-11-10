<script setup lang="ts">
import { useResupplyCalculatorStore } from '../../store/useResupplyCalculatorStore';
const store = useResupplyCalculatorStore()
</script>

<template>
  <div class="add-items">
    <div v-if="store.caloriesUntilNextResupply !== 0">
      <div class="add-items__remaining-calories">
        Calories Remaining: {{ store.totalCaloriesRemaining }}
      </div>
      <ul>
        <li class="add-items__list-item" v-for="(item, index) in store.resupplyItemList" v-bind:key="index">      
          Item Name: {{ item.itemName }}<br>
          Number of Servings: {{ item.servingSize }}<br>
          Calories Per Serving: {{ item.caloriesPerServing }}<br>
          Total Calories: {{ item.caloriesPerServing * item.servingSize }}<br>
          Servings Per Day: {{  item.servingSize / store.daysUntilNextResupply }}
          <button @click="store.removeResupplyItem(index)">X</button>
        </li>
      </ul>
    </div>
    <form
      v-if="store.caloriesUntilNextResupply !== 0"
      class="add-items__form-container" 
      v-on:submit="store.addItemToResupplyList"
    >
      <div class="input-container">
        <label>Item Name</label>
        <input
          type="text"
          v-model="store.itemName"
        />  
      </div>
      <div class="input-container">
        <label>Number of Servings</label>
        <input
          type="text"
          v-model="store.servingSize"
        /> 
      </div>
      <div class="input-container">
        <label>Calories Per Serving</label>
        <input
          type="text"
          v-model="store.caloriesPerServing"
        />
      </div>
      <button >Add Item</button>
    </form>
    <div class="add-items__zero-state" v-else>
      <p>
        Total your calories and mileage<br>to add items to your list.
      </p>  
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-items {
  align-items: flex-start;
  border: .2em solid black;
  border-radius: .5em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-weight: 300;
  justify-content: space-between;
  padding: 2em;
  width: 22em;
  
  &__remaining-calories {
    font-size: 1.5em;
  }

  &__form-container {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    padding-top: 2em;
  }

  &__list-item {
    padding: 1em 0;
  }

  &__zero-state {
    align-items: center;
    display: flex;
    height: 100%;
    font-weight: 300;
    padding-bottom: 12em;
  }
  p {
    padding-bottom: .5em;
    border-bottom: .2em solid $background;
  }
}

input {
  border: none;
  border-bottom: .2em solid $background;
  font-size: 1em;
  padding: .3em;
  margin-bottom: 2em;
  width: 15em;
}

label {
  padding-bottom: .2em;
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

.input-container {
  display: flex;
  flex-direction: column;
}

button {
  background-color: $secondary-accent;
  border: none;
  border-radius: .2em;
  color: white;
  cursor: pointer;
  padding: 1em 2em;
  text-align: center;
  text-decoration: none;
  font-size: 1em;
  font-weight: 300;
}

button:hover {
  background-color: $primary-accent;
}

button:active {
  background-color: $background;
}
</style>