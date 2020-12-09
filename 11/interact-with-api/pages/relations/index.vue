<template>
  <v-row>
    <v-col class="text-center">
      <v-data-table
        dense
        :headers="relationHeaders"
        :items="relations"
        item-key="_id"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title>Relations List</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
<!--            <v-dialog-->
<!--              v-model="showEditDialog"-->
<!--              max-width="500px"-->
<!--            >-->
<!--              <v-card>-->
<!--                <v-card-title>-->
<!--                  <span class="headline">Edit item</span>-->
<!--                </v-card-title>-->

<!--                <v-card-text>-->
<!--                  <v-container>-->
<!--                    <v-row>-->

<!--                      <v-col-->
<!--                        cols="12"-->
<!--                        sm="6"-->
<!--                        md="4"-->
<!--                      >-->
<!--                        <v-text-field-->
<!--                          filled-->
<!--                          label="First Name"-->
<!--                          v-model="editedItem.firstName"-->
<!--                        ></v-text-field>-->
<!--                      </v-col>-->

<!--                      <v-col-->
<!--                        cols="12"-->
<!--                        sm="6"-->
<!--                        md="4"-->
<!--                      >-->
<!--                        <v-text-field-->
<!--                          filled-->
<!--                          label="Last Name"-->
<!--                          v-model="editedItem.lastName"-->
<!--                        ></v-text-field>-->
<!--                      </v-col>-->

<!--                      <v-col-->
<!--                        cols="12"-->
<!--                        sm="6"-->
<!--                        md="4"-->
<!--                      >-->
<!--                        <v-text-field-->
<!--                          filled-->
<!--                          label="Patronymic"-->
<!--                          v-model="editedItem.patronymic"-->
<!--                        ></v-text-field>-->
<!--                      </v-col>-->

<!--                      <v-col-->
<!--                        cols="12"-->
<!--                        sm="6"-->
<!--                        md="4"-->
<!--                      >-->
<!--                        <v-text-field-->
<!--                          filled-->
<!--                          label="Occupation"-->
<!--                          v-model="editedItem.occupation"-->
<!--                        ></v-text-field>-->
<!--                      </v-col>-->

<!--                      <v-col-->
<!--                        cols="12"-->
<!--                        sm="6"-->
<!--                        md="4"-->
<!--                      >-->
<!--                        <v-text-field-->
<!--                          filled-->
<!--                          label="Phone number"-->
<!--                          v-model="editedItem.phone"-->
<!--                        ></v-text-field>-->
<!--                      </v-col>-->

<!--                    </v-row>-->
<!--                  </v-container>-->
<!--                </v-card-text>-->
<!--                <v-card-actions>-->
<!--                  <v-spacer></v-spacer>-->
<!--                  <v-btn-->
<!--                    color="blue darken-1"-->
<!--                    text-->
<!--                    @click="cancelEdit"-->
<!--                  >-->
<!--                    Cancel-->
<!--                  </v-btn>-->
<!--                  <v-btn-->
<!--                    color="blue darken-1"-->
<!--                    text-->
<!--                    @click="commitEdit"-->
<!--                  >-->
<!--                    Save-->
<!--                  </v-btn>-->
<!--                </v-card-actions>-->
<!--              </v-card>-->
<!--            </v-dialog>-->
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
<!--          <v-icon-->
<!--            small-->
<!--            class="mr-2"-->
<!--            @click="editItem(item)"-->
<!--          >-->
<!--            mdi-pencil-->
<!--          </v-icon>-->
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
          to="/relations/create"
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
    relations: [],
    editedItem: {
      _id: null,
    },
    relationHeaders: [
      {
        text: 'Employer',
        align: 'left',
        value: 'employer.name',
      },
      {
        text: 'Employee',
        align: 'left',
        value: 'employee.full_name',
      },
      {
        text: 'Position',
        align: 'left',
        value: 'position',
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
      fetchRelations: 'relation/fetchRelations',
      deleteRelation: 'relation/deleteRelation',
      updateRelation: 'relation/updateRelation',
    }),
    // editItem(item: object) {
    //   this.editedItem._id = item._id;
    //   this.editedItem.employee_id = item.employee_id;
    //   this.editedItem.employer_id = item.employer_id;
    //   this.editedItem.position = item.position;
    //   this.editedItem.commission = item.commission;
    //
    //   this.showEditDialog = true
    // },
    // commitEdit() {
    //   this.updateRelation(this.editedItem);
    //
    //   this.showEditDialog = false
    // },
    // cancelEdit() {
    //   this.editedItem._id = null;
    //
    //   this.showEditDialog = false
    // },
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
      this.deleteRelation({_id: this.itemToDeleteId});
      this.itemToDeleteId = null
    },
  },
  async fetch() {
    this.relations = await this.fetchRelations();
  },
  mounted() {
    // console.log(this.relations);

  }
})
;
</script>
