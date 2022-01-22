<script>
export default {};
</script>

<style>
</style>

<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark fixed-top"
    style="background-color: #563f7a"
  >
    <router-link class="navbar-brand" tag="a" to="/">Ürün Listesi</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" to="/urun-cikisi" tag="li" active-class="active">
          <a class="nav-link">Ürün Çıkışı</a>
        </router-link>
        <router-link class="nav-item" to="/urun-islemleri" tag="li" active-class="active">
          <a class="nav-link">Ürün İşlemleri</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
