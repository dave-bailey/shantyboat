import { defineStore } from 'pinia'

export const useResupplyCalculatorStore = defineStore('resupplyCalculator', {
  state: () => ({
    dailyCalories: 0,
    dailyMileage: 0,
    totalMileageUntilResupply: 0,
    daysUntilNextResupply: 0,
    caloriesUntilNextResupply: 0,
    resupplyItemList: [],
    itemName: '',
    servingSize: 0,
    caloriesPerServing: 0,
    totalAddedCalories: 0,
  }),
  actions: {
    daysToCompleteSection() {
      if (this.totalMileageUntilResupply === 0 || this.dailyMileage === 0) return

      this.daysUntilNextResupply = this.totalMileageUntilResupply / this.dailyMileage
    
      this.caloriesPerSection()
    },
    caloriesPerSection() {
      this.caloriesUntilNextResupply = this.dailyCalories * this.daysUntilNextResupply
    },
    addItemToResupplyList(e) {
      e.preventDefault();
      const itemToAdd = { itemName: this.itemName, servingSize: this.servingSize, caloriesPerServing: this.caloriesPerServing }

      this.resupplyItemList.unshift(itemToAdd)
      const caloriesToAdd = this.servingSize * this.caloriesPerServing
      this.totalAddedCalories = this.totalAddedCalories + caloriesToAdd

      this.itemName = ''
      this.servingSize = 0
      this.caloriesPerServing = 0
    }
  }
})
