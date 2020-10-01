<template>
  <div>
    <label>
      Текст:
      <input type="text" v-model="inputText">
    </label>
    <label>
      Індекс з:
      <input type="number" min="0" v-bind:max="(inputText.length - 1)" v-model="startIndex">
    </label>
    <label>
      Довжина:
      <input type="number" min="1" v-bind:max="inputText.length - startIndex" v-model="substrLength">
    </label>
    <label>
      Результуюча підстрока:
      <input type="text" readonly v-bind:value="result">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      inputText: '',
      startIndex: 3,
      substrLength: 8,
    }
  },
  computed: {
    result: function (): string {
      return this.inputText.substr(this.startIndex, this.substrLength);
    },
  },
});

</script>

<style scoped>

</style>
