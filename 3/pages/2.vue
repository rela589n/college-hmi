<template>
  <div>
    <label>
      В десятковій:
      <input type="text" v-model="inputNumber">
    </label>
    <label>
      В двійковій:
      <input type="text" readonly v-bind:value="result">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      inputNumber: '',
    }
  },
  computed: {
    result: function (): string {
      let parsedInteger: number = parseInt(this.inputNumber);

      if (isNaN(parsedInteger)) {
        return '';
      }

      return parsedInteger.toString(2);
    },
  },
});

</script>

<style scoped>

</style>
