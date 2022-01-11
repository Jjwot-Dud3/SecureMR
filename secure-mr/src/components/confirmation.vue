<template>
    <v-app>
    <v-content>
    <v-container class="fill_height" fluid>
     <v-row align="center" justify="center">
     <v-col cols="12" sm="8" md="4">
     <v-card class="elevation-17 mt-lg-15">
     <v-window v-model="step">
     <v-window-item :value="1">
      <v-col cols="12" md="12">
        <v-card-text class="mt-12">
          <h2 class="text-center font-weight-bold display-2  grey--text text--accent-2">¿Estás seguro?</h2>
          <div class="text-center mt-lg-12">
          <v-form>
            <v-btn class=" text-center ma-2" large color="grey darken-1" dark >Cancelar</v-btn>
          <v-btn class=" text-center ma-2" large color="purple darken-3" dark >Acceder</v-btn>
          </v-form>
           </div>
        </v-card-text>
      </v-col>
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