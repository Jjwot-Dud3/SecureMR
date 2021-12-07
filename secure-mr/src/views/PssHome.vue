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
             title:'Test',
             icon:"mdi-account-multiple",
             value:15
           },
           {
             title:'Test1',
             icon:"mdi-account-multiple",
             value:16
           }
         ]
       },
       files:{
         items:[
           {
             title:'Test',
             icon:"mdi-account-multiple",
             value:15
           },
           {
             title:'Test1',
             icon:"mdi-account-multiple",
             value:16
           }
         ]
       }
    }),

}
</script>
