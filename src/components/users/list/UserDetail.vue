<template>
  <div class="row border-1 p-2">
    <div class="col-3">{{ user }}</div>
    <div class="col-2">
      <strong class="text-danger">{{ user.name }} $</strong>
    </div>
    <div class="col-3">
      <span class="badge badge-info">{{ user.email}}</span>
    </div>
    <div class="col-2">
      <router-link
        :to="{ name: 'UserEdit', params: { id: user.id } }"
        class="btn btn-primary"
        title="Edit User"
        >
        <i class="fa fa-pencil"></i></router-link
      >
      <button class="btn btn-danger ml-2" @click="deleteUserModal(user.id)" title="Delete User">
         <i class="fa fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UserDetail",
  props: {
    user: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },

  computed: { ...mapGetters(["isDeleting", "deletedData"]) },

};
</script>
