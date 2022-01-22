<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  created() {
    this.$store.dispatch("getTradeResult");
    this.$store.dispatch("initApp");
  },
};
</script>

<style>
body {
  background-color: #a7a0bb5c;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>

<template>
  <div class="my-5">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>
