<template>
  <v-row>
    <v-col class="text-center">
      <v-card>
        <v-toolbar
          flat
          color="blue-grey"
          dark
        >
          <v-toolbar-title>Add a new relation</v-toolbar-title>
        </v-toolbar>

        <v-card-text>

          <v-col
            class="d-flex"
            cols="12"
            sm="6"
          >
            <v-select
              :items="employees"
              item-text="full_name"
              item-value="_id"
              label="Employee"
              v-model="newRelation.employee_id"
            >

            </v-select>
          </v-col>

          <v-col
            class="d-flex"
            cols="12"
            sm="6"
          >
            <v-select
              :items="employers"
              item-text="name"
              item-value="_id"
              label="Employer"
              v-model="newRelation.employer_id"
            >

            </v-select>
          </v-col>

          <v-text-field
            label="Position"
            v-model="newRelation.position"
          ></v-text-field>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            depressed
            @click="addRelation"
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
    employees: [],
    employers: [],
    newRelation: {
      employee_id: null,
      employer_id: null,
      position: '',
    }
  }),
  methods: {
    ...mapActions({
      fetchProducers: 'producers/fetchProducers',
      fetchEmployees: 'employees/fetchEmployees',
      addNewRelation: 'relation/addNewRelation',
    }),
    addRelation() {
      this.addNewRelation(this.newRelation);
      this.$router.push('/relations');
    },
  },
  async fetch() {
    this.employees = await this.fetchEmployees();
    this.employers = await this.fetchProducers();
  },
});
</script>

<style scoped>

</style>
