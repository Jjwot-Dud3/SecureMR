<template>
    <div>
        <v-container>
            <v-row justify="center"> 
                <v-col>
                    <PssContactList :items="items"/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import PssContactList from '@/components/pss/PssContactList.vue'

export default {
    components:
    {
        PssContactList,
    },
    data(){
        return{
            items: [
            {
                itemName: "Gabriel Santana",
                itemSubtitle1: "18",
                itemSubtitle2: "Afiliado",
                route: "/pss/affiliate/browse/documents"
            },
            
            ]
        }
        
    }
}
</script>