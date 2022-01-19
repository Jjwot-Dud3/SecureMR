<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-form>
                        
                        <v-card class="my-10" max-width="1500px">
                            
                            <div>
                                <h1 class="text-center">Agregar Persona de confianza</h1>
                            </div>
                            <div class="mx-auto">
                                <v-toolbar class="mx-10 my-5">
                                    <v-container>
                                        <v-row class="pt-9" justify="center">
                                            <v-col cols=10>
                                                <v-container>
                                                    <v-row>
                                                        <v-col>
                                                            <v-icon>
                                                                mdi-magnify
                                                            </v-icon>
                                                        </v-col>
                                                        <v-col cols=11>
                                                            <v-text-field v-model="search" class=""
                                                                color="p1"
                                                                label="Inserte la cedula de la persona"
                                                            ></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                            </v-col>
                                            
                                        </v-row>
                                    </v-container>
                                    
                                </v-toolbar>
                                
                                <v-form>
                                    <v-row justify-sm="center">
                                        <v-col cols="8">
                                        <v-container>
                                            <v-row justify>
                                                    <v-col>
                                                        <v-text-field hint="Nombre" :value="item.name" persistent-hint readonly></v-text-field>
                                                    </v-col>
                                                    <v-col>
                                                        <v-text-field hint="ID" :value="item.id" persistent-hint readonly></v-text-field>
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col>
                                                        <v-text-field hint="Rol" :value="item.ars" persistent-hint readonly></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-container> 
                                        </v-col>
                                    </v-row>
                                </v-form>
                                
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
    name: "AddTrustedPersonsList",
    data(){
        return{
            item: {
                name:null,
                id:null,
                age:null,
                NSS:null,
                ars:null
            },
            search: ''
        }
        
    },
    watch: {
        search(val){
            if(val == '654-4596786-2') {
                this.item = {
                    name:"Jan Molina",
                    id:"654-4596786-2",
                    age:21,
                    NSS:74579332,
                    ars: "Afiliado"
                }
            } else {
                this.item = {
                    name:null,
                    id:null,
                    age:null,
                    NSS:null,
                    ars:null
                }
            }
            
            
                
        }
    }
}
</script>