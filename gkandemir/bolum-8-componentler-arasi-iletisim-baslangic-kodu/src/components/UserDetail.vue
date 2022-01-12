<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>
      Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim
    </p>
    <p>{{ name }}</p>
    <p>{{ switchName() }}</p>
    <p>{{ desc }}</p>
    <hr />
    <p>{{ age }} yaşındasın</p>
    <button @click="sendToParent">Veriyi Parent'e Gönder</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    desc: [String],
    age: [Number],
    name: {
      type: String,
      required: true,
      default: "cancandefault",
    },
  },
  data() {
    return {
      switchName() {
        return this.name.split("").reverse().join("");
      },
      parentaGidecek: "bu veri child component'den geldi aa",
    };
  },
  methods: {
    sendToParent() {
      console.log("gitti");
      this.$emit("childEvent", this.parentaGidecek);
    },
  },
  created() {
    eventBus.$on("ageWasChanged", (data) => {
      this.age = data
    })
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
