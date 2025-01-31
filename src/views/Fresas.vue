<template>
    <div class="home">
        <div class="fresa">
          <div class="fresa-img">
            <img src="https://i.imgur.com/Hir5OZZ.png" alt="">
          </div>

          <div class="fresa-info">
            <h1>Fresas tradicionales</h1>
            
          </div>
        </div>


        <Footer @click="toggleModalCart()" />

        <transition name="slide-fade">
        <ModalCart @deleteProduct="deleteProduct" @addProduct="addProduct" v-if="isOpenModalCart" @toggleModalCart="toggleModalCart" />
        </transition>
    </div>
</template>
  
  <script>
  import Footer from '../components/Footer.vue'
  import ModalCart from '../components/ModalCart.vue'
  
  export default {
    name: "Home",
    components: {
      Footer,
      ModalCart
    },
    data() {
      return {
        publication: "",
        publications: [],
        db: null,
        isOpenModalCart: false
      };
    },
    async mounted() {},
  
    methods: {
      addProduct(id){
        this.$store.commit('addProduct', id)
      },
  
      deleteProduct(id){
        this.$store.commit('deleteProduct', id)
      },
  
      toggleModalCart() {
        this.isOpenModalCart = !this.isOpenModalCart
      }
    },
  
    computed: {
      products() {
        return this.$store.state.products
      },
    }
  };
  </script>
  
<style>
  .fresa {
    display: flex;
    height: 350px;
    justify-content: space-around;
    align-items: center;
  }

  .fresa-info {
    font-weight: 600;
  }

  .fresa-img {
    width: auto;
    height: 350px;
  }

  .fresa-img img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .text-primary {
    color: #3460fd;
    color: white;
  }
  .home {
    background-color: #e89dc8;
    min-height: 100vh;
    display: flex;
    justify-content: start;
  }

  .products {
  padding: 90px 25px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 700px;
  }

  .slide-fade-enter-active {
  transition: all .3s ease;
  }
  .slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
  transform: translateY(100%); /* Cambiado de translateX a translateY */
  opacity: .9;
  }

</style>
  