<template>
    <div>
    <v-container>
            <v-row justify="center">
                <v-col cols="10">
                    <CreateSelectListArs :items="items"/>
                </v-col>
            </v-row>
        </v-container>
    
    </div>
</template>
<script>
import CreateSelectListArs from '@/components/pss/PssCreateSelectListArs'
export default {
    name: 'PssEmitDocumentSelectArs',
    components:{
        CreateSelectListArs
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