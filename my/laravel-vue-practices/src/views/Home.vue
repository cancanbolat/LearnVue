<template>
  <div class="home w-full">
    <section class="py-1 bg-blueGray-50">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
        <div
          class="
            relative
            flex flex-col
            min-w-0
            break-words
            bg-white
            w-full
            mb-6
            shadow-lg
            rounded
          "
        >
          <div class="rounded-t mb-0 px-4 py-3 border-0">
            <div class="flex flex-wrap items-center">
              <div
                class="
                  relative
                  w-full
                  px-4
                  max-w-full
                  flex-grow flex-1
                  text-right
                "
              >
                <!-- change status -->
                <select
                  v-model="status"
                  class="
                    bg-blue-500
                    text-white text-xs
                    font-bold
                    uppercase
                    px-3
                    py-1
                    rounded
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-1
                    ease-linear
                    transition-all
                    duration-150
                  "
                  @change="updateStatus()"
                >
                  <option selected disabled>Select Status</option>
                  <option :value="1">Active</option>
                  <option :value="0">Inactive</option>
                </select>
                <button
                  class="
                    bg-red-500
                    text-white
                    active:bg-red-600
                    text-xs
                    font-bold
                    uppercase
                    px-3
                    py-1
                    rounded
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-1
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="button"
                  @click="sendBulk()"
                >
                  Delete selected products
                </button>
              </div>
            </div>
          </div>
          <div class="block w-full overflow-x-auto">
            <table class="items-center bg-transparent w-full border-collapse">
              <thead>
                <!-- colums start -->
                <tr>
                  <th
                    class="
                      px-6
                      bg-blueGray-50
                      text-blueGray-500
                      align-middle
                      border border-solid border-blueGray-100
                      py-3
                      text-xs
                      uppercase
                      border-l-0 border-r-0
                      whitespace-nowrap
                      font-semibold
                      text-left
                    "
                  >
                    Select
                  </th>
                  <th
                    class="
                      px-6
                      bg-blueGray-50
                      text-blueGray-500
                      align-middle
                      border border-solid border-blueGray-100
                      py-3
                      text-xs
                      uppercase
                      border-l-0 border-r-0
                      whitespace-nowrap
                      font-semibold
                      text-left
                    "
                  >
                    Product Name
                  </th>
                  <th
                    class="
                      px-6
                      bg-blueGray-50
                      text-blueGray-500
                      align-middle
                      border border-solid border-blueGray-100
                      py-3
                      text-xs
                      uppercase
                      border-l-0 border-r-0
                      whitespace-nowrap
                      font-semibold
                      text-left
                    "
                  >
                    Visitors
                  </th>
                  <th
                    class="
                      px-6
                      bg-blueGray-50
                      text-blueGray-500
                      align-middle
                      border border-solid border-blueGray-100
                      py-3
                      text-xs
                      uppercase
                      border-l-0 border-r-0
                      whitespace-nowrap
                      font-semibold
                      text-left
                    "
                  >
                    Unique users
                  </th>
                  <th
                    class="
                      px-6
                      bg-blueGray-50
                      text-blueGray-500
                      align-middle
                      border border-solid border-blueGray-100
                      py-3
                      text-xs
                      uppercase
                      border-l-0 border-r-0
                      whitespace-nowrap
                      font-semibold
                      text-left
                    "
                  >
                    Bounce rate
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- products -->
                <tr
                  v-for="product in productList.data"
                  :key="product.id"
                  class="hover:bg-gray-300 ease-in duration-75"
                  :class="[
                    product.stock_status == 0 ? 'bg-red-400' : 'bg-green-400',
                  ]"
                >
                  <th
                    class="
                      border-t-0
                      px-6
                      align-middle
                      border-l-0 border-r-0
                      text-xs
                      whitespace-nowrap
                      p-4
                      text-left text-blueGray-700
                      flex
                    "
                  >
                    <!-- multiple select -->
                    <p class="mr-2">{{ product.id }}</p>
                    <input
                      type="checkbox"
                      name="selectedItems[]"
                      :value="product.id"
                      v-model="selectedItems"
                    />
                    <p class="ml-2">{{ product.stock_status }}</p>
                  </th>
                  <th
                    class="
                      border-t-0
                      px-6
                      align-middle
                      border-l-0 border-r-0
                      text-xs
                      whitespace-nowrap
                      p-4
                      text-left text-blueGray-700
                    "
                  >
                    {{ product.name }}
                  </th>
                  <td
                    class="
                      border-t-0
                      px-6
                      align-middle
                      border-l-0 border-r-0
                      text-xs
                      whitespace-nowrap
                      p-4
                    "
                  >
                    {{ product.price }} ₺
                  </td>
                  <td
                    class="
                      border-t-0
                      px-6
                      align-center
                      border-l-0 border-r-0
                      text-xs
                      whitespace-nowrap
                      p-4
                    "
                  >
                    x
                  </td>
                  <td
                    class="
                      border-t-0
                      px-6
                      align-middle
                      border-l-0 border-r-0
                      text-xs
                      whitespace-nowrap
                      p-4
                    "
                  >
                    <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                    y
                  </td>
                </tr>
              </tbody>
              <!-- pagination -->
              <!-- <pagination :data="productList" @pagination-change-page="getProducts">
              <span slot="prev-nav">&lt; Previous</span>
              <span slot="next-nav">Next &gt;</span>
            </pagination> -->
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.card-body {
  overflow: auto;
}

.p-5 {
  padding: 5px;
}

.pagination {
  margin-bottom: 0;
  align-content: end;
}

.page-item {
  display: flex;
}
</style>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    const pageNumber = 1;
    return {
      url: "http://localhost:8000/api/product?page=" + pageNumber,
      productList: [],
      selectedItems: [],
      links: [],
      status: null,
    };
  },
  methods: {
    //delete selected items
    sendBulk() {
      fetch("http://localhost:8000/api/multipledelete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: this.$store.getters.getToken },
        body: JSON.stringify({ selectedItems: this.selectedItems }),
      })
        .then(() => {
          this.selectedItems.map((selectedItem) => {
            this.productList.data = this.productList.data.filter((x) => {
              return x.id !== selectedItem;
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateStatus() {
      fetch("http://localhost:8000/api/statusupdate/" + this.status, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: this.$store.getters.getToken },
        body: JSON.stringify({ selectedItems: this.selectedItems }),
      })
        .then(() => {
          this.getProducts();
          this.selectedItems = [];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProducts(page = 1) {
      fetch(this.url, {
        headers: {
          Accept: "application/json",
          Authorization: this.$store.getters.getToken,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.productList = data.data;
          this.links = data.data.links;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>