<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col>
                    <AffiliateAddContactForm :item="details"/>
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
import AffiliateAddContactForm from '@/components/affiliate/AffiliateAddContactForm.vue'

export default {
    components:
    {
        AffiliateAddContactForm,
    },
    data(){
        return{
            details: {
                name:"Gabriel Santana",
                id:"402-1730883-8",
                age:18,
                NSS:78679002,
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