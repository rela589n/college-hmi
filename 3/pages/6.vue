<template>
  <div>
    <input type="number" min="1" max="100" v-model="matrixSize">

    <table class="table table-bordered">
      <tr v-for="numbersRow in numbersMatrix">
        <td v-for="number in numbersRow">{{ number}}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      matrixSize: 1
    }
  },
  computed: {
    numbersMatrix: function (): number[][] {
      let size: number = +this.matrixSize;
      if (size > 100) {
        return [];
      }

      let result: number[][] = new Array(size);
      for (let i: number = 0; i < result.length; ++i) {
        result[i] = [];
      }

      let rowIsEven: boolean = true;
      let counter: number = 1;

      for (let j: number = 1; j <= this.matrixSize; ++j) {
        if (rowIsEven) {
          for (let i: number = 0; i < this.matrixSize; ++i, ++counter) {
            result[i].push(counter);
          }
        } else {
          for (let i: number = this.matrixSize - 1; i >= 0; --i, ++counter) {
            result[i].push(counter);
          }
        }

        rowIsEven = !rowIsEven;
      }

      return result;
    }

  },
});

</script>

<style scoped>

</style>
