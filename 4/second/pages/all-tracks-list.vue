<template>
  <div>
    <ul>
      <li v-for="track in allTracks">
        <track-basic-view :track="track"></track-basic-view>
      </li>
    </ul>
    <new-track-form v-on:post-track="createTrack"></new-track-form>
  </div>
</template>

<script type="ts">
import Vue from 'vue'
import TrackBasicView from "@/components/Track/track-basic-view";
import NewTrackForm from "@/components/Track/new-track-form";
import Track from "@/models/Track";
import {mapActions} from "vuex";


export default Vue.extend({
  name: "all-tracks-list",
  components: {NewTrackForm, TrackBasicView},
  methods: {
    ...mapActions([
      'createTrack'
    ]),
  },
  computed: {
    allTracks() {
      return Track.query()
        .with('author')
        .get()
    },
  }
})
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
