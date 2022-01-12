<template>
  <div class="home"></div>
  <NavbarFilter @filterDurum="aktifSekme=$event" :aktifSekme="aktifSekme" />
  <div v-if="yapilacaklar.length">
    <div v-for="yapilacak in yapilacaklar" :key="yapilacak.id">
      <YapilacaklarComponent
        :yapilacak="yapilacak"
        @sil="silHandle"
        @yapildi="yapildiHandle"
      />
    </div>
  </div>
  <div v-else>
    <p>Yapılcaklar yükleniyor</p>
  </div>
</template>

<script>
import YapilacaklarComponent from "../components/Yapilacaklar.vue";
import NavbarFilter from '../components/NavbarFilter.vue'

export default {
  components: {
    YapilacaklarComponent,
    NavbarFilter
  },
  data() {
    return {
      yapilacaklar: [],
      aktifSekme: 'hepsi'
    };
  },
  methods: {
    silHandle(id) {
      this.yapilacaklar = this.yapilacaklar.filter((yap) => {
        return yap.id !== id;
      });
    },
    yapildiHandle(id) {
      let yap = this.yapilacaklar.find((x) => {
        return x.id == id;
      });

      yap.yapildi = !yap.yapildi;
    },
  },
  mounted() {
    fetch("http://localhost:3000/yapilacaklar")
      .then((res) => res.json())
      .then((data) => (this.yapilacaklar = data))
      .catch((error) => console.log(error));
  },
};
</script>
