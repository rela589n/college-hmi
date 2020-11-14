<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {SomeComponent} from "@/components/SomeComponent";
import {AnotherComponent} from "@/components/AnotherComponent";
import {ConcreteMediator} from "@/components/Mediators/ConcreteMediator";

export default Vue.extend({
  name: 'App',
  computed: {
    mediator(): ConcreteMediator {
      return new ConcreteMediator();
    },
    someComponent(): SomeComponent {
      return this.mediator.someComponent;
    },
    anotherComponent(): AnotherComponent {
      return this.mediator.anotherComponent;
    }
  },
  methods: {},
  mounted() {
    console.log('>>> someComponent.doThis()');
    this.someComponent.doThis();

    console.log('>>> someComponent.doThat()');
    this.someComponent.doThat();

    console.log('>>> anotherComponent.doAnotherThis()');
    this.anotherComponent.doAnotherThis();

    console.log('>>> anotherComponent.doAnotherThat()');
    this.anotherComponent.doAnotherThat();
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
