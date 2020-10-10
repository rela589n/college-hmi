<template>
  <div id="app">
    <app-header-menu @select-page="changePage" :current-page="currentPage"></app-header-menu>
    <div class="container">
      <all-tracks-list v-if="currentPage.is( 'all-tracks-list')" :tracks="tracksList"
                       v-on:created-new-track="handleTrackDependencies"></all-tracks-list>
      <all-playlists-list v-if="currentPage.is( 'all-playlists-list')" :playlists="playlistsList"></all-playlists-list>
      <authors-list v-if="currentPage.is( 'authors-list')" :authors="authorsList"></authors-list>
      <single-track-page v-if="currentPage.is( 'single-track-page')" :track="selectedTrack"></single-track-page>
    </div>
  </div>
</template>

<script>
import AllTracksList from "./vue-components/all-tracks-list";
import SingleTrackPage from "./vue-components/single-track-page";
import AuthorsList from "./vue-components/authors-list";
import AllPlaylistsList from "./vue-components/all-playlists-list";
import AppHeaderMenu from "./vue-components/app-header-menu";
import Page from "./ValueObjects/Page.js";
import {Track} from "./models/Track";
import Playlist from "./models/Playlist";
import Author from "./models/Author";

export default {
  name: "App",
  components: {AppHeaderMenu, AppHeader: AppHeaderMenu, AllPlaylistsList, AuthorsList, SingleTrackPage, AllTracksList},
  data: () => ({
    currentPage: new Page('all-tracks-list'),
    tracksList: [],
    playlistsList: [
      new Playlist('Default')
    ],
    authorsList: [
      new Author('Score')
    ],
    selectedTrack: null,
  }),
  mounted() {
    let playlist = this.playlistsList[0];
    let author = this.authorsList[0];

    let track = new Track('Stay', author, 'http://cd.textfiles.com/10000gp2/500SNDS/SNORT.WAV', 'don\'t know', playlist);
    playlist.tracks.push(track);
    author.addTrack(track);

    this.tracksList.push(track);
  },
  methods: {
    changePage: function (page) {
      this.currentPage = new Page(page);
    },
    handleTrackDependencies: function (track) {
      this.tracksList.push(track);

      let author = this.authorsList.find(a => a.name === track.author)
      if (author === undefined) {
        this.authorsList.push(new Author(track.author, [track]));
      }
      else {
        author.addTrack(track);
      }

      let playlist = this.playlistsList.find(l => l.name === track.playlist);
      if (playlist === undefined) {
        this.playlistsList.push(new Playlist(track.playlist, [track]));
      }
      else {
        playlist.tracks.push(track);
      }
       // http://mp3ritm.top/download.php?id=92389
    }
  },
}
</script>

<style>
ul {
  list-style-type: none;
}
</style>