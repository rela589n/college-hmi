<template>
  <div>
    <ul>
      <li v-for="palylist in playlists">
        <playlist-basic-view :palylist="palylist"></playlist-basic-view>
      </li>
      <li v-if="playlists.length === 0">There are no playlists</li>
    </ul>
  </div>
</template>

<script>
import PlaylistBasicView from "./Playlist/playlist-basic-view";

export default {
  name: "all-playlists-list",
  components: {PlaylistBasicView},
  props: ['playlists']
}
</script>

<style scoped>

</style>