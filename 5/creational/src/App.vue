<template>
  <div id="app">
    <label>
      Select terrain:
      <select name="" id="" v-model="terrainType">
        <option disabled selected>...</option>
        <option value="earth">Earth</option>
        <option value="mars">Mars</option>
        <option value="custom">Custom</option>
      </select>
    </label>
    <br>
    <br>
    <div v-if="terrainType === 'custom'">
      <label>
        Forest type:
        <select v-model="customTypeConfig.forest.name">
          <option disabled selected>...</option>
          <option value="earth">Earth</option>
          <option value="mars">Mars</option>
        </select>
        <label v-if="customTypeConfig.forest.name === 'earth'">
          Earth humidity:
          <input type="number" min="0" v-model="customTypeConfig.forest.params[0]">
        </label>
      </label>
      <br>
      <br>
      <label>
        Plains type:
        <select v-model="customTypeConfig.plains.name">
          <option disabled selected>...</option>
          <option value="earth">Earth</option>
          <option value="mars">Mars</option>
        </select>
        <label v-if="customTypeConfig.plains.name === 'earth'">
          Trees count:
          <input type="number" min="0" v-model="customTypeConfig.plains.params[0]">
        </label>
      </label>
      <br>
      <br>
      <label>
        Sea type:
        <select v-model="customTypeConfig.sea.name">
          <option disabled selected>...</option>
          <option value="earth">Earth</option>
          <option value="mars">Mars</option>
        </select>
      </label>
    </div>
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
import CustomTerrainFactory from "@/Factories/Terrain/CustomTerrainFactory";
import ForestFactory from "@/Factories/Terrain/Entities/ForestFactory";
import PlainsFactory from "@/Factories/Terrain/Entities/PlainsFactory";
import SeaFactory from "@/Factories/Terrain/Entities/SeaFactory";

@Component({
  components: {
    HelloWorld,
  },
  data: () => ({
    terrainType: "",
    customTypeConfig: {
      forest: {
        name: '',
        params: [
            null
        ],
      },
      sea: {
        name: '',
        params: [],
      },
      plains: {
        name: '',
        params: [
            null,
        ],
      },
    },
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
        case "custom":
          return this.customTerrainFactory;
        default:
          return new NullTerrainFactory();
      }
    },
    customTerrainFactory(): undefined | null | CustomTerrainFactory {
      const config = this.customTypeConfig;

      return new CustomTerrainFactory(
          this.forestFactory.fabricate(config.forest.name, config.forest.params),
          this.plainsFactory.fabricate(config.plains.name, config.plains.params),
          this.seaFactory.fabricate(config.sea.name, config.sea.params),
      );
    },
    forestFactory(): ForestFactory {
      return new ForestFactory();
    },
    plainsFactory(): PlainsFactory {
      return new PlainsFactory();
    },
    seaFactory(): SeaFactory {
      return new SeaFactory();
    },
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
