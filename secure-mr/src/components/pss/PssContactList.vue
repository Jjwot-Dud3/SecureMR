<template>
    <div>
        <v-container>
            <!-- <v-row>
                <v-col> -->
                    <v-form>
                        
                        <v-card class="my-10" max-width="1500px">
                            
                            <div>
                                <h1 class="text-center">Listado de Solicitudes de Contacto</h1>
                            </div>
                            <div class="mx-auto">
                                <v-toolbar class="mx-10 my-5">
                                    <v-icon>
                                        mdi-magnify
                                    </v-icon>
                                    <v-text-field class=""
                                        color="p1"
                                        label="Inserte el nombre del paciente"
                                    ></v-text-field>
                                </v-toolbar>
                                
                                <v-radio-group>
                                    <div :key="item.itemName" v-for="item in items">
                                        <v-container class="">
                                            <v-row align-content="end" justify="center" class="mx-5">
                                                <v-col class="lg" sm=6>
                                                    <h3>Nombre: {{item.itemName}}</h3>
                                                    <p class="mb-0">Edad: {{item.itemSubtitle1}}</p>
                                                    <p>Afiliado: {{item.itemSubtitle2}}</p>
                                                </v-col>  
                                                <v-col class="my-auto pa-0" sm=1>
                                                    <v-btn dark color="p1" router :loading="dialog" @click="dialog=true">Agregar</v-btn>
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
                        </v-card>
                    </v-form>
                <!-- </v-col>
            </v-row> -->
            <v-dialog v-model="dialog" hide-overlay persistent width="300">
                <v-card color="green" dark>
                    <h3 class="d-flex">
                    <v-icon>mdi-check</v-icon>
                    Success
                    </h3>
                </v-card>
            </v-dialog>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "PssContactList",
    props:  {
        items: Array
    },
    data(){return {
        dialog: false
    }},
    watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.$router.push('/')), 3000)
      },
    },
}
</script>