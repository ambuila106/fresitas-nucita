<template>
  <div class="card-product">
    <div @click="addProduct(id)" class="card-product__add">+</div>

    <div class="card-product__header">
      <div class="card-product__image">
      <img :src="image" alt="">
      </div>
      <span class="fw-semibold card-product__title">{{ name }}</span>
    </div>

    <span class="card-product__description">{{ description }}</span>
    <Selectables v-if="max > 0" :max="max" :isExtra="isExtra" @selectToppings="selectToppings"/>
    <div class="text-end fw-bold pt-1">${{ price }}</div>
  </div>
</template>
<script>
  import Selectables from '../components/Selectables.vue'

  export default {
    name: 'CardProduct',
    components: {
      Selectables
    },
    props: {
      id: {
        type: Number,
        default: 0
      },
      image: {
        type: String,
        default: 'image'
      },
      name: {
        type: String,
        default: 'name'
      },
      description: {
        type: String,
        default: 'name'
      },
      price: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 0
      },
      isExtra: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        toppings: []
      };
    },

    methods: {
      addProduct(id) {
        let toppings = this.toppings
        this.$emit('addProduct', {id, toppings})
      },

      selectToppings(toppings){
        this.toppings  = toppings
      }
    }
  }
</script>

<style>
  .card-product {
    width: 350px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.05);
    padding: 14px;
    position: relative;
    color: #36110b;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-product__header {
    display: flex;
    flex-direction: column;
  }

  .card-product__title {
    font-size: 30px;
    line-height: 1;
    text-align: center;
  }

  .card-product__description {
    text-align: center;
    font-size: 14px;
    padding-top: 5px;
    font-weight: 500;
    padding-bottom: 15px;
  }

  .card-product__image {
    height: 150px; /* Ancho deseado del contenedor */
    overflow: hidden;
  }

  .card-product__image img{
    width: 100%; /* Ancho deseado del contenedor */
    height: 100%;
    object-fit: contain;
  }

  .card-product__add {
    position: absolute;
    background-color: #36110b;
    width: 30px;
    height: 30px;
    border-radius: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    right: -15px;
    top: -15px;
    font-size: 25px;
  }
</style>
