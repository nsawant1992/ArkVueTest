<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h6>Edit User</h6>
      </div>
      <div class="card-body">
        <Form @submit="onSubmit" :validation-schema="schema">
          <div v-if="isLoading">
            <div class="text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <br />
              Loading User Details
            </div>
          </div>
          <div v-if="user !== null && !isLoading">
            <div class="form-group row">
              <div class="col-6">
                <label>User Name:</label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  class="form-control"
                  :value="user.name"
                  @input="updateUserInputAction"
                />
                <ErrorMessage name="name" class="text-danger" />
              </div>
              <div class="col-6">
                <label>User Email:</label>
                <Field
                  name="email"
                  type="text"
                  class="form-control"
                  :value="user.email"
                  @input="updateUserInputAction"
                />
                <ErrorMessage name="email" class="text-danger" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-6">
                <label>Website:</label>
                <Field
                  id="title"
                  name="website"
                  type="text"
                  class="form-control"
                  :value="user.website"
                  @input="updateUserInputAction"
                />
                <ErrorMessage name="website" class="text-danger" />
              </div>
              <div class="col-6">
                <label>Phone:</label>
                <Field
                  name="phone"
                  type="text"
                  class="form-control"
                  :value="user.phone"
                  @input="updateUserInputAction"
                />
                <ErrorMessage name="phone" class="text-danger" />
              </div>
              <div class="form-group col-md-6">
                <label for="city">City</label>
                <Field
                  name="city"
                  type="text"
                  class="form-control"
                  :value="user.address.city"
                  @input="updateUserInputAction"
                />
                <!-- <ErrorMessage name="phone" class="text-danger" /> -->
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">Street</label>
                 <Field
                  name="street"
                  type="text"
                  class="form-control"
                  :value="user.address.street"
                  @input="updateUserInputAction"
                />
                 <ErrorMessage name="phone" class="text-danger" />
              </div>
              <div class="form-group col-md-2">
                <label for="zip">Zip</label>
                 <Field
                  name="zip"
                  type="text"
                  class="form-control"
                  :value="user.address.zipcode"
                  @input="updateUserInputAction"
                />
                <ErrorMessage name="zip" class="text-danger" />
              </div>
            </div>
            <br/>
            <div class="form-group">
              <router-link to="/users" class="btn btn-secondary mr-2"
                >Cancel</router-link
              >
              <input
                type="submit"
                class="btn btn-primary"
                value="Save Update"
                v-if="!isUpdating"
              />
              <span></span>
              <button
                class="btn btn-primary"
                type="button"
                disabled
                v-if="isUpdating"
              >
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Saving...
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  data() {
    return {
      id: null,
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },

  created: function () {
    this.id = this.$route.params.id;
    this.fetchDetailUser(this.id);
  },

  computed: {
    ...mapGetters(["isUpdating", "updatedData", "user", "isLoading"]),
  },

  methods: {
    ...mapActions(["updateUser", "updateUserInput", "fetchDetailUser"]),
    onSubmit() {
      const { name, phone, email, website } = this.user;
      // return false;
      this.updateUser({
        id: this.id,
        name: name,
        email: email,
        phone: phone,
        website: website,
      });
    },
    updateUserInputAction(e) {
      this.updateUserInput(e);
    },
  },

  watch: {
    updatedData: function () {
      if (this.updatedData !== null && !this.isUpdating) {
        this.$swal.fire({
          text: "Success, User has been updated successfully !",
          icon: "success",
          position: "top-end",
          timer: 1000,
        });

        this.$router.push({ name: "Users" });
      }
    },
  },

  setup() {
    // Define a validation schema
    const schema = yup.object({
      title: yup.string().required().min(5),
      price: yup.string().required(),
      description: yup.string().required().min(5),
    });

    return {
      schema,
    };
  },
};
</script>
