<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>
      Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child
      componentim
    </p>
    <hr />
    <p>
      bu yaş: {{ age }} bana parent'ten geldi ben de diğer child'a gönderecem.
      <br />
      yaş hem burda hem orda değişecek
    </p>
    <button @click="changeAge">Diğer Child'a gönder</button>
  </div>
</template>
<script>
import { eventBus } from "../main";

export default {
  props: ["age"],
  methods: {
    changeAge() {
      this.age = 33;
      //this.$emit("ageWasChanged", this.age);
      //eventBus.$emit("ageWasChanged", this.age);
      eventBus.changeAge(this.age)
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightgoldenrodyellow;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>

