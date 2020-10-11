<template>
  <div class="home">
      <h1 class="ml-5">List of patients:</h1>

      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(patient, index) in patients">
          <patient-view :patient="patient" v-on:remove="removePatient(index)"></patient-view>
        </li>
        <li v-if="patients.length === 0">List is empty</li>
      </ul>

      <br>
      <h2 class="ml-5">Add new:</h2>
      <div class="card">
        <add-patient-form v-on:submit="addNewPatient"></add-patient-form>
      </div>

      <br>
      <h2 class="ml-5">List of sick sorted by room numbers:</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(patient, index) in sickList">
          <patient-view :patient="patient" v-on:remove="removePatient(index)"></patient-view>
        </li>
        <li v-if="sickList.length === 0">List is empty</li>
      </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AddPatientForm from '@/vue-components/add-patient-form.vue';
import PatientView from "@/vue-components/patient.vue";
import Patient from "@/models/Patient";
import CreatePatientDto from "@/CreatePatientDto";

export default Vue.extend({
  name: 'Home',
  components: {AddPatientForm, PatientView},
  data: () => ({
    patients: [
      new Patient(
          "hello",
          "hello",
          "hello",
          new Date(
              2020,
              2,
              20
          ),
          "hello",
          "hello",
          new Date(
              2020,
              10,
              20
          ),
      )
    ],
  }),
  methods: {
    addNewPatient: function (e: any, createPatientDto: CreatePatientDto) {
      e.preventDefault();


      if (!(createPatientDto.surname
          && createPatientDto.name
          && createPatientDto.patronymic
          && createPatientDto.diagnosis
          && createPatientDto.roomNumber
          && createPatientDto.dateOut
          && createPatientDto.birthday)) {
        alert('enter all fields')
        return;
      }

      this.patients.push(
          new Patient(
              createPatientDto.surname,
              createPatientDto.name,
              createPatientDto.patronymic,
              new Date(
                  createPatientDto.birthday.year,
                  createPatientDto.birthday.month,
                  createPatientDto.birthday.day
              ),
              createPatientDto.diagnosis,
              createPatientDto.roomNumber,
              new Date(
                  createPatientDto.dateOut.year,
                  createPatientDto.dateOut.month,
                  createPatientDto.dateOut.day
              ),
          )
      );

      e.target.reset();
      createPatientDto.clear()
    },
    removePatient: function (index: number): void {
      this.patients.splice(index, 1);
    }
  },
  computed: {
    sickList: function (): Patient[] {
      let notReleased: Patient[] = this.patients.filter(
          function (p: Patient) {
            let date: Date = new Date();
            date.setHours(0, 0, 0, 0);

            return date < p.rawDateOut;
          }
      );

      notReleased.sort(
          (a: Patient, b: Patient) => a.roomNumber > b.roomNumber ? 1 : -1
      );

      return notReleased;
    }
  }
});
</script>

<style>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
</style>
