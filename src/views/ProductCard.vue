<!-- src/components/ProductListing.vue -->
<template>
  <div class="row">
    <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
      <div class="card">
        <img :src="product.image" class="card-img-top" :alt="product.title" height="300px">
        <div class="card-body">
          <h5 class="card-title text-danger">{{ product.title }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text">Category: {{ product.category }}</p>
          <p class="card-text">Price: ${{ product.price }}</p>
          <button 
            class="btn btn-danger" 
            @click="addToCart(product)" 
            :disabled="isInCart(product.id)"
          >
            {{ isInCart(product.id) ? 'Added to Cart' : 'Add to Cart' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['products', 'cart']), // Getting products and cart from Vuex store
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product); // Dispatching the action to add to cart
    },
    isInCart(id) {
      // Check if the product is in the cart
      return this.cart.some(item => item.id === id);
    },
  },
};
</script>

<style scoped>
.card {
  height: 100%;
}
</style>
