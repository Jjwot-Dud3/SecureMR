<template>
    <div>
        <TrustedPersonsList :items="items"/>
    </div>
</template>

<script>
import TrustedPersonsList from '@/components/affiliate/AffiliateTrustedPersonsList.vue'

export default {
    components:
    {
        TrustedPersonsList,
    },
    data(){
        return{
            items: [
            {
                itemName: "Bella Jones",
                itemSubtitle1: "Edad 16",
                itemSubtitle2: "Rol: Paciente"
            },
            {
                itemName: "Bella Jones",
                itemSubtitle1: "Edad 16",
                itemSubtitle2: "Rol: Paciente"
            },
            {
                itemName: "Bella Jones",
                itemSubtitle1: "Edad 16",
                itemSubtitle2: "Rol: Paciente"
            },
            ]
        }
        
    }
}
</script>