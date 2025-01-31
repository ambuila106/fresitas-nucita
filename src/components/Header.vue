<template>
  <div class="header">
    <div class="header__logo">
      <img src="https://i.imgur.com/c3s7OaG.png" alt="">
    </div>
  </div>
</template>
<script>

export default {
  name: 'Header',
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
    }
  }
}
</script>

<style>
.header {
  height: 150px;
  background-color: #fbced1;
  box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: center;
}

.header__logo {
  height: 150px;
  width: 100%;
  max-width: 400px;
}

.header__logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header__title {
  margin-left: .75rem;
  font-size: 25px;
  font-weight: bold;
  color: #ff8f00;
  display: flex;
  align-items: center;
  padding-top: 0.1rem
}
</style>
