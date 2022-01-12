<template>
  <div class="">
    <p>{{ upperMessage | toLowerCaseFilter }}</p>
    <p>{{ lowerMessage | toUpperCaseFilter }}</p>
    <hr />
  </div>
</template>

<script>
import { productMixin } from "./productMixin";

export default {
  mixins: [productMixin],
};
</script>

<style>
</style>