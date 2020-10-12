<template>
  <div class="card">
    <h2 class="ml-2 mt-3">Add new:</h2>
    <form class="card-body" @submit.prevent="delegateSubmit">
      <label class="d-block">Name: <input required type="text" v-model="createTrackDto.name"></label>
      <label class="d-block">Author: <input required type="text" v-model="createTrackDto.author"></label>
      <label class="d-block">url: <input required type="text" v-model="createTrackDto.url"></label>
      <label class="d-block">Album: <input type="text" v-model="createTrackDto.album"></label>
      <label class="d-block">Playlist: <input type="text" v-model="createTrackDto.playlist"></label>

      <button class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {CreateTrackDto} from "~/store";

export default Vue.extend({
  name: "new-track-form",
  data: function () {
    return {
      createTrackDto: <CreateTrackDto>{
        name: '' as string,
        author: '' as string,
        url: '' as string,
        album: '' as string,
        playlist: '' as string,
      }
    };
  },
  methods: {
    delegateSubmit: function (e: Event) {
      this.createTrackDto.name = this.createTrackDto.name.trim();
      this.createTrackDto.author = this.createTrackDto.author.trim();
      this.createTrackDto.url = this.createTrackDto.url.trim();
      this.createTrackDto.album = this.createTrackDto.album.trim();
      this.createTrackDto.playlist = this.createTrackDto.playlist.trim();

      this.$emit('post-track', {dto: this.createTrackDto});
    }
  }
});
</script>

<style scoped>

</style>
