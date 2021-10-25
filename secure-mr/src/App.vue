<template>
  <v-app style="background: #FFFF;"> <!--Change the backgroun color-->
    <NavbarMain/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavbarMain from '@/components/NavbarMain'
export default {
  name: 'App',
  components:{NavbarMain},
  data: () => ({
    //
  }),
};
</script>
