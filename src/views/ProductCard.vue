<!-- src/components/ProductListing.vue -->
<template>
  <div class="row">
    <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
      <div class="card">
        <img :src="product.image" class="card-img-top" :alt="product.title" />
        <div class="card-body">
          <h5 class="card-title text-danger">{{ product.title }}</h5>
          <p class="card-text description">{{ product.description }}</p>
          <p class="card-text">Category: {{ product.category }}</p>
          <p class="card-text">Price: ${{ product.price }}</p>
          <button
            class="btn btn-danger"
            @click="addToCart(product)"
            :disabled="isInCart(product.id)"
          >
            {{ isInCart(product.id) ? "Added to Cart" : "Add to Cart" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../Api";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapGetters(["products", "cart"]), // Getting products and cart from Vuex store
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product); // Dispatching the action to add to cart
    },
    isInCart(id) {
      // Check if the product is in the cart
      return this.cart.some((item) => item.id === id);
    },
    getProductsApi() {
      Api.getProducts()
        .then((response) => {
          console.log(response);
          this.products = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getProductsApi();
  },
};
</script>

<style scoped>
.card {
  height: 100%;
  transition: 0.3s;
  box-shadow: 0 0 10px rgba(196, 87, 87, 0.1) !important;
}
.card:hover {
  height: 100%;
  transform: translateY(-10px);
  cursor: pointer;
}
.card-img-top {
  height: 200px !important;
  object-fit: contain;
  padding: 30px;
  transition: 0.3s;
}
.card-img-top:hover {
  padding: 20px;
}
.card-title {
  height: 30px !important;
  overflow: hidden;
}
.description {
  height: 100px !important;
  overflow: hidden;
}
</style>
