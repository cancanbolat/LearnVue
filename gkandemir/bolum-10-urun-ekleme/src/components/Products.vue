<script>
import Product from "./Product.vue";
import { eventBus } from "../main";

export default {
  components: {
    Product,
  },
  data() {
    return {
      productList: [],
    };
  },
  created() {
    eventBus.$on("productAdded", (product) => {
      if (this.productList.length < 2) {
        this.productList.push(product);
        eventBus.$emit("progressBarUpdated", this.productList.length);
      } else {
        alert("Daha fazla ürün ekleyemezsiniz");
      }
    });
  },
};
</script>

<style>
</style>

<template>
  <div class="row product-container">
    <Product v-for="product in productList" :key="product.title">
      <img
        class="card-img-top"
        :src="product.selectedImage"
        :alt="product.title"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <small> <strong>Adet : </strong> {{ product.count }} </small>
        <br />
        <small> <strong>Fiyat : </strong> {{ product.price }} </small>
        <br />
        <small> <strong>Tutar : </strong> {{ product.totalPrice }} </small>
      </div>
    </Product>
  </div>
</template>