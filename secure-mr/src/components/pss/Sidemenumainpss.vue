<template>
    <div>
        <v-navigation-drawer permanent expand-on-hover>
        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-home-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
            
             <v-menu top :offset-x="offset">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="grey darken=1" v-bind="attrs" v-on="on" icon>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>
      <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-title>Hola</v-list-item-title>
        </v-list-item>
      </v-list>
      </v-card>
    </v-menu>
    
            <!--<v-btn color="grey darken=1" v-bind="attrs" v-on="on" icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>-->
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-file-document-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Documentos</v-list-item-title>
             <v-btn color="grey darken=1" v-bind="attrs" v-on="on" icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Afiliados</v-list-item-title>
             <v-btn color="grey darken=1" v-bind="attrs" v-on="on" icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    
}
</script>