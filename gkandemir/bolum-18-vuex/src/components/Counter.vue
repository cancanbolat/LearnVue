<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <hr />
    <button class="btn btn-success" @click="incrementAction">
      + Arttır Action
    </button>
    <button class="btn btn-danger" @click="decrementAction">
      - Azalt Action
    </button>
    <hr />
    <button class="btn btn-success" @click="incrementActionAsync">
      + Arttır async
    </button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  methods: {
    /* incrementCounter(){
      //this.$emit("counterEvent", 1);
      this.$store.commit("increaseCounter")
    },
    decrementCounter(){
      //this.$emit("counterEvent", 1);
      this.$store.commit("decreaseCounter")
    }, */
    ...mapMutations(["increaseCounter", "decreaseCounter"]),
    ...mapActions({
      incrementAction: "increment",
      decrementAction: "decrement",
      incrementActionAsync: "incAsync",
    }),
  },
};
</script>

<style>
</style>
