<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <p>{{ post.title }}</p>
      <hr />
    </div>
    <div v-if="errors">
        {{errors}}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  /* props: ['posts'],
    setup(props) { //burda kullanmasak da olur
        console.log(props.posts);
    } */
  setup() {
    const posts = ref([]);
    const errors = ref([]);

    const getPosts = async () => {
      try {
        let datas = await fetch("https://jsonplaceholder.typicode.com/posts");
        posts.value = await datas.json();

        if (!datas.ok) {
          throw new Error("Cannot get datas");
        }
      } catch (error) {
        errors.value = error.message;
      }
    };

    getPosts();

    return { posts, errors };
  },
};
</script>

<style>
</style>