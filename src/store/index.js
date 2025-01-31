import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    cart: [],
    products:[
      {
        id: 2,
        image: "https://i.imgur.com/Hir5OZZ.png",
        name: "Tradicional chocolate negro",
        description: "Fresa en vaso + chocolate negro",
        price: 13000,
        category: "general",
        max: 1,
      },
      {
        id: 1,
        image: "https://i.imgur.com/Hir5OZZ.png",
        name: "Tradicional chocolate blanco",
        description: "Fresa en vaso + chocolate blanco",
        price: 17000,
        category: "general",
        max: 1,
      },
      {
        id: 3,
        image: "https://i.imgur.com/Hir5OZZ.png",
        name: "Fresas capricho",
        description: "Fresa en vaso + chocolate negro + 1 Topping",
        max: 2,
        price: 14000,
        category: "general",
        isExtra: true
      },
      {
        id: 4,
        image: "https://i.imgur.com/Hir5OZZ.png",
        name: "Fresas Love",
        description: "Fresa en vaso + chocolate negro + 2 Topping",
        max: 3,
        price: 15000,
        category: "general",
        isExtra: true
      },
      {
        id: 5,
        image: "https://i.imgur.com/Hir5OZZ.png",
        name: "Fresas Tentación",
        description: "Fresa en vaso + chocolate negro + 3 Topping",
        max: 4,
        price: 16000,
        category: "general",
        isExtra: true
      },
      {
        id: 6,
        image: "https://i.imgur.com/Hir5OZZ.png",
        name: "Fresas Fantasía",
        description: "Fresa en vaso + chocolate blanco + 1 Topping",
        max: 2,
        price: 18000,
        category: "general",
        isExtra: true
      },
      {
        id: 7,
        image: "https://i.imgur.com/Hir5OZZ.png",
        name: "Fresas Cielo",
        description: "Fresa en vaso + chocolate blanco + 2 Topping",
        max: 3,
        price: 19000,
        category: "general",
        isExtra: true
      },
      {
        id: 8,
        image: "https://i.imgur.com/Hir5OZZ.png",
        name: "Fresas Delirio Explosivo",
        description: "Fresa en vaso + chocolate blanco + 3 Topping",
        max: 4,
        price: 20000,
        category: "general",
        isExtra: true
      },
      {
        id: 9,
        image: "https://i.imgur.com/4lzYHXv.png",
        name: "Agua",
        description: "",
        max: 0,
        price: 5000,
        category: "general",
      },
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    },
    addProduct(state, {id, toppings}) {
      const product = state.products.find(product => product.id === id)
      state.cart.push({ ...product, amount: 1, toppings });
    },

    deleteProduct(state, id) {
      console.log("dentro")
      const existProductIndex = state.cart.findIndex(product => product.id === id);

      if (existProductIndex !== -1) {
        state.cart[existProductIndex].amount--;

        if(state.cart[existProductIndex].amount == 0) {
          state.cart.splice(existProductIndex, 1);
        }
      }


    }
  }
})

export default store
