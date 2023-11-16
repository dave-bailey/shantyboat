<script setup lang="ts">
import { useResupplyCalculatorStore } from '../../store/useResupplyCalculatorStore';

const store = useResupplyCalculatorStore()
</script>

<template>
  <div class="days-calories">
    <div class="days-calories__totals">
      <div>Total Calories: {{ store.caloriesUntilNextResupply.toFixed(0) }}</div>
      <div>Number of Days: {{  store.daysUntilNextResupply.toFixed(1) }}</div> 
    </div>
    <div class="days-calories__input-container">
      <label>Calories Per Day</label>
      <input 
        type="number"
        v-model.number="store.dailyCalories"
        required
      />
    </div>
    <div class="days-calories__input-container">
      <label>Miles Per Day</label>
      <input
        type="number"
        v-model.number="store.dailyMileage"
        required
      />
    </div>
    <div class="days-calories__input-container">
      <label>Mileage Until Next Resupply</label>
      <input
      type="number"
      v-model.number="store.totalMileageUntilResupply"
      required
      />
    </div>
    <div class="days-calories__error" v-if="store.addInputNumber">* Numbers are required to submit.</div>
    <div class="days-calories__button-container">
      <button @click="store.daysToCompleteSection()">SUBMIT</button>
      <button @click="store.$reset()">CLEAR</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.days-calories {
  align-items: flex-start;
  background-color: white;
  border: .2em solid $background;
  display: flex;
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
  &__input-container {
    display: flex;
    flex-direction: column;
  }

  &__button-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &__error {
    color: red;
    padding-bottom: 2em;
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
