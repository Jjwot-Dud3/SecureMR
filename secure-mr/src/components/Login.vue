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
     <v-card class="elevation-12">
     <v-window v-model="step">
     <v-window-item :value="1">
      <v-row>
      <v-col cols="12" md="8">
        <v-card-text class="mt-12">
          <h1 class="text-center display-2 Black--text text--accent-3">Iniciar Sesión</h1>
          <v-form>
          <v-text-field
          label="Tu Correo Electronico"
          name="Email"
          prepend icon="email"
          type="text"
          color="purple lighten-3"/>

          </v-form>
        </v-card-text>
      </v-col>
      <v-col cols="12" md="4"></v-col>
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