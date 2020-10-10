<template>
  <div class="card my-3" v-bind:id="playlist.uuid">
    <h2 class="m-3"> {{ playlist.name }} </h2>
    <ul>
      <li v-for="track in playlist.tracks">
        <track-basic-view :track="track"></track-basic-view>
      </li>
      <li v-if="playlist.tracks.length === 0">There are no tracks</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import TrackBasicView from "../Track/track-basic-view";

export default Vue.extend({
  name: "playlist-basic-view",
  components: {TrackBasicView},
  props: ['playlist']
});
</script>

<style scoped>

</style>
