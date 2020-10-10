<template>
  <div>
    <ul>
      <li v-for="track in tracks">
        <track-basic-view :track="track"></track-basic-view>
      </li>
    </ul>
    <new-track-form v-on:submit="addNew"></new-track-form>
  </div>
</template>

<script>
import TrackBasicView from "./Track/track-basic-view";
import NewTrackForm from "./new-track-form";
import CreateTrackDtoToTrackTransformer from "../Transformers/CreateTrackDtoToTrackTransformer";

export default {
  name: "all-tracks-list",
  components: {NewTrackForm, TrackBasicView},
  props: ['tracks'],
  methods: {
    addNew: function (e, createTrackDto) {
      e.preventDefault();

      let chunk = CreateTrackDtoToTrackTransformer.transform(createTrackDto);

      this.$emit('created-new-track', chunk);
    }
  }
}
</script>

<style scoped>

</style>