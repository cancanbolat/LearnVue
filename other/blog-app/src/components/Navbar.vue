<template>
  <nav>
    <router-link :to="{ name: 'Home' }">Makale Listesi</router-link>
    <router-link :to="{ name: 'MakaleEkle' }">Makale Oluştur</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
  text-transform: uppercase;
}

nav ul {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

nav li {
  list-style: none;
  margin-left: 20px;
}

nav .router-link-active {
  color: #eb4d4b;
}
</style>