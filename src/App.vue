<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" class="mb-5">
      <b-navbar-brand :to="{ name: 'home' }">Book Store</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="onSubmit">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search books by Title, Author or ISBN"
              v-model="search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState({}),
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: "home", query: { search: this.search } });
    },
  },
};
</script>
