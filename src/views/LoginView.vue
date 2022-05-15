<template>
   <v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary" class="d-flex justify-center">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                         <form ref="form" @submit.prevent="login()">
                            <v-text-field
                              v-model="username"
                              name="username"
                              label="Username"
                              prepend-icon="mdi-account"
                              type="text"
                              placeholder="username"
                              required
                           ></v-text-field>
                           
                            <v-text-field
                              v-model="password"
                              name="password"
                              label="Password"
                              prepend-icon="mdi-lock"
                              append-icon="mdi-eye"
                              type="password"
                              placeholder="password"
                              required
                           ></v-text-field>
                      </form>
                     </v-card-text>
                     <v-card-actions style="padding: 20px;">
                        <v-spacer></v-spacer>
                        <v-btn align="center" color="primary" type="submit" name="submit" to="/dashboard" x-large>Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
export default {
    name: 'Login',
    data:{
        username: "",
        password: ""
    },
    methods: {
        login(){
            const {username} = this;
            this.$router.replace({name: 'dashboard', params: {username : username}});
        }
    }
};
</script>

<style></style>