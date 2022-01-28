<template>
  <div>
    <button class="btn btn-success" @click="incrementCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decrementCounter">- Azalt</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods : {
    /* incrementCounter(){
      //this.$emit("counterEvent", 1);
      this.$store.commit("increaseCounter")
    },
    decrementCounter(){
      //this.$emit("counterEvent", 1);
      this.$store.commit("decreaseCounter")
    }, */
    ...mapMutations({
      incrementCounter: 'increaseCounter',
      decrementCounter: 'decreaseCounter'
    })
  }
}
</script>

<style>
</style>
