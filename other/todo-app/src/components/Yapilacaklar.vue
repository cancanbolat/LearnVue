<template>
  <div class="yapilacak" :class="{ yapildi: yapilacak.yapildi }">
    <div class="baslik" @click="detayGoster = !detayGoster">
      <h3>{{ yapilacak.baslik }}</h3>
      <div class="icon">
        <router-link
          :to="{ name: 'YapilacakGuncelle', params: { id: yapilacak.id } }"
          ><span class="material-icons">edit</span>
        </router-link>
        <span class="material-icons" @click="yapilacakSil">delete</span>
        <span class="material-icons" @click="toggle">done</span>
      </div>
    </div>
    <div v-if="detayGoster" class="detay">
      <p>{{ yapilacak.icerik }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["yapilacak"],
  data() {
    return {
      detayGoster: false,
      url: "http://localhost:3000/yapilacaklar/" + this.yapilacak.id,
    };
  },
  methods: {
    yapilacakSil() {
      fetch(this.url, { method: "DELETE" })
        .then(() => this.$emit("sil", this.yapilacak.id))
        .catch((error) => {
          console.log(error);
        });
    },
    toggle() {
      fetch(this.url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ yapildi: !this.yapilacak.yapildi }),
      })
        .then(() => this.$emit("yapildi", this.yapilacak.id))
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.yapilacak {
  margin: 20px auto;
  background-color: #4b4b4b;
  padding: 10px 20px;
  border-radius: 10px;
  border: 3px solid #bb2020;
  color: #f7f1e3;
}

.yapilacak:hover {
  box-shadow: 8px 10px 10px rgba(2, 2, 2, 0.3);
}

h3 {
  cursor: pointer;
  display: block;
}

.baslik {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 25px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}

.material-icons:hover {
  color: #2f3543;
}

.yapilacak.yapildi {
  border: 3px solid #218c74;
}

.yapilacak.yapildi .tick {
  color: #218c74;
}
</style>