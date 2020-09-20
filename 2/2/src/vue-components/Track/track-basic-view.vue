<template>
  <div class="card my-3" v-bind:id="track.uuid">
    <div class="card-body">
      <p class="d-block">Name: <span> {{ track.name }} </span></p>
      <p class="d-block">Author: <span> {{ track.author }} </span></p>
      <audio controls>
        <source v-bind:src="track.url">
      </audio>
      <a class="d-block" target="_blank" v-bind:href="track.url">Download</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "track-basic-view",
  props: ['track']
}
</script>

<style scoped>

</style>