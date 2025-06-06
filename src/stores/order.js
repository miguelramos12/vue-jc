import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    order: {
      id: "",
      userId: "",
      orderItems: [],
      totalCost: null,
      orderDate: "",
      status: "",
      shippingAddress: {
        street: "",
        city: "",
        zipCode: "",
        country: "",
      },
      paymentDetails: {
        method: "",
        last4: "",
      },
    }
  }),
  actions: {
    addItem(item) {
      this.order.orderItems.push(item);
    },
  }
});
