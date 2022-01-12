<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr />
    <NewProduct />
    <br /><br />
    <Progress />
    <br /><br />
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr />
    <Products />
  </div>
</template>

<script>
import NewProduct from "./components/NewProduct.vue";
import Progress from "./components/Progress.vue";
import Products from "./components/Products.vue";

export default {
  components: {
    NewProduct,
    Progress,
    Products,
  },
};
</script>

<style>
body {
  background-color: aliceblue;
  padding-top: 20px;
  padding-bottom: 20px;
}

.card {
  margin-right: 5px;
  margin-bottom: 5px;
}

.card:last-child {
  margin-right: 0px;
}

.col-md-2 {
  max-width: 15.666667% !important;
}

.product-container {
  margin-left: 15px;
}
</style>

