<template>
  <v-app style="background: #FFFF;"> <!--Change the backgroun color-->  
    <NavbarMain/>
    <SideMenu :role="currentUsrRole"/><!--:currentroute="$route.name"-->
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavbarMain from '@/components/common/NavbarMain'
import SideMenu from '@/components/common/SideMenu'
export default {
  name: 'App',
  components:{NavbarMain, SideMenu},
  computed: {
    currentUsrRole() {
        return 'pss';
    }
  }
};
</script>
