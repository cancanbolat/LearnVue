<template>
  <h1>Yapılacak Güncelle {{ id }}</h1>
  <form @submit.prevent="handleSubmit">
    <label>Başlık</label>
    <input type="text" v-model="baslik" required />
    <br /><br />
    <label>İçerik</label>
    <input type="text" v-model="icerik" required />
    <button>Güncelle</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      baslik: "",
      icerik: "",
      url: "http://localhost:3000/yapilacaklar/" + this.id,
    };
  },
  mounted() {
    fetch(this.url).then((res) => {
      res.json().then((data) => {
        (this.baslik = data.baslik), (this.icerik = data.icerik);
      });
    });
  },
  methods: {
    handleSubmit() {
      fetch(this.url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          baslik: this.baslik,
          icerik: this.icerik,
        }),
      }).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
</style>