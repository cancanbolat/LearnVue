<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <FilterList />
        <input type="text" v-model="searchText" />
        <ul>
          <li v-for="product in filtered" :key="product">{{ product }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import FilterList from "./FilterList.vue";
import { productMixin } from "./productMixin";

export default {
  components: {
    FilterList,
  },
  mixins: [productMixin],
};
</script>

<style>
</style>
