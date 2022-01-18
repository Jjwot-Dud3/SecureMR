<template>
  <v-app style="background: #FFFF;"> <!--Change the backgroun color-->  
    <div v-if="isUserLoggedIn">
      <NavbarMain/>
      <SideMenu :role="currentUsrRole"/>
      <v-content>
        <router-view></router-view>
      </v-content>
    </div>
    <div v-else>
      <NavbarLogin/>
      <Login/>
    </div>
    <!--:currentroute="$route.name"-->
  </v-app>
</template>

<script>
import NavbarMain from '@/components/common/NavbarMain'
import NavbarLogin from '@/components/common/login/NavbarLogin'
import SideMenu from '@/components/common/SideMenu'
import Login from '@/views/login/Login.vue'

//import User from './classes/User'

export default {
  name: 'App',
  components:{NavbarMain, SideMenu, Login, NavbarLogin},
  data() {
    return {
      acccessToken: null,
      username: null,
      role: null
    }
  },
  mounted() {
    if(localStorage.acccessToken){
      this.acccessToken = localStorage.acccessToken;
      this.username = localStorage.username;
      this.role = localStorage.role;
    }
  },
  computed: {
    currentUsrRole() {
        return localStorage.role;
    },
    currentUsrInfo(){
      return {username: this.username, token: this.acccessToken, role: this.role};
    },
    isUserLoggedIn(){
      if (localStorage.getItem('accessToken') && localStorage.getItem('userName') && localStorage.getItem('role')){
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    persist() {
      localStorage.acccessToken = this.acccessToken;
      localStorage.username = this.username;
      localStorage.role = this.role;
    },
    // checkToken(token){
    //   var returned;
    //   axios.get('/accounts/checkToken',{token: token}).then(response => returned = response.data.accessToken).catch(error => {
    //     returned = null;
    //     console.error("There was an error!",error)
    //   })
    //   return returned;
    // }
  }
};
</script>
