<template>
    <div>
        <PatientList :items="items"/>
    </div>
</template>

<script>
import PatientList from '@/components/pss/PssBrowseSelectListAffiliate.vue'

export default {
    components:
    {
        PatientList,
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