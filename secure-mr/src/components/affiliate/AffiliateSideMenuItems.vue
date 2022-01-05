<template>
  <div>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
          color="p3"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="child in item.items" :key="child.title" router :to="child.route">
            <v-list-item-content>
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
        {
          action: 'mdi-file-document-outline',
          items: [
            { 
              title: 'Consultar Documentos',
              route: '/affiliate/documents' 
            },
            { 
              title: 'Historial de permisos de documentos',
              route: '/pss/documents/create/arsselect' 
            },
          ],
          title: 'Documentos',
        },
        {
          action: 'mdi-account-multiple-outline',
          items: [
              { title: 'Consultar Personas con Acceso',
                route: '/affiliate/accessListPersons'
              },
              { title: 'Consultar Personas de Confianza',
                route: '/affiliate/browsetrustedpersons'
              },
              { title: 'Agregar Persona de Confianza',
                route: '/affiliate/addtrustedpersons'
              },
              { title: 'Eliminar Persona de Confianza',
                route: '/pss/affiliate/browse/affiliateselect'
              },
              { title: 'Agregar Persona a Contactos',
                route: '/affiliate/addcontacts'
              },
            
            ],
          title: 'Afiliados',
        },
        
      ],
    //
  }),
  
};
</script>