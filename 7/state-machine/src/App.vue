<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import {JobStatusNew} from "@/domain/Jobs/states/JobStatuses/JobStatusNew";
import {Job} from "@/domain/Jobs/Job";
import {JobStatus} from "@/domain/Jobs/states/JobStatus";

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    this.logStatus(this.job.status);

    this.job.putInArchive();
    this.logStatus(this.job.status);

    // console.log('!!! will throw error, because it is archived');
    // this.job.finishWork();
    // this.logStatus(this.job.status);

    let previousStatusSomewhereFromDatabase = new JobStatusNew();
    this.job.retrieveFromArchive(previousStatusSomewhereFromDatabase);
    this.logStatus(this.job.status);

    this.job.applyWork();
    this.logStatus(this.job.status);

    this.job.finishWork();
    this.logStatus(this.job.status);

    console.log('will also throw error, because no proposals can be added to finished job');
    this.job.applyWork();
  },
  computed: {
    job(): Job {
      console.log('create new job')

      return new Job();
    }
  },
  methods: {
    logStatus(status: JobStatus) {
      console.log('[Status]: ' + status.getStatusString());
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
