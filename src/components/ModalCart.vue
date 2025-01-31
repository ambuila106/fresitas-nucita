<template>
  <div class="modal-cart">
    <div @click="toggleModalCart()" class="modal-cart__close">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
      </svg>
    </div>


    <div class="modal-cart__content">
      <div class="modal-cart__title">
        <span class="fw-bold">Resumen:</span>
      </div>

      <div v-for="product in cart" :key="product.id" class="modal-cart__products">
        <hr />
        <span class="modal-cart__product-title">
          <span>{{ product.name }}</span>
        
          <span class="modal-cart__product-price">${{ product.price }}</span>
        </span>

        <span class="product-toppings" v-for="(topping, i) in product.toppings" :key="i">
          {{ topping }}
        </span>

      </div>

      <hr class="" />
      <div class="modal-cart__total fw-bold">
        <span>Total:</span>
        <span>${{ total }}</span>
      </div>
    </div>


    <FinalizeOrder />
  </div>
</template>

<script>
import FinalizeOrder from '../components/FinalizeOrder.vue'

export default {
  name: 'ModalCart',
  components: {
    FinalizeOrder
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    text: {
      type: String,
      default: 'Ingresar'
    }
  },

  methods: {
    click() {
      this.$emit('click')
    },

    toggleModalCart() {
      this.$emit('toggleModalCart')
    },

    addProduct({id, toppings}) {
      this.$emit('addProduct', {id, toppings})
    },

    deleteProduct(id) {
      this.$emit('deleteProduct', id)
    }
  },

  computed: {
    products() {
      return this.$store.state.products
    },

    cart() {
      return this.$store.state.cart
    },

    total() {
      let total = this.cart.reduce((accumulator, product) => {
        return accumulator + product.price * product.amount;
      }, 0);
      return total
    },
  }
}
</script>

<style>
  .product-toppings{
    align-self: flex-start;
    padding: 0 .5rem;
  }

.modal-cart {
  width: 100%;
  height: 80%;
  position: fixed;
  z-index: 4;
  bottom: 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: white;
  box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.05);
  overflow: auto;
  padding-bottom: 2.5rem;
}

.modal-cart__title {
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 1rem;
}

.modal-cart__content {
  padding: 2rem;
}

.modal-cart__product-price {
  text-align: end;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.modal-cart__product-title {
  font-size: 1.25rem;
  font-weight: 500;
  align-self: baseline;
  padding: 0 .5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.modal-cart__products {
  text-align: end;
  display: flex;
  flex-direction: column;
}

.modal-cart__total {
  display: flex;
  justify-content: space-between;
  padding: 0 .5rem;
}

.modal-cart__close {
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
}

.product-control {
  margin-top: .5rem;
  width: 100px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.05);
  align-items: center;
  align-self: end;
}

.product-control__button {
  width: 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
}
</style>
