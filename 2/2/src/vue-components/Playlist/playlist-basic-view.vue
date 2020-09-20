<template>
  <div class="card my-3" v-bind:id="palylist.uuid">
    <h2 class="m-3"> {{ palylist.name }} </h2>
    <ul>
      <li v-for="track in palylist.tracks">
        <track-basic-view :track="track"></track-basic-view>
      </li>
      <li v-if="palylist.tracks.length ===0">There are no tracks</li>
    </ul>
  </div>
</template>

<script>
import TrackBasicView from "../Track/track-basic-view";
export default {
  name: "playlist-basic-view",
  components: {TrackBasicView},
  props: ['palylist']
}
</script>

<style scoped>

</style>