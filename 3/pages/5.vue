<template>
  <div>
    <label>
      Число А, модуль:
      <input type="number" v-model="moduloText">
    </label>
    <br>
    <br>
    <label>
      Кількість елементів, які по модулю перевершують число А ({{ moduloText }}):
      <input type="text" readonly v-bind:value="maxElements()">
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
      numbers: ['1', '2'],
      moduloText: '0',
    }
  },
  computed: {
    intNumbers: function (): number[] {
      return this.numbers.map((x: string) => parseInt(x) || 0);
    },
    modulo: function (): number {
      return parseInt(this.moduloText) || 0;
    }
  },
  methods: {
    maxElements: function (): number {
      return this.intNumbers.reduce(
        (carry: number, current: number) => {
          return carry + +(Math.abs(current) > Math.abs(this.modulo));
        },
        0
      );
    }
  },
});

</script>

<style scoped>

</style>
