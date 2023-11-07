<script setup lang="ts">
const dailyCalories = useState<number>('dailyCalories', () => 0)
const dailyMileage = useState<number>('dailyMileage', () => 0)
const totalMileageUntilResupply = useState<number>('totalMileageUntileResupply', () => 0)
const daysUntilNextResupply = useState<number>('daysUntilNextResupply', () => 0)
const caloriesUntilNextResupply = useState<number>('caloriesUntilNextResupply', () => 0)

const daysToCompleteSection = () => {
  if (totalMileageUntilResupply.value === 0 || dailyMileage.value === 0) return

  daysUntilNextResupply.value = totalMileageUntilResupply.value / dailyMileage.value

  caloriesPerSection()
}

const caloriesPerSection = () => {
  caloriesUntilNextResupply.value = dailyCalories.value * daysUntilNextResupply.value
}
</script>

<template>
  Days Until Next Resupply {{  daysUntilNextResupply }}<br>
  Caloric Need for Section {{ caloriesUntilNextResupply }}
  <div>
    <label>Calories Per Day
        <input 
          type="number"
          v-model.number="dailyCalories"
          placeholder="Add Your Daily Calories"
          v-on:input="daysToCompleteSection()"
          required
        />
    </label>
  </div>
  <div>
    <label>Miles Per Day
      <input
        type="number"
        v-model.number="dailyMileage"
        placeholder="Add Your Daily Mileage"
        v-on:input="daysToCompleteSection()"
        required
      />
    </label>
  </div>
  <div>
    <label>Mileage Until Next Resupply
      <input
        type="number"
        v-model.number="totalMileageUntilResupply"
        placeholder="Add Your Total Mileage For This Section"
        v-on:input="daysToCompleteSection()"
        required
      />
    </label>
  </div>
</template>