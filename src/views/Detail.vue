<template>
  <div class="home">
    <b-container fluid="xl">
      <b-card :img-src="book.image" img-alt="Book image" img-left class="mb-3">
        <b-list-group flush>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <span>Price</span>
            <span class="text-danger">{{ book.price }}</span>
          </b-list-group-item>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <span>Rating</span>
            <span>
              <b-form-rating :value="book.rating" readonly variant="warning">
              </b-form-rating>
            </span>
          </b-list-group-item>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <span>Authors</span>{{ book.authors }}
          </b-list-group-item>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <span>Publisher</span>{{ book.publisher }}
          </b-list-group-item>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <span>Published</span>{{ book.year }}
          </b-list-group-item>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <span>Pages</span>{{ book.pages }}
          </b-list-group-item>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <span>Language</span>{{ book.language }}
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Detail",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      book: (state) => state.book.book,
    }),
  },
  created() {
    this.$store.dispatch("book/books", this.$route.params.isbn13);
  },
};
</script>
