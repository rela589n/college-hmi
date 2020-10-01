<template>
  <div>
    <label>
      Підстрока
      <input type="text" v-model="searchString">
    </label>
    <label>
      Текст:
      <input type="text" v-model="inputText">
    </label>
    <label>
      Результат:
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
      searchString: 'S',
    }
  },
  computed: {
    result: function (): string {
      let firstIndex: number = this.inputText.indexOf(this.searchString);
      let lastIndex: number = this.inputText.lastIndexOf(this.searchString);

      if (firstIndex !== lastIndex) {
        return this.inputText.slice(0, firstIndex + 1)
          + '*'.repeat(lastIndex - firstIndex - 1)
          + this.inputText.slice(lastIndex);
      }

      return this.inputText;
    },
  },
});

</script>

<style scoped>

</style>
