<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col cols="10">
                    <AddTrustedPersonsList :items="items"/>
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
import AddTrustedPersonsList from '@/components/affiliate/AffiliateAddTrustedPersonsList.vue'

export default {
    components:
    {
        AddTrustedPersonsList,
    },
    data(){
        return{
            items: [
            {
                name: "Bella Jones",
                age: "Edad 16",
                role: "Rol: Paciente",
                id: "123-00000000"
            },
            {
                name: "Bella Jones",
                age: "Edad 16",
                role: "Rol: Paciente",
                id: "123-00000000"
            },
            {
                name: "Bella Jones",
                age: "Edad 16",
                role: "Rol: Paciente",
                id: "123-00000000"
            },
            ]
        }
        
    }
}
</script>