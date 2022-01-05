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
                name:"Jan Molina",
                id:"654-4596786-2",
                age:21,
                NSS:74579332,
                ars: "ARS Humano"
            },
            dialog: false,
        }
        
    },
    computed:{

    },
    watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.$router.push('/')), 3000)
      },

    },
}
</script>