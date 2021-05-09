<template>
  <div class="container">
    <div class="row justify-content-center mt-2 mb-2">
      <div class="col-8">
        <h4 class="text-left mb-2">All Users</h4>
      </div>
    </div>
    <div class="">
      <div class="" v-if="!isLoading">
        <div class="row border-bottom border-top p-2 bg-light">
          <div class="col-3">Name</div>
          <div class="col-2">User Name</div>
          <div class="col-3">Email</div>
          <div class="col-2">Actions</div>
        </div>
        
        <div v-for="(item, index) in userList" :key="item.id">
          <!-- {{item.name}} -->
          <div class="row border-1 p-2">
            
            <div class="col-3">{{ item.name }}</div>
            <div class="col-2">
              <div class="col-3">{{ item.username }}</div>
            </div>
            <div class="col-3">
               <div class="col-3">{{ item.email }}</div>
            </div>
            <div class="col-2">
              <router-link
                :to="{ name: 'UserEdit', params: { id: index } }"
                class="btn btn-primary"
                title="Edit User"
              >
                <i class="fa fa-pencil"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isLoading" class="text-center mt-5 mb-5">
        Loading Users...
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>

    <!-- Insert Pagination Part -->
    <div
      v-if="userList !== null"
      class="vertical-center mt-2 mb-5"
    >
      <v-pagination
        v-model="query.page"
        :range-size="2"
        active-color="#DCEDFF"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import UserDetail from "../list/UserDetail";
// import VPagination from "vue3-pagination";
// @update:modelValue="getResults"
export default {
  data() {
    return {
      query: {
        page: 1,
        search: "",
      },
    };
  },
  components: {
    // UserDetail,
    // VPagination,
  },
  computed: {
    ...mapGetters(["userList", "isLoading"]),
  },

  methods: {
    ...mapActions(["fetchAllUsers"]),

    getResults() {
      this.fetchAllUsers(this.query);
    },
  },

  created() {
    console.log(this.fetchAllUsers());
  },
};
</script>
