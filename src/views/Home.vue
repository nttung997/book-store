<template>
  <div class="home">
    <div class="container">
      <div class="item item-1" v-for="book in books" :key="book.isbn13">
        <b-card>
          <b-card-body>
            <b-card-img-lazy
              :top="true"
              :src="book.image"
              alt="Image"
            ></b-card-img-lazy>
            <b-card-title class="text-center">{{ book.title }}</b-card-title>
            <div class="text-center">
              <b-button
                :to="{ name: 'detail', params: { isbn13: book.isbn13 } }"
                variant="primary"
                >Detail</b-button
              >
            </div>
          </b-card-body>
        </b-card>
      </div>
    </div>
    <!-- <b-container fluid="xl">
      <b-card-group columns>
        <b-card v-for="book in books" :key="book.isbn13" class="mb-2">
          <b-card-body>
            <b-card-img-lazy
              :top="true"
              :src="book.image"
              alt="Image"
            ></b-card-img-lazy>
            <b-card-title class="text-center">{{ book.title }}</b-card-title>
            <div class="text-center">
              <b-button
                :to="{ name: 'detail', params: { isbn13: book.isbn13 } }"
                variant="primary"
                >Detail</b-button
              >
            </div>
          </b-card-body>
        </b-card>
      </b-card-group>
    </b-container> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      books: (state) => state.book.books.books || [],
    }),
  },
  watch: {
    "$route.query.search": function () {
      this.$store.dispatch("book/search", this.$route.query.search);
    },
  },
  created() {
    if (this.$route.query.search) {
      this.$store.dispatch("book/search", this.$route.query.search);
    } else {
      this.$store.dispatch("book/new");
    }
  },
};
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 10px;
}
</style>