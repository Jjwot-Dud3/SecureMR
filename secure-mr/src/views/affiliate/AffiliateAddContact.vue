<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col cols="10">
                    <AffiliateAddContactForm :item="details"/>
                </v-col>
                
            </v-row>
            <v-row justify="center">
                <v-col cols="1">
                    <v-btn
                        elevation="1"
                        color="p1"
                        dark
                    >
                        Agregar
                    </v-btn>
                </v-col>
                
            </v-row>
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
                NSS:1088976104,
                ars: "Humano Ars"
            },
        }
        
    }
}
</script>