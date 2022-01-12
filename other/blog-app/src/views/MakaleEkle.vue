<template>
  <div class="makale-ekle" @submit.prevent="makaleEkle">
    <form action="">
      <label for="baslik">Makale Başlık</label>
      <input type="text" id="baslik" name="baslik" v-model="baslik" required />
      <label for="icerik">Makale İçerik</label>
      <input type="text" id="icerik" name="icerik" v-model="icerik" required />
      <button type="submit">Kaydet</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { db, timestamp } from "../firebase/config";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const baslik = ref("");
    const icerik = ref("");

    const makaleEkle = async () => {
      const makale = {
        baslik: baslik.value,
        icerik: icerik.value,
        olusturulmaTarihi: timestamp() //Date.now(),
      };

      const response = await db.collection("makaleler").add(makale).then(() => {
          router.push({ name: "Home" })
      }).catch((err) => {
          console.log(err.message);
      });
      
    };

    return { baslik, icerik, makaleEkle };
  },
};
</script>

<style>
.makale-ekle form {
  max-width: 400px;
  margin: 0 auto;
}

.makale-ekle input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}

.makale-ekle label {
  display: block;
  margin-top: 24px;
}

.makale-ekle button {
  margin-top: 20px;
  background: #000;
  color: #ffffff;
  padding: 6px;
  border-radius: 6px;
  font-size: 1.2em;
  cursor: pointer;
}
</style>