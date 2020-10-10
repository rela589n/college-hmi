<template>
  <div>
    <ul>
      <li v-for="author in allAuthors">
        <author-basic-view :author="author"></author-basic-view>
      </li>
      <li v-if="allAuthors.length === 0">There are no authors</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import AuthorBasicView from "@/components/Author/author-basic-view";
import Author from "@/models/Author";


export default Vue.extend({
  name: "authors-list",
  components: {AuthorBasicView},
  computed: {
    allAuthors() {
      return Author.query()
        .with('tracks.author')
        .get();
    }
  }
});
</script>

<style scoped>

</style>
