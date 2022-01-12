<template>
  <div class="home">
    <div v-if="hatalar.length > 0">
      {{ hatalar }}
    </div>
    <div v-else-if="makaleler.length">
      <MakaleListesi :makaleler="makaleler" />
    </div>
    <div v-else>Yükleniyor...</div>
  </div>
</template>

<script>
import MakaleListesi from "../components/MakaleListesi.vue";
import makaleGetir from "../composables/makaleGetir";

export default {
  name: "Home",
  components: {
    MakaleListesi,
  },
  setup() {
    const { makaleler, hatalar, makaleListesiniYukle } = makaleGetir();

    makaleListesiniYukle();
    return { makaleler, hatalar };
  },
};
</script>
