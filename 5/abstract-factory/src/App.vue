<template>
  <div id="app">
    <label>
      Select terrain:
      <select name="" id="" v-model="terrainType">
        <option disabled selected>...</option>
        <option value="earth">Earth</option>
        <option value="mars">Mars</option>
      </select>
    </label>
    <div>
      <br>
      <label>
        Forest Height
        <input readonly type="text" v-bind:value="forest.treesHeight()">
      </label>
      <br>
      <label>
        Wind power on the plains:
        <input readonly type="text" v-bind:value="plains.windPower()">
      </label>
      <br>
      <label>
        Sound of the sea:
        <input readonly type="text" v-bind:value="sea.noise()">
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import EarthTerrainFactory from "@/Factories/Terrain/EarthTerrainFactory";
import MarsTerrainFactory from "@/Factories/Terrain/MarsTerrainFactory";
import TerrainFactory from "@/Factories/Terrain/TerrainFactory";
import NullTerrainFactory from "@/Factories/Terrain/NullTerrainFactory";

@Component({
  components: {
    HelloWorld,
  },
  data: () => ({
    terrainType: "",
  }),
  computed: {
    forest() {
      return this.terrainFactory.makeForest();
    },
    sea() {
      return this.terrainFactory.makeSea();
    },
    plains() {
      return this.terrainFactory.makePlains(30);
    },
    terrainFactory(): TerrainFactory {
      switch (this.terrainType) {
        case "earth":
          return new EarthTerrainFactory();
        case "mars":
          return new MarsTerrainFactory();
        default:
          return new NullTerrainFactory();
      }
    }
  }
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
