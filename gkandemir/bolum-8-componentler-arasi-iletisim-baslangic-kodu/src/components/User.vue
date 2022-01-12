<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <button @click="changeName">Adımı Değiştir</button>
    <p>{{ childData }}</p>
    <p>{{ age }}</p>
    <hr />
    <div class="row">
      <app-user-detail :age="age" :name="title" :desc="desc"></app-user-detail
      ><!-- @childEvent="childData = $event" -->
      <app-user-edit :age="age"></app-user-edit
      ><!-- @ageWasChanged="age = $event" -->
    </div>
  </div>
</template>
<script>
import { eventBus } from "../main";
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";
export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
  data() {
    return {
      title: "Can",
      desc: "example desc",
      childData: "",
      age: 21,
    };
  },
  methods: {
    changeName() {
      this.title = "Yasemin";
    },
  },
  created() {
    eventBus.$on("ageWasChanged", (data) => (this.age = data));
  },
};
</script>

<style>
div.container {
  margin-top: 30px;
  padding: 20px 40px;
  background-color: #6a8d99;
  border: 1px solid #666;
}
div.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
