<script setup lang="ts">
import { useResupplyCalculatorStore } from '../store/useResupplyCalculatorStore';

const store = useResupplyCalculatorStore()
</script>

<template>
  <div class="days-calories">
    <div>
      <label>Calories Per Day
          <input 
            type="number"
            v-model.number="store.dailyCalories"
            placeholder="Add Your Daily Calories"
            v-on:input="store.daysToCompleteSection()"
            required
          />
      </label>
    </div>
    <div>
      <label>Miles Per Day
        <input
          type="number"
          v-model.number="store.dailyMileage"
          placeholder="Add Your Daily Mileage"
          v-on:input="store.daysToCompleteSection()"
          required
        />
      </label>
    </div>
    <div>
      <label>Mileage Until Next Resupply
        <input
          type="number"
          v-model.number="store.totalMileageUntilResupply"
          placeholder="Add Your Total Mileage For This Section"
          v-on:input="store.daysToCompleteSection()"
          required
        />
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.days-calories {
  padding: 2em;
}

input {
  margin: .8em;
  width: 20em;
}
</style>