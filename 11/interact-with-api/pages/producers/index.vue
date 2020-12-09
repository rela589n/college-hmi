<template>
  <v-row>
    <v-col class="text-center">
      <v-data-table
        dense
        :headers="employerHeaders"
        :items="employers"
        item-key="_id"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title>Producers List</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog
              v-model="showEditDialog"
              max-width="500px"
            >
<!--              <template v-slot:activator="{ on, attrs }">-->
<!--                <v-btn-->
<!--                  color="primary"-->
<!--                  dark-->
<!--                  class="mb-2"-->
<!--                  v-bind="attrs"-->
<!--                  v-on="on"-->
<!--                >-->
<!--                  New Item-->
<!--                </v-btn>-->
<!--              </template>-->
              <v-card>
                <v-card-title>
                  <span class="headline">Edit item</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.name"
                          label="Name"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.occupation"
                          label="Occupation"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.phone"
                          label="Phone number"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.address"
                          label="Address"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="cancelEdit"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="commitEdit"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="showDeleteDialog" max-width="500px">
              <v-card>
                <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="cancelDelete">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="confirmDelete">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>

      <v-divider class="mt-4"/>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="success"
          depressed
          to="/producers/create"
        >
          Add new
        </v-btn>

      </v-card-actions>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions} from 'vuex';

export default Vue.extend({
  components: {},
  data: () => ({
    employers: [],
    editedItem: {
      _id: null,
      name: null,
      occupation: null,
      phone: null,
      address: null,
    },
    employerHeaders: [
      {
        text: 'Name',
        align: 'left',
        value: 'name',
      },
      {
        text: 'Occupation',
        align: 'left',
        value: 'occupation',
      },
      {
        text: 'Phone',
        align: 'left',
        value: 'phone',
      },
      {
        text: 'Actions',
        value: 'actions',
        sortable: false
      },
    ],
    showDeleteDialog: false,
    showEditDialog: false,
    itemToDeleteId: null,
  }),
  methods: {
    ...mapActions({
      fetchProducers: 'producers/fetchProducers',
      deleteProducer: 'producers/deleteProducer',
      updateProducer: 'producers/updateProducer'
    }),
    editItem(item: object) {
      this.editedItem._id = item._id;
      this.editedItem.name = item.name;
      this.editedItem.occupation = item.occupation;
      this.editedItem.address = item.address;
      this.editedItem.phone = item.phone;

      this.showEditDialog = true
    },
    commitEdit() {
      this.updateProducer(this.editedItem);

      this.showEditDialog = false
    },
    cancelEdit() {
      this.editedItem._id = null;
      this.editedItem.name = null;
      this.editedItem.occupation = null;
      this.editedItem.address = null;
      this.editedItem.phone = null;

      this.showEditDialog = false
    },
    deleteItem(item: object) {
      // this.editedIndex = this.desserts.indexOf(item)
      // this.editedItem = Object.assign({}, item)
      this.showDeleteDialog = true
      this.itemToDeleteId = item._id
    },
    cancelDelete() {
      this.showDeleteDialog = false
      this.itemToDeleteId = null
    },
    confirmDelete() {
      this.showDeleteDialog = false
      this.deleteProducer({_id: this.itemToDeleteId});
      this.itemToDeleteId = null
    },
  },
  async fetch() {
    this.employers = await this.fetchProducers();
  },
  mounted() {
  }
})
;
</script>
