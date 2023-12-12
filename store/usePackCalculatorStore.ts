import { defineStore } from 'pinia'

export const usePackCalculatorStore = defineStore('packCalculator', {
  state: () => ({
    enabled: false,
    itemsList: [] as Item[],
    categoryList: ['Big Three','Clothing','Cooking','Hydration','Luxury','Misc.','Sleep','Worn Weight'],
    itemName: '',
    itemCategory: '',
    itemWeight: 0,
    numberOfItems: 0,
  }),
  actions: {
    addItem(e: any) {
      e.preventDefault();

      this.itemsList.push({
        "name": this.itemName,
        "number": this.numberOfItems,
        "category": this.itemCategory,
        "weight": this.itemWeight,
      })
    }
  },
  getters: {
  }
})

interface Item {
  name: string,
  number: number,
  category: string,
  weight: number,
}
