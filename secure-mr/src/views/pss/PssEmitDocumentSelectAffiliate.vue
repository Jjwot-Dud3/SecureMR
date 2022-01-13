<template>
    <div>
    <v-container>
            <v-row justify="center">
                <v-col cols="10">
                    <PssCreateSelectListAffiliate :items="items"/>
                </v-col>
            </v-row>
        </v-container>
    
    </div>
</template>
<script>
import PssCreateSelectListAffiliate from '@/components/pss/PssCreateSelectListAffiliate'
export default {
    name: 'PssEmitDocumentSelectAffiliate',
    components:{
        PssCreateSelectListAffiliate
    },  
    data(){
        return{
            items: [{
                itemName: "Nombre",
                itemSubtitle1: "Subtitulo 1",
                itemSubtitle2: "Subtitulo 2"
            }]
        }
        
    }
}
</script>