<template>
  <v-app style="background: #FFFF;"> <!--Change the backgroun color-->  
    <NavbarMain/>
    <PssSideMenu :items= "pss_side_menu"/><!--:currentroute="$route.name"-->
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavbarMain from '@/components/common/NavbarMain'
import PssSideMenu from '@/components/pss/PssSideMenu'
export default {
  name: 'App',
  components:{NavbarMain, PssSideMenu},
  data: () => ({
    pss_side_menu: [
        {
          action: 'mdi-file-document-outline',
          items: [
            { 
              title: 'Consultar Documentos',
              route: '/pss/documents/browse/affiliateselect' 
            },
            { 
              title: 'Emitir Documentos',
              route: '/pss/documents/create/arsselect' 
            },
          ],
          title: 'Documentos',
        },
        {
          action: 'mdi-account-multiple-outline',
          items: [
              { title: 'Consultar Afiliados',
                route: '/pss/affiliate/browse/affiliateselect'
              },
            
            ],
          title: 'Afiliados',
        },
        
      ],
    //
  }),
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  }
};
</script>
