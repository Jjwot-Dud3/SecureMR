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

import User from './classes/User'

export default {
  name: 'App',
  components:{NavbarMain, SideMenu},
  
  mounted() {
    if(localStorage.token){
      this.token = localStorage.token;
      this.username = localStorage.username;
      this.role = localStorage.role;
    }
  },
  computed: {
    currentUsrRole() {
        return 'affiliate';
    },
    currentUsrInfo(){
      return this.username, this.token, this.role;
    }
  },
  methods: {
    persist() {
      localStorage.token = this.token;
      localStorage.username = this.token;
      localStorage.role = this.role;
    }
  }
};
</script>
