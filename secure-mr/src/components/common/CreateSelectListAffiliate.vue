<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-form>
                        
                        <v-card class="my-10" max-width="1500px">
                            
                            <div>
                                <h1 class="text-center">Seleccionar Afiliado</h1>
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
                                    <div :key="item.itemName" v-for="item in itemList">
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
    name: "CreateSelectListArs",
    props:  {
        itemList: Array
    }
}
</script>