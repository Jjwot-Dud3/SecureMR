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
              <HomeCards :items= "general.items"/>
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
             title:'Pacientes con documentos emitidos',
             icon:"mdi-account-multiple",
             value:15,
             route:'/pss/affiliate/browse/affiliateselect'
           },
           {
             title:'Documentos con acceso',
             icon:"mdi-file-document-multiple-outline",
             value:16,
             route:'/pss/affiliate/browse/documents'
           },
           {
             title:'Documentos que has emitido',
             icon:"mdi-file-document-multiple-outline",
             value:16,
             route:''
           }
         ]
       },
       files:{
         items:[
           {
             title:'Emitir documentos',
             icon:"mdi-account-multiple-plus-outline",
             value:15,
             route:'/pss/emitDocument'
           },
           {
             title:'Consultar documentos de pacientes',
             icon:"mdi-file-move-outline",
             value:16
           }
         ]
       }
    }),

}
</script>
