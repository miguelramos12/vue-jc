import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    total: 0,
  }),
  actions: {
    addItem(item) {
      this.items.push(item);
    },

  }
});
