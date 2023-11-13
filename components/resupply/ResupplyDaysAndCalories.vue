<script setup lang="ts">
import { useResupplyCalculatorStore } from '../../store/useResupplyCalculatorStore';

const store = useResupplyCalculatorStore()
</script>

<template>
  <div class="days-calories">
    <div class="days-calories__totals">
      <div>Total Calories: {{ store.caloriesUntilNextResupply.toFixed(2) }}</div>
      <div>Number of Days: {{  store.daysUntilNextResupply.toFixed(2) }}</div> 
    </div>
    <div class="input-container">
      <label>Calories Per Day</label>
      <input 
        type="number"
        v-model.number="store.dailyCalories"
        placeholder="Add Your Daily Calories"
        required
      />
    </div>
    <div class="input-container">
      <label>Miles Per Day</label>
      <input
        type="number"
        v-model.number="store.dailyMileage"
        placeholder="Add Your Daily Mileage"
        required
      />
    </div>
    <div class="input-container">
      <label>Mileage Until Next Resupply</label>
      <input
      type="number"
      v-model.number="store.totalMileageUntilResupply"
      placeholder="Add Your Total Mileage For This Section"
      required
      />
    </div>
    <button @click="store.daysToCompleteSection()">SUBMIT</button>
    <!-- <button>CLEAR</button> -->
  </div>
</template>

<style lang="scss" scoped>
.days-calories {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-weight: 300;
  padding: 0 2em 2em 2em;

  &__totals {
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    font-weight: 300;
    padding: 1.5em 0 ;
  }
}

.input-container {
  display: flex;
  flex-direction: column;
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

button {
  background-color: $primary-accent;
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
  background-color: $secondary-accent;
}

button:active {
  background-color: $background;
}

</style>