<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {LoggingMiddleware} from "@/middleware/LoggingMiddleware";
import {SomeCrucialCommand} from "@/commands/SomeCrucialCommand";
import {CommandRequest} from "@/requests/CommandRequest";
import {MiddlewareAssembler} from "@/middleware/MiddlewareAssembler";
import {AuthorizationMiddleware} from "@/middleware/AuthorizationMiddleware";

export default Vue.extend({
  name: 'App',
  mounted(): void {
    const username = prompt('Enter username', 'admin') || "";

    this.runCommandWith(new CommandRequest('127.0.0.1', username));
  },
  computed: {
    command(): SomeCrucialCommand {
      return new SomeCrucialCommand();
    },
    runCommandWith(): (request: CommandRequest) => void {
      const assembler = new MiddlewareAssembler([new LoggingMiddleware(), new AuthorizationMiddleware()]);

      return assembler.assemble((request: CommandRequest) => this.command.execute(request));
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
