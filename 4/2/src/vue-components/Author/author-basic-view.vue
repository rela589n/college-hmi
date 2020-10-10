<template>
  <div class="card my-3" v-bind:id="author.uuid">
    <div class="card-body">
      <h2 class="d-block">Name: <span> {{ author.name }} </span></h2>
      <br>
      <br>
      <h4>List of tracks:</h4>
      <ul>
        <li v-for="track in author.tracks">
          <track-basic-view :track="track"></track-basic-view>
        </li>
        <li v-if="author.tracks.length ===0">Author has no tracks</li>
      </ul>

    </div>
  </div>
</template>

<script>
import TrackBasicView from "../Track/track-basic-view";
export default {
  name: "author-basic-view",
  components: {TrackBasicView},
  props: ['author']
}
</script>

<style scoped>

</style>