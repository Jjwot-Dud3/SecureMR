<template>
    <div>
        <v-navigation-drawer absolute permanent expand-on-hover color=primary>
        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
            color="accent"
          >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" ></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            router :to="child.route"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
      </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data:  () => ({
      items: [
        
        {
          action: 'mdi-file-document-outline',
          items: [
            { 
              title: 'Emitir Documentos', route:''
            },
            { title: 'Consultar Documentos', route: ''},
          ],
          title: 'Documentos',
        },
        {
          action: 'mdi-account-multiple-outline',
          items: [{ title: 'Consultar Afiliados', route: '' }, {title:'Agregar Afiliados', route: ''}],
          title: 'Afiliados',
        },
        
      ],
    }),
}
</script>