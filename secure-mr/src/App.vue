<template>
  <v-app style="background: #FFFF;"> <!--Change the backgroun color-->  
    <NavbarMain/>
    <Sidemenumainpss :items= "pss_side_menu"/>
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
    pss_side_menu: [
        {
          action: 'mdi-file-document-outline',
          items: [
            { 
              title: 'Emitir Documentos',
              action: 'mdi-file-document-outline' 
            },
            { title: 'Consultar Documentos'},
          ],
          title: 'Documentos',
        },
        {
          action: 'mdi-account-multiple-outline',
          items: [{ title: 'Consultar Afiliados' }, {title:'Agregar Afiliados'}],
          title: 'Afiliados',
        },
        
      ],
    //
  }),
};
</script>
