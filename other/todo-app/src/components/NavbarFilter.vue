<template>
  <nav class="filter-nav">
    <button @click="filterGuncelle('hepsi')">Bütün Yapılacaklar</button>
    <button @click="filterGuncelle('tamamlandi')">
      Tamamlanan Yapılacaklar
    </button>
    <button @click="filterGuncelle('yapiliyor')">
      Devam Eden Yapılacaklar
    </button>
  </nav>
</template>

<script>
export default {
  methods: {
    filterGuncelle(durum) {
      this.$emit("filterDurum", durum);
    },
  },
};
</script>

<style>
.filter-nav {
  display: flex;
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>