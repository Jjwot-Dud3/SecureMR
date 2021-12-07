<template>
  <div>
    <v-navigation-drawer permanent app expand-on-hover color="primary">
      <v-divider></v-divider>

      <v-list>
        <v-list-item router to="/affiliate/home" color="p3">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <div v-if="role=='pss'">
        <PssSideMenuItems/>
        </div>
        <div v-if="role=='affiliate'">
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
  components:{PssSideMenuItems, AffiliateSideMenuItems},
  props: {
    role: String,
  },
  
};
</script>