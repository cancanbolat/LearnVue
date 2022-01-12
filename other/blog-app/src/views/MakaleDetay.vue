<template>
  <div>
    <div v-if="hatalar">
      {{ hatalar }}
    </div>
    <div v-if="makale" class="detay content">
      {{ makale.baslik }} <br />
      {{ makale.icerik }} <br />
      {{ makale.olusturulmaTarihi }}
      <br />
      <hr />
      <br /><br />
      <a @click="makaleSil"><b>Makaleyi sil</b></a>
    </div>
    <div v-else>Yükleniyor...</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import makaleDetay from "../composables/makaleDetay";
import { db } from "../firebase/config";

export default {
  //props: ['id'] ile de alabilirsin
  setup() {
    const route = useRoute();
    const router = useRouter();

    const id = ref(route.params.id);

    const { makale, hatalar, makaleYukle } = makaleDetay(route.params.id);
    makaleYukle();

    const makaleSil = async () => {
      await db
        .collection("makaleler")
        .doc(route.params.id)
        .delete()
        .then(() => {
          router.push("/");
        });
    };

    return { id, makale, hatalar, makaleSil };
  },
};
</script>

<style>
</style>