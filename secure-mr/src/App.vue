<template>
  <v-app style="background: #FFFF;"> <!--Change the backgroun color-->  
    <NavbarMain/>
    <Sidemenumainpss/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavbarMain from '@/components/common/NavbarMain'
import Sidemenumainpss from '@/components/pss/Sidemenumainpss'
export default {
  name: 'App',
  components:{NavbarMain, Sidemenumainpss},
  data: () => ({
    //
  }),
};
</script>
