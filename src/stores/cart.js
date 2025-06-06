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
    removeItem(index) {
      this.items.splice(index, 1);
    },
    clearCart() {
      this.items = [];
      this.total = 0;
    },
    updateItemQuantity(index, quantity) {
      if (this.items[index]) {
        this.items[index].quantity = quantity;
      }
    },
    calculateTotal() {
      this.total = this.items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    },
  }
});
