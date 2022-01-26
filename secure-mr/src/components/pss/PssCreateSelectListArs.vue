<template>
    <div>
        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
        ></v-text-field>
        <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        :single-select="true"
        item-key="name"
        show-select
        class="elevation-1"
        :items-per-page="10"
        :search="search"
        >
            <template v-slot:top>
            </template>
        </v-data-table>
        <!-- <v-container>
                    <v-form>
                        
                            <div class="mx-auto">
                                <v-toolbar class="mx-10 my-5">
                                    <v-icon>
                                        mdi-magnify
                                    </v-icon>
                                    <v-text-field class=""
                                        color="p1"
                                        label="Inserte el nombre de la ARS"
                                    ></v-text-field>
                                </v-toolbar>
                                
                                <v-radio-group>
                                    <div :key="item.itemName" v-for="item in items">
                                        <v-container class="">
                                            <v-row align-content="end" justify="center" class="mx-5">
                                                <v-col class="lg" sm=6>
                                                    <h3>{{item.itemName}}</h3>
                                                    <p class="mb-0">{{item.itemSubtitle1}}</p>
                                                    <p>{{item.itemSubtitle2}}</p>
                                                </v-col>  
                                                <v-col class="my-auto pa-0" sm=1>
                                                    <v-radio color="p1"></v-radio>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                        
                                    </div>
                                </v-radio-group>
                                <div class="text-center py-5">
                                    <v-pagination
                                    v-model="page"
                                    :length="1"
                                    circle
                                    ></v-pagination>
                                </div>
                            </div>
                        
                    </v-form>
                   
        </v-container> -->
    </div>
</template>

<script>
export default {
    name: "CreateSelectListArs",
    props:{
        items: Object
    },
    data () {
      return {
        selected: [],
        search: '',
        headers: [
          {
            text: 'Nombre',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Correo', value: 'email', sortable:false},
          { text: 'Direccion', value: 'address', sortable:false},
        ]
      }
    },
    watch: {
        selected: {
            deep: true,
            handler () {
                this.$emit('arsSelected',this.selected);
            }

        }
    }
}
</script>