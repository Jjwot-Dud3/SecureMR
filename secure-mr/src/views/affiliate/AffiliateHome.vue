<template>
  <div >
    <v-container>
          <template>
          <v-card>
          <v-item-group>
            <v-container>
              <h2 class="p1--text pa-md-4 mx-lg-auto">
                General
              </h2>
              <HomeCards :items="general.items"/>
              <h2 class="p1--text pa-md-4 mx-lg-auto">
              Archivos
              </h2>
              <HomeCards :items="files.items"/>
            </v-container>
          </v-item-group>
          
          </v-card>
        </template>
    </v-container>
  </div>
  
</template>

<script>
import HomeCards from '@/components/common/HomeCards'
export default {
    components:{HomeCards},
     data: () => ({
       general: {
         items:[
           {
             title:'Personas que tienen acceso a algunos de tus documentos',
             icon:"mdi-account-multiple",
             value:11
           },
           {
             title:'Personas de confianza',
             icon:"mdi-account-multiple",
             value:4
           },
           {
             title:'Documentos en tu historial medico',
             icon:"mdi-account-multiple",
             value:13
           },
           {
             title:'Documentos compartidos contigo',
             icon:"mdi-account-multiple",
             value:37
           },
           
         ]
       },
       files:{
         items:[
           {
             title:'Conceder acceso a documentos',
             icon:"mdi-account-multiple",
           },
           {
             title:'Revocar acceso a documentos',
             icon:"mdi-account-multiple",
           },
           {
             title:'Agregar personas de confianza',
             icon:"mdi-account-multiple",
           },
           {
             title:'Eliminar persona de confianza',
             icon:"mdi-account-multiple",
           },
           {
             title:'Agregar persona a contactos',
             icon:"mdi-account-multiple",
           },
           {
             title:'Consultar historial de permisos',
             icon:"mdi-account-multiple",
           },
           {
             title:'Editar informacion personal',
             icon:"mdi-account-multiple",
           },
           {
             title:'Configuracion',
             icon:"mdi-account-multiple",
           },

         ]
       }
    }),

}
</script>