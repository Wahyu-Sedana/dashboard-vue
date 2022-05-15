<template>
  <nav>
      <v-navigation-drawer
      v-model="drawer"
      app
      color="#00ACC1"
    >

   <v-list>
       <v-list-item class="justify-center">
          <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/pngegg.png"
          transition="scale-transition"
          width="80"
        />
       </v-list-item> 
       <v-list-item>
            <h3  class="white--text">BANK INDONESIA</h3>
       </v-list-item>
   </v-list>

    <hr class="white--text">

      <v-list>
          <v-list-item link>
            <router-link to="/dashboard" class="text-decoration-none white--text"> <v-icon class="white--text mb-2 mr-2">mdi-home</v-icon> Dashboard</router-link>
          </v-list-item>
          <v-list-item link>
            <router-link to="/report" class="text-decoration-none white--text"> <v-icon class="white--text mb-2 mr-2">mdi-chart-arc</v-icon> Report</router-link>
          </v-list-item>
          <v-list-item link>
            <router-link to="/data" class="text-decoration-none white--text"> <v-icon class="white--text mb-2 mr-2">mdi-table</v-icon> Data</router-link>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          v-bind="attrs"
          v-on="on"
          color="#00ACC1"
        >
        mdi-account-arrow-down
        </v-icon>
      </template>
      <v-list>
        <v-list-item>
          <router-link to="/" class="text-decoration-none black--text">Log out</router-link>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>
  </nav>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>