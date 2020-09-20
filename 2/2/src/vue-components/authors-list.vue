<template>
  <div>
    <ul>
      <li v-for="author in authors">
        <author-basic-view :author="author"></author-basic-view>
      </li>
      <li v-if="authors.length === 0">There are no authors</li>
    </ul>
  </div>
</template>

<script>
import AuthorBasicView from "./Author/author-basic-view";
export default {
  name: "authors-list",
  components: {AuthorBasicView},
  props: ['authors'],
}
</script>

<style scoped>

</style>