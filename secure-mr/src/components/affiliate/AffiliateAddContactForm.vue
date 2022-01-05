<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-form>
                        
                        <v-card class="my-10" max-width="1500px">
                            
                            <div>
                                <h1 class="text-center">Agregar Contacto</h1>
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
                                                        <v-text-field hint="ARS" :value="item.ars" persistent-hint readonly></v-text-field>
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
    name: "AddTrustedContactForm",
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
            if(val == '402-1831893-0') {
                this.item = {
                    name:"Gabriel Santana",
                    id:"402-1730883-8",
                    age:18,
                    NSS:1088976104,
                    ars: "Humano Ars"
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