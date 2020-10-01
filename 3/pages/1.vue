<template>
  <div>
    <input type="text" v-model="inputNumber">
    <p>{{ result }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      inputNumber: ''
    }
  },
  computed: {
    result: function (): number {
      let chars: string[] = this.inputNumber.split('');
      let digits: number[] = chars.map((ch: string) => parseInt(ch));

      return digits.reduce((d, carry) => d + carry, 0);
    },
  }
})

</script>

<style scoped>

</style>
