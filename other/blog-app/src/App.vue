<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  background-color: #dfe4ea;
}

p,
h1,
h2,
h3,
a,
ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #333;
}

h2 {
  margin-bottom: 4px;
}

h3 {
  text-transform: capitalize;
  margin-bottom: 8px;
}
</style>
