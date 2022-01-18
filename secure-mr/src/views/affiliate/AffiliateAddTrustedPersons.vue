<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col cols="10">
                    <AffiliateAddTrustedPerson :item="details"/>
                </v-col>
                
            </v-row>
            <v-row justify="center">
                <v-col cols="1">
                    <v-btn elevation="1" color="p1" dark :loading="dialog" @click="dialog=true" router>
                        Agregar
                    </v-btn>
                </v-col>
            </v-row>

            
            
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
import AffiliateAddTrustedPerson from '@/components/affiliate/AffiliateAddTrustedPersonsList.vue'

export default {
    components:
    {
        AffiliateAddTrustedPerson,
    },
    data(){
        return{
            details: {
                name:"Gabriel Santana",
                id:"402-1730883-8",
                age:18,
                NSS:1088976104,
                ars: "Humano Ars"
            },
        }
        
    }
}
</script>