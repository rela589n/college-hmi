<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {ExternalApiConnectionFactory} from "@/factories/ExternalApiConnectionFactory";

export default Vue.extend({
  name: 'App',
  async mounted() {
    console.log("connection", this.connection)
    console.log("fetch data ", this.connection.fetchSomeData())
    console.log("await fetch data", await this.connection.fetchSomeData())
  },
  computed: {
    connectionFactory() {
      const externalApiConnectionFactory = new ExternalApiConnectionFactory();

      console.log('created connection factory')

      return externalApiConnectionFactory;
    },
    connection() {
      const connection = this.connectionFactory.getConnection();

      console.log('created connection')

      return connection;
    }
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
