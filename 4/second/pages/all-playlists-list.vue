<template>
  <div>
    <ul>
      <li v-for="playlist in allPlaylists">
        <playlist-basic-view :playlist="playlist"></playlist-basic-view>
      </li>
      <li v-if="allPlaylists.length === 0">There are no playlists</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import PlaylistBasicView from "./../components/Playlist/playlist-basic-view";
import Playlist from "@/models/Playlist";

export default Vue.extend({
  name: "all-playlists-list",
  components: {PlaylistBasicView},
  computed: {
    allPlaylists() {
      return Playlist.query()
        .with('tracks.author')
        .get();
    }
  }
})
</script>

<style>
ul {
  list-style-type: none;
}
</style>
