<template>
  <div class="card">
    <div class="card-body">
      <label class="d-block">surname: <input type="text" readonly class="surname"
                                             v-bind:value="patient.surname"></label>
      <label class="d-block">name: <input type="text" readonly class="name"
                                          v-bind:value="patient.name"></label>
      <label class="d-block">patronymic: <input type="text" readonly class="patronymic"
                                                v-bind:value="patient.patronymic"></label>
      <label class="d-block">birthday: <input type="text" readonly class="birthday"
                                              v-bind:value="patient.birthday"></label>
      <label class="d-block">diagnosis: <input type="text" readonly class="diagnosis"
                                               v-bind:value="patient.diagnosis"></label>
      <label class="d-block">roomNumber: <input type="text" readonly class="roomNumber"
                                                v-bind:value="patient.roomNumber"></label>
      <label class="d-block">dateOut: <input type="text" readonly class="dateOut"
                                             v-bind:value="patient.dateOut"></label>

      <button class="btn btn-danger" @click="$emit('remove', patient)">Remove</button>
    </div>
    <hr>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['patient'],
});
</script>
