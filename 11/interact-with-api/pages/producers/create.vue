<template>
  <v-row>
    <v-col class="text-center">
      <v-card>
        <v-toolbar
          flat
          color="blue-grey"
          dark
        >
          <v-toolbar-title>Add a new Producer</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <v-text-field
            filled
            label="Name"
            v-model="newProducer.name"
          ></v-text-field>


          <v-text-field
            filled
            label="Occupation"
            v-model="newProducer.occupation"
          ></v-text-field>

          <v-text-field
            filled
            label="Phone number"
            v-model="newProducer.phone"
          ></v-text-field>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            depressed
            @click="addProducer"
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
    newProducer: {
      name: 'Name',
      occupation: 'Occupation',
      phone: '+111',
    }
  }),
  methods: {
    ...mapActions({
      addNewProducer: 'producers/addNewProducer',
    }),
    addProducer() {
      this.addNewProducer(this.newProducer);
      this.$router.push('/producers');
    },
  },
});
</script>

<style scoped>

</style>
