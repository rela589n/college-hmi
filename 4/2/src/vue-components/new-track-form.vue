<template>
  <div class="card">
    <h2 class="ml-2 mt-3">Add new:</h2>
    <form class="card-body" @submit="delegateSubmit">
      <label class="d-block">Name: <input required type="text" v-model="createTrackDto.name"></label>
      <label class="d-block">Author: <input required type="text" v-model="createTrackDto.author"></label>
      <label class="d-block">url: <input required type="url" v-model="createTrackDto.url"></label>
      <label class="d-block">Album: <input type="text" v-model="createTrackDto.album"></label>
      <label class="d-block">Playlist: <input type="text" v-model="createTrackDto.playlist"></label>

      <button class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "new-track-form",
  data: function () {
    return {
      createTrackDto: {}
    };
  },
  methods: {
    delegateSubmit: function(e) {
      this.$emit('submit', e, this.createTrackDto);
    }
  }

}
</script>

<style scoped>

</style>