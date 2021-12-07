<template>
    <div>
        <DocumentAccessListPersons :items="items"/>
    </div>
</template>

<script>
import DocumentAccessListPersons from '@/components/affiliate/AffiliateDocumentAccessListPersons'

export default {
    components:
    {
        DocumentAccessListPersons,
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