<template>
    <v-app>
    <v-content>
    <v-toolbar app clipped-left class="elevation-1" color="white">
        <v-toolbar-title>
            <span class="font-weight-light">SecureMR</span>    
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="ma-2" small color="purple darken-3" outlined>Solicitar Acceso</v-btn>
    </v-toolbar>
    <v-container class="fill_height" fluid>
     <v-row align="center" justify="center">
     <v-col cols="12" sm="8" md="8">
     <v-card class="elevation-12 mt-lg-12">
     <v-window v-model="step">
     <v-window-item :value="1">
      <v-row>
      <v-col cols="12" md="6">
        <v-card-text class="mt-12">
          <h2 class="text-center font-weight-bold display-2  Black--text text--accent-3">Iniciar Sesión</h2>
          <div class="text-center mt-lg-15">
          <v-form>
          <v-text-field
          label="Tú Correo Electrónico"
          name="Email"
          prepend-icon="mdi-email"
          type="text"
          color="purple lighten-3"
          outlined
          />
           <v-text-field
          label="Contraseña"
          name="Password"
          prepend-icon="mdi-lock"
          type="password"
          color="purple lighten-3"
          outlined
          />
          <v-btn class=" text-center ma-2" large color="purple darken-2" dark >Acceder</v-btn>
          </v-form>
           </div>
        </v-card-text>
      </v-col>
      <v-col cols="12" md="4" class="white accent-2">
        <v-card class="white--text mt-12"></v-card>
        <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="auto"
        max-width="auto"
        src= "../assets/logo.png"
        ></v-img>
        <h2 class=" text-center font-weight-light">SecureMR</h2>
      </v-col>
      </v-row>
      </v-window-item>
     <v-window-item :value="2">
      </v-window-item>
     </v-window>
     </v-card>
     </v-col>
     </v-row>
    </v-container>
    </v-content>
    </v-app>
</template>

<script>
export default {
    data:() => ({
      step: 1
    }),
    props:{
      source: String
    }
};
</script>