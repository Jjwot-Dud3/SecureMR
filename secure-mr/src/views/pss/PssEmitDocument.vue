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
                                <CreateSelectListArs :items="ars"/>
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
                                <CreateSelectListAffiliate :items="affiliate"/>
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
                                                <v-btn elevation="1" color="p1" dark max-width="100px" :disabled="dialog" :loading="dialog" @click="dialog=true" router>
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
            <v-dialog
            v-model="dialog"
            hide-overlay
            persistent
            width="300"
            >
                <v-card
                    color="p1"
                    dark
                >
                    <v-card-text text-color="primary">
                    Subiendo...
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
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
            ars: [{
                id: 1,
                itemName: "ARS Humano",
                itemSubtitle1: "contacto@arshumano.com",
                itemSubtitle2: "Av. Lope De Vega Esq. C. Fantino Falco"
            },{
            
                id: 2,
                itemName: "BHD Mapfre",
                itemSubtitle1: "contacto@bhdmapfre.com",
                itemSubtitle2: "Av. Abraham Lincoln 952"
            },
            {
                id: 3,
                itemName: "ARS Reservas",
                itemSubtitle1: "contacto@arsreservas.com",
                itemSubtitle2: "Calle Desiderio Arias 75"
            },
            {
                id: 4,
                itemName: "ARS Universal",
                itemSubtitle1: "contacto@arsuniversal.com",
                itemSubtitle2: "Av. Lope De Vega Esq. C. Fantino Falco"
            }],
            affiliate: [{
                id: 1,
                itemName: "Gabriel Santana",
                itemSubtitle1: "gabrielsantana@gmail.com",
                itemSubtitle2: "322-8596786-6"
            }],
            e1: 1,
            dialog: false,

        }
        
    },
    watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.$router.push('/pss/home')), 3000)
      },
    },
}
</script>