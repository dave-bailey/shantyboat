<script setup lang="ts">
import { useResupplyCalculatorStore } from '../../store/useResupplyCalculatorStore';
const store = useResupplyCalculatorStore()
</script>

<template>
  <div class="add-items">
    <div v-if="store.caloriesUntilNextResupply !== 0">
      <div class="add-items__hit-the-trail" v-if="store.totalCaloriesRemaining <= 0">
        TIME TO HIT THE TRAIL!
      </div>
      <div class="add-items__remaining-calories">
        Calories Remaining: {{ store.totalCaloriesRemaining.toFixed(0) }}
      </div>
      <ul>
      <li class="add-items__list-item" v-for="(item, index) in store.resupplyItemList" v-bind:key="index">
        <div>
          Item Name: {{ item.itemName }}<br>
          Number of Servings: {{ item.servingSize }}<br>
          Calories Per Serving: {{ item.caloriesPerServing }}<br>
          Total Calories: {{ item.caloriesPerServing * item.servingSize }}<br>
          Servings Per Day: {{  (item.servingSize / store.daysUntilNextResupply).toFixed(1) }}
        </div>    
        <button
          class="add-items__remove-list-item"
          @click="store.removeResupplyItem(index, item.caloriesPerServing * item.servingSize)"
        >
          X
        </button>
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
          type="number"
          v-model="store.servingSize"
        /> 
      </div>
      <div class="input-container">
        <label>Calories Per Serving</label>
        <input
          type="number"
          v-model="store.caloriesPerServing"
        />
      </div>
      <button >Add Item</button>
    </form>
    <div class="add-items__zero-state" v-else>
      <p>
        Total your calories and mileage<br>to add items to your resupply list.
      </p>  
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-items {
  align-items: flex-start;
  border: .2em solid $background;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-weight: 300;
  justify-content: space-between;
  padding: 2em;
  width: 22em;
  height: 100%;
  max-height: 52em;
  
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
    border-bottom: .2em solid $background;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
  }

  &__remove-list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $background;
    color: $primary-font;
    border-radius: 50%;
    padding: 1em;
    height: 1em;
    width: 1em;
    margin: 0 1em 0 0;
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

  &__hit-the-trail {
    font-size: 1.5em;
    border-bottom: .2em solid $background;
    margin-bottom: .5em;
    font-weight: 600
  };
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
  max-height: 25em;
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