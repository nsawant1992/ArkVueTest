<template>
  <div class="home">
    <div class="p-4">
      <div class="row">
        <div class="col-md-2">
          <router-link to="/users" class="btn btn-primary p-4 dashboard-widget">
            All Users
            <!-- <span class="badge badge-success" v-if="usersPaginatedData !== null"> 
              {{ usersPaginatedData?.pagination?.total }}  
            </span> -->
          </router-link>
        </div>
        <div class="col-md-2">
          <router-link to="/users/create" class="btn btn-primary p-4 dashboard-widget">
            Create New User <i class="fa fa-plus-circle"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <user-list-component></user-list-component>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UserListComponent from '../components/users/list/UserListComponent.vue';
export default {
  components: { UserListComponent },
  name: "Home",

  computed: { ...mapGetters(["usersPaginatedData"]) },

  methods: {
    ...mapActions(["fetchAllUsers"]),
  },

  created() {
    this.fetchAllUsers(1);
  },
};
</script>
