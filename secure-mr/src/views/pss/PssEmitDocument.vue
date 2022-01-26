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
                                <CreateSelectListArs :items="ars" v-on:arsSelected="onArsSelected" />
                                <v-row justify="center">
                                    <v-col cols='2'>
                                        <v-row>
                                            <v-col>
                                                <v-btn elevation="1" color="g3" max-width="100px" router to="/pss/home">
                                                    Cancelar
                                                </v-btn>
                                            </v-col>
                                            <v-col>
                                                <v-btn elevation="1" class="white--text" color="p1" max-width="100px" @click="e1 = 2" :disabled="isDisabled" >
                                                    Siguiente
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-stepper-content>
                            <v-stepper-content step="2">
                                <CreateSelectListAffiliate :items="affiliates" v-on:affiliateSelected="onAffiliateSelected"/>
                                <v-row justify="center">
                                    <v-col cols='2'>
                                        <v-row>
                                            <v-col>
                                                <v-btn elevation="1" color="p1" dark max-width="100px" @click="e1 = 1">
                                                    Atras
                                                </v-btn>
                                            </v-col>
                                            <v-col>
                                                <v-btn elevation="1" color="p1" class="white--text" max-width="100px" @click="e1 = 3" :disabled="isDisabled">
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
                                                <v-btn elevation="1" color="p1" class="white--text" max-width="100px" :disabled="dialog" :loading="dialog" @click="dialog=true" router>
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
            arsSelected: false,
            arsSelectedValue: null,
            affiliateSelected: false,
            affiliateSelectedValue: null,
            ars: [],
            affiliates: [],
            e1: 1,
            dialog: false,
        }
        
    },
    watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.$router.push('/')), 3000)
      },
    },
    created() {
        this.$http.get('/accounts/ars/all').then(response => {
            this.ars = response.data.data;
        })
        this.$http.get('/accounts/contact/all').then(response => {
            var data = response.data.data; 
            var affiliates = [];

            for (let index = 0; index < data.length; index++) {
                if(data[index].role == "Afiliado")
                    affiliates.push(data[index])
            }

            this.affiliates = affiliates;
        })
    },
    methods: {
        onArsSelected(value){
            if(Object.keys(value).length === 0){
                this.arsSelectedValue = value;
                this.arsSelected = false;
            }
            else {
                this.arsSelectedValue = value;
                this.arsSelected = true;
            } 
        },
        onAffiliateSelected(value){
            if(Object.keys(value).length === 0){
                this.affiliateSelectedValue = value;
                this.affiliateSelected = false;
            }
            else {
                this.affiliateSelectedValue = value;
                this.affiliateSelected = true;
            } 
        }
    },
    computed: {
        isDisabled(){
            console.log(this.e1)
            if (this.e1 === 1){
                return !this.arsSelected
            }
            if(this.e1 === 2){
                return !this.affiliateSelected
            }
            if(this.e1 === 3){
                return !false
            }
            return false;
            
        },

    }
}
</script>