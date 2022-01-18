<template>
    <div>
        <PssContactList :items="items"/>
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
                itemName: "Bella Jones",
                itemSubtitle1: "Edad 16",
                itemSubtitle2: "Rol: Paciente",
                route: "/pss/affiliate/browse/documents"
            },
            {
                itemName: "Bella Jones",
                itemSubtitle1: "Edad 16",
                itemSubtitle2: "Rol: Paciente",
                route: "/pss/affiliate/browse/documents"
            },
            {
                itemName: "Bella Jones",
                itemSubtitle1: "Edad 16",
                itemSubtitle2: "Rol: Paciente",
                route: "/pss/affiliate/browse/documents"
            },
            ]
        }
        
    }
}
</script>