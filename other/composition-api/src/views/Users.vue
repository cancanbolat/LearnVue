<template>
  <div class="main">
      <div v-if="errors.length > 0">{{errors}}</div>
      <div v-for="user in users" :key="user.id">
          <p>{{user.name}}</p>
          <p>{{user.username}}</p>
          <p>{{user.email}}</p>
          <hr>
      </div>
  </div>
</template>

<script>
import GetUsersComposable from "../composables/getUsers";

export default {
  setup() {
    const { users, errors, getData } = GetUsersComposable();
    getData();
    return { users, errors };
  },
};
</script>

<style>
</style>