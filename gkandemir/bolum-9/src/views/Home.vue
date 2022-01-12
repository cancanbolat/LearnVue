<script>
import Memory from "./Memory.vue";
import Tab1 from "../components/Tab1.vue";
import Tab2 from "../components/Tab2.vue";
import Tab3 from "../components/Tab3.vue";

export default {
  name: "Home",
  data() {
    return {
      selectedComponent: "tab1",
    };
  },
  components: {
    Memory,
    tab1: Tab1,
    tab2: Tab2,
    tab3: Tab3,
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <Memory>
          <h1 slot="title">Title</h1>
          <p slot="content" class="text-center">memory component</p>
        </Memory>
        <hr />
        <button @click="selectedComponent = 'tab1'" class="btn btn-primary">
          Tab 1
        </button>
        <button @click="selectedComponent = 'tab2'" class="btn btn-info mx-3">
          Tab 2
        </button>
        <button @click="selectedComponent = 'tab3'" class="btn btn-success">
          Tab 3
        </button>
        <hr />
        {{ selectedComponent }}
        <hr />
        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>