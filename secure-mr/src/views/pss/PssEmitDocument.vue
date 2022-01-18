<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col>
                    <v-stepper v-model="e1">
                        <v-stepper-header>
                            <v-stepper-step :complete="e1 > 1" step="1" color="p1">
                                Seleccionar ARS
                            </v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step :complete="e1 > 2" step="2" color="p1">
                                Seleccionar Afiliado
                            </v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step :complete="e1 > 3" step="3" color="p1">
                                Emisión de Documentos
                            </v-stepper-step>
                        </v-stepper-header>
                        <v-stepper-items>
                            <v-stepper-content step="1">
                                <CreateSelectListArs :items="items"/>
                                <v-row justify="center">
                                    <v-col cols='2'>
                                        <v-row>
                                            <v-col>
                                                <v-btn elevation="1" color="g3" max-width="100px" router to="/pss/home">
                                                    Cancelar
                                                </v-btn>
                                            </v-col>
                                            <v-col>
                                                <v-btn elevation="1" color="p1" dark max-width="100px" @click="e1 = 2">
                                                    Siguiente
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-stepper-content>
                            <v-stepper-content step="2">
                                <CreateSelectListAffiliate :items="items"/>
                                <v-row justify="center">
                                    <v-col cols='2'>
                                        <v-row>
                                            <v-col>
                                                <v-btn elevation="1" color="p1" dark max-width="100px" @click="e1 = 1">
                                                    Atras
                                                </v-btn>
                                            </v-col>
                                            <v-col>
                                                <v-btn elevation="1" color="p1" dark max-width="100px" @click="e1 = 3">
                                                    Siguiente
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                
                            </v-stepper-content>
                            <v-stepper-content step="3">
                                <CreateDocumentDetails :items="items"/>
                                <v-row justify="center">
                                    <v-col cols='2'>
                                        <v-row>
                                            <v-col>
                                                <v-btn elevation="1" color="p1" dark max-width="100px" @click="e1 = 2">
                                                    Atras
                                                </v-btn>
                                            </v-col>
                                            <v-col>
                                                <v-btn elevation="1" color="p1" dark max-width="100px" @click="e1 = 3">
                                                    Siguiente
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import CreateDocumentDetails from '@/components/pss/PssCreateDocumentDetails'
import CreateSelectListAffiliate from '@/components/pss/PssCreateSelectListAffiliate'
import CreateSelectListArs from '@/components/pss/PssCreateSelectListArs'

export default {
    components:
    {
        CreateDocumentDetails,
        CreateSelectListAffiliate,
        CreateSelectListArs
    },
    data(){
        return{
            items: [{
                id: 1,
                itemName: "Nombre",
                itemSubtitle1: "Subtitulo 1",
                itemSubtitle2: "Subtitulo 2"
            },{
            
                id: 2,
                itemName: "Nombre",
                itemSubtitle1: "Subtitulo 1",
                itemSubtitle2: "Subtitulo 2"
            }],
            e1: 1,
        }
        
    }
}
</script>