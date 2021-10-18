<template>
  <div class="home">
    <b-container fluid="xl">
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
    </b-container>
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
  created() {
    this.$store.dispatch("book/search", "JavaScript");
  },
};
</script>
