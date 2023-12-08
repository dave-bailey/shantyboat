import { defineStore } from 'pinia'

export const usePackCalculatorStore = defineStore('packCalculator', {
  state: () => ({
    enabled: false,
    itemsList: [],
    categoryList: ['Big Three','Clothing','Cooking','Hydration','Luxury','Misc.','Sleep','Worn Weight'],
    itemName: '',
    itemCategory: [],
    numberOfItems: 0,
  }),
  actions: {
  },
  getters: {
  }
})

