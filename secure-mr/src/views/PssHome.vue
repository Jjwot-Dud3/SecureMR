<template>
  <div >
    
    <Sidemenumainpss/>
    <v-container>
          <template>
          <v-card>
          <v-item-group>
            <v-container>
              <h2 class="p1--text pa-md-4 mx-lg-auto">
                General
              </h2>
              <HomeCards :username= "general.username"/>
              <h2 class="p1--text pa-md-4 mx-lg-auto">
              Archivos
              </h2>
              <HomeCards/>
            </v-container>
          </v-item-group>
          
          </v-card>
        </template>
    </v-container>
  </div>
  
</template>

<script>
import Sidemenumainpss from '@/components/pss/Sidemenumainpss'
import HomeCards from '@/components/common/HomeCards'
export default {
    components:{Sidemenumainpss, HomeCards},
     data: () => ({
       general: {
         username:'matt'
       }
    }),

}
</script>
