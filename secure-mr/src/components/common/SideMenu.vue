<template>
  <div>
    <v-navigation-drawer permanent app expand-on-hover color="primary" :width="400">
      <v-divider></v-divider>

      <v-list>
        <v-list-item router to="/" color="p3">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Página Principal</v-list-item-title>
        </v-list-item>
        <div v-if="role=='pss'">
          <PssSideMenuItems/>
        </div>
        <div v-else-if="role=='affiliate'">
          <AffiliateSideMenuItems/>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import PssSideMenuItems from '@/components/pss/PssSideMenuItems'
import AffiliateSideMenuItems from '@/components/affiliate/AffiliateSideMenuItems'
export default {
  data:() => ({
      // role: localStorage.role,
    }),
  components:{PssSideMenuItems, AffiliateSideMenuItems},
  props: {
    role: String
  },
  
};
</script>