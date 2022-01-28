<template>
  <div>
    <p class="counter-container">Sayaç : {{ getDoubleCounter }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  //props : ["counter"]
  computed: {
    ...mapGetters(["getDoubleCounter", "getCounterClick"]),
  },
  /* {
      counter(){
        return this.$store.getters.getDoubleCounter
      },
      getCounterClick(){
        return this.$store.getters.getCounterClick
      }
    } */
};
</script>
<style scoped>
.counter-container {
  border: 1px solid #aa7f08;
  padding: 10px 5px;
  background-color: #fbbd08;
  font-size: 20px;
  color: #000;
}
</style>
