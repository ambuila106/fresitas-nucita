<template>
  <div>
    <div class="btn-group" role="group">
      <span>Toppings permitidos:</span>
      <div class="options">
        <label 
          v-for="option in options" 
          :key="option" 
          class="badge rounded-pill p-2 m-1"
          :class="{'bg-fucsia text-white': selectedToppings.includes(option), 'bg-cream': !selectedToppings.includes(option)}"
          @click="toggleBadge(option)"
        >
          {{ option }}
        </label>
      </div>
      
      <template v-if="isExtra">
        <span>Toppings Adicionales</span>
        
        <div class="options">
          <label 
            v-for="option in extraOptions" 
            :key="option" 
            class="badge rounded-pill p-2 m-1"
            :class="{'bg-fucsia text-white': selectedToppings.includes(option), 'bg-cream': !selectedToppings.includes(option)}"
            @click="toggleBadge(option)"
          >
            {{ option }}
          </label>
        </div>
      </template>
    </div>
  </div>

</template>
<script>
  
  export default {
    name: 'Selectables',
    props: {
      max: {
        type: Number,
        default: 1
      },
      isExtra: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        options: ["Granjeas", "Mani", "Galleta Oreo", "Coco"],
        extraOptions: ["Chocorramo", "Masmello", "Leche Klim", "Quipitos", "Milo"],
        selectedToppings: ["Galleta Oreo"]
      };
    },
    methods: {
      toggleBadge(option) {
        console.log(this.max)
        if (this.selectedToppings.includes(option)) {
          this.selectedToppings = this.selectedToppings.filter(badge => badge !== option);
        } else if (this.selectedToppings.length < this.max - 1){
          this.selectedToppings.push(option);
        } else if (this.selectedToppings.length < this.max){
          if (this.options.some(option => this.selectedToppings.includes(option)) || this.options.includes(option)) {
            this.selectedToppings.push(option);
          }
        } 

        this.$emit("selectToppings", this.selectedToppings)
      }
    },

    mounted() {
      this.$emit("selectToppings", this.selectedToppings)
    },

    computed: { 
      allOptions(){
        return this.isExtra && this.options.concat(this.extraOption) || this.options
      }
    }

  }
</script>
  
<style>
  .options {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: .25rem 0 .5rem;
  }

  .btn-group span {
    font-weight: 500;
    color: #b51d6d;
  }

  .btn-group{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .badge {
    width: 100px;
    color: #36110b !important;
  }

  .bg-cream {
    background-color: #fbced1;
  }

  .bg-fucsia {
    background-color: #b51d6d;
  }

</style>
  