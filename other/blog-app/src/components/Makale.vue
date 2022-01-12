<template>
  <div class="makale">
    <router-link :to="{ name: 'MakaleDetay', params: { id: makale.id } }">
      <h3>{{ makale.baslik }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["makale"],
};
</script>

<style>
.makale {
  display: block;
  margin: 40px 0;
  padding: 20px;
  border-left: 4px solid #000;
}

.makale a:hover h3 {
  color: #d81010;
}
</style>