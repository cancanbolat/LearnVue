<template>
  <div class="">
    <p>burası tab-2 iletişim bölümü</p>
    <button @click="counter++" class="btn btn-danger mx-2">Arttır: {{ counter }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  activated(){
    console.log("Tab 2 actived");
  },
  deactivated(){
    console.log("Tab 2 DEactived");
  }
};
</script>

<style>
</style>