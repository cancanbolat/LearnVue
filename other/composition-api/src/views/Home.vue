<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="butonTiklandi">Click</button>
    <p ref="bilgiler">xxxxxxxxxx</p>
    <p>{{ name }} -- {{ skill.skillName }}</p>
    <input type="text" v-model="name" />
    <br />
    <hr />
    <br />
    <input type="text" v-model="search" />
    <div v-for="name in searches" :key="name">
      <p>{{ name }}</p>
    </div>
  </div> -->
  <div>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import PostList from "../components/PostList.vue";

export default {
  components: {
    PostList,
  },
  setup() {
    const bilgiler = ref(null);
    let name = ref("alican");
    let skill = reactive({
      skillName: "code",
    });
    const names = ref(["can", "alican", "ali"]);

    const search = ref("");
    const searches = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const butonTiklandi = () => {
      console.log(bilgiler, bilgiler.value);
      /* yukaridaki p etiketi ref olarak bilgiler'i kullandığı 
        için bilgiler.value komple p'nin elementine erişiriz
      */
      name.value = "can";
      skill.skillName = "write code";
    };

    watch(search, () => {
      console.log("watch çalıştı");
    });

    watchEffect(() => {
      console.log("watchEffect çalıştı", search.value);
    });

    const posts = ref([
      { id: 1, title: "post 1", desc: "desc 1" },
      { id: 2, title: "post 2", desc: "desc 2" },
      { id: 3, title: "post 3", desc: "desc 3" },
      { id: 4, title: "post 4", desc: "desc 4" },
      { id: 5, title: "post 5", desc: "desc 5" },
    ]);

    return { butonTiklandi, bilgiler, name, skill, names, search, searches, posts };
  },
};
</script>
