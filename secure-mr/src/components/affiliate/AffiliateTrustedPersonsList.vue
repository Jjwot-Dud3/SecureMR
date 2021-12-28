<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-form>
                        
                        <v-card class="my-10" max-width="1500px">
                            
                            <div>
                                <h1 class="text-center">Listado de personas de confianza</h1>
                            </div>
                            <div class="mx-auto">
                                <v-toolbar class="mx-10 my-5">
                                    <v-container>
                                        <v-row class="pt-4" justify="center">
                                            <v-col cols=10>
                                                <v-container>
                                                    <v-row>
                                                        <v-col cols=0>
                                                            <v-icon>
                                                                mdi-magnify
                                                            </v-icon>
                                                        </v-col>
                                                        <v-col cols=11>
                                                            <v-text-field class=""
                                                                color="p1"
                                                                label="Inserte el nombre de la persona"
                                                            ></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                            </v-col>
                                            <v-col cols=2>
                                                <v-combobox
                                                    :items="roles"
                                                    label="Rol"
                                                    outlined
                                                    dense
                                                ></v-combobox>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                    
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
                        </v-card>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "TrustedPersonsList",
    props:  {
        items: Array
    },
    data(){
        return {
            roles: [
                "Afiliado",
                "Profesional Medico"
            ]
        }
    }
}
</script>