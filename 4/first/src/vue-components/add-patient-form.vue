<template>
  <form class="card-body" @submit="delegateSubmit">
    <div class="form-group">
      <label class="d-block">surname: <input required type="text" class="surname"
                                             v-model="createPatientDto.surname"></label>
    </div>
    <label class="d-block">name: <input required type="text" class="name" v-model="createPatientDto.name"></label>
    <label class="d-block">patronymic: <input required type="text" class="patronymic"
                                              v-model="createPatientDto.patronymic"></label>

    <date-picker title="birthday" v-model="createPatientDto.birthday"></date-picker>

    <label class="d-block">diagnosis: <input required type="text" class="diagnosis"
                                             v-model="createPatientDto.diagnosis"></label>
    <label class="d-block">roomNumber: <input required type="text" class="roomNumber"
                                              v-model="createPatientDto.roomNumber"></label>
    <date-picker title="dateOut" v-model="createPatientDto.dateOut"></date-picker>

    <button class="btn btn-primary">Add</button>
  </form>
</template>

<script type="ts">

import DatePicker from "./date-picker";
import Vue from "vue";
import CreatePatientDto from "@/CreatePatientDto";

export default Vue.extend({
  name: "add-patient-form",
  components: {DatePicker},
  data: function () {
    return {
      createPatientDto: new CreatePatientDto()
    }
  },
  methods: {
    delegateSubmit: function (e) {
      this.$emit('submit', e, this.createPatientDto);
    }
  }
});
</script>

<style scoped>

</style>
