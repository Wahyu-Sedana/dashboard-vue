<template>
  <v-app>
    <Sidebar/>
    <v-main class="mx-5">
            <v-form v-model="valid">
    <v-container >
      <v-row>
        <v-col
          cols="12"
          md="3"
        >
         <v-select
         outlined
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Counter"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        ></v-select>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
          outlined
            v-model="lastname"
            :rules="nameRules"
            label="Tanggal"
            type="date"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
          outlined
            v-model="email"
            :rules="emailRules"
            label="Nama"
            type="text"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="1"
          class="mt-3"
        >
         <v-btn color="#00BCD4" dark>Filter</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <v-spacer></v-spacer> 
     <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Data</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#00BCD4"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
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
                      label="No Antrian"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Nama"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Counter"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Tanggal"
                      type="date"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Rating"
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
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
     <template v-slot:[`item.rating`]="{ item }">
            <div>
              <v-rating
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingEmpty"
                  half-icon="$ratingHalf"
                  full-icon="$ratingFull"
                  half-increments
                  readonly
                  :value="item.rating"
                ></v-rating>
            </div>
          </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-btn class="warning mr-2">
         <v-icon
        small
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      </v-btn>
      <v-btn class="red">
        <v-icon
        class="white--text"
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
      </v-btn>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'

export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'No Antrian',
          align: 'start',
          sortable: false,
          value: 'no',
        },
        { text: 'Nama', value: 'nama' },
        { text: 'Counter', value: 'counter' },
        { text: 'Tanggal', value: 'tanggal' },
        { text: 'Rating', value: 'rating' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        no: '001',
        nama: 'Wahyu Eka',
        counter: 'Teller',
        tanggal: '01-01-2022',
        rating: 4.4
      },
      defaultItem: {
        no: '001',
        nama: 'Wahyu Eka',
        counter: 'Teller',
        tanggal: '01-01-2022',
        rating: 4.4
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            no: '001',
            nama: 'Wahyu Eka',
            counter: 'Teller',
            tanggal: '01-01-2022',
            rating: 4.4
          },
          {
             no: '002',
            nama: 'Agung',
            counter: 'CS',
            tanggal: '01-01-2022',
            rating: 4.1
          },
          {
            no: '003',
            nama: 'Wintara Putra',
            counter: 'Teller',
            tanggal: '01-01-2022',
            rating: 4.4
          },
          {
            no: '004',
            nama: 'Sri Wijayanti',
            counter: 'Pajak',
            tanggal: '01-01-2022',
            rating: 3.5 
          },
          {
            no: '005',
            nama: 'Rika Yulianti',
            counter: 'CS',
            tanggal: '01-01-2022',
            rating: 4.5
          },
          {
            no: '006',
            nama: 'Deva',
            counter: 'CS',
            tanggal: '01-01-2022',
            rating: 4.5
          },
          {
            no: '007',
            nama: 'Agus Miasa',
            counter: 'Over Booking',
            tanggal: '01-01-2022',
            rating: 0
          },
          {
             no: '008',
            nama: 'Aulia',
            counter: 'CS',
            tanggal: '01-01-2022',
            rating: 1.1
          },
          {
            no: '009',
            nama: 'Yohanes',
            counter: 'Teller',
            tanggal: '01-01-2022',
            rating: 5.0
          },
          {
            no: '010',
            nama: 'Amanda',
            counter: 'Teller',
            tanggal: '01-01-2022',
            rating: 2.5
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },

  components: {
    Sidebar,
    Footer,
  }
}
</script>

