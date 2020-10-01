<template>
  <div>
    <label>
      Число А, модуль:
      <input type="number" v-model="modulo">
    </label>
    <br>
    <br>
    <label>
      Кількість елементів, які по модулю перевершують число А {{ modulo }}:
      <input type="text" readonly v-bind:value="maxElement">
    </label>
    <br>
    <br>

    <ul>
      <li v-for="(number, index) in numbers">
        <div>
          <input type="number" v-model="numbers[index]">
          <button type="button" class="btn btn-danger" @click="numbers.splice(index, 1)"><-</button>
        </div>
      </li>
    </ul>

    <button type="button" class="btn btn-primary" @click="numbers.push(0)">Додати</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      numbers: [1, 2],
      modulo: 0,
    }
  },
  computed: {
    maxElement: function (): number {
      return this.numbers.reduce((carry, current) => {
        return carry + +(Math.abs(current) > Math.abs(this.modulo));
      }, 0)
    }
  },
});

</script>

<style scoped>

</style>
