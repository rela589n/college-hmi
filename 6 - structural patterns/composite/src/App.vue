<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Check out your console</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Army} from "@/Entities/Army/Composite/Army";
import {Archer} from "@/Entities/Army/Individual/Archer";
import {LaserCannon} from "@/Entities/Army/Individual/LaserCannon";
import {TroopCarrier} from "@/Entities/Army/Composite/TroopCarrier";
import {Cavalry} from "@/Entities/Army/Individual/Cavalry";
import {CompositeUnit} from "@/Entities/Army/CompositeUnit";

export default Vue.extend({
  name: 'App',
  components: {},
  mounted() {
    console.log((new Archer()).getComposite())

    const mainArmy: CompositeUnit = new Army();

    mainArmy.addUnit(new Archer());
    mainArmy.addUnit(new Archer());
    mainArmy.addUnit(new Cavalry());
    mainArmy.addUnit(new LaserCannon());

    const subArmy: CompositeUnit = new Army();
    subArmy.addUnit(new Archer());
    subArmy.addUnit(new Archer());
    subArmy.addUnit(new Archer());

    mainArmy.addUnit(subArmy);

    const troopCarrier: CompositeUnit = new TroopCarrier();
    troopCarrier.addUnit(new Archer());
    troopCarrier.addUnit(new Archer());
    troopCarrier.addUnit(new LaserCannon());

    console.log(`[Main] Strength before adding troopCarrier: ${mainArmy.bombardStrength()}`);
    console.log(`[Main] Defensive strength before adding troopCarrier: ${mainArmy.defensiveStrength()}`);

    subArmy.addUnit(troopCarrier);
    console.log(`[Sub] Added troop-carrier`);

    console.log(`[Main] Strength after adding troopCarrier: ${mainArmy.bombardStrength()}`)
    console.log(`[Main] Defensive strength after adding troopCarrier: ${mainArmy.defensiveStrength()}`);
  }
});
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
