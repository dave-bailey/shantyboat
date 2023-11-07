import { defineStore } from 'pinia'

export const useResupplyCalculatorStore = defineStore('resupplyCalculator', {
  state: () => ({
    dailyCalories: 0,
    dailyMileage: 0,
    totalMileageUntilResupply: 0,
    daysUntilNextResupply: 0,
    caloriesUntilNextResupply: 0,
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
  }
})




const daysToCompleteSection = () => {

}

