<template>
  <v-row>
    <v-col class="text-center">
      <v-card>
        <v-toolbar
          flat
          color="blue-grey"
          dark
        >
          <v-toolbar-title>Add a new Employee</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <v-text-field
            filled
            label="First Name"
            v-model="newEmployee.firstName"
          ></v-text-field>

          <v-text-field
            filled
            label="Last Name"
            v-model="newEmployee.lastName"
          ></v-text-field>

          <v-text-field
            filled
            label="Patronymic"
            v-model="newEmployee.patronymic"
          ></v-text-field>

          <v-text-field
            filled
            label="Occupation"
            v-model="newEmployee.occupation"
          ></v-text-field>

          <v-text-field
            filled
            label="Phone number"
            v-model="newEmployee.phone"
          ></v-text-field>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            depressed
            @click="addEmployee"
          >
            Post
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Vue from "vue";
import {mapActions} from "vuex";

export default Vue.extend({
  components: {},
  data: () => ({
    newEmployee: {
      firstName: 'First Name',
      lastName: 'Last Name',
      patronymic: 'Patronymic',
      occupation: 'Occupation',
      phone: 'Phone',
    }
  }),
  methods: {
    ...mapActions({
      addNewEmployee: 'employees/addNewEmployee',
    }),
    addEmployee() {
      this.addNewEmployee(this.newEmployee);
      this.$router.push('/employees');
    },
  },
});
</script>

<style scoped>

</style>
