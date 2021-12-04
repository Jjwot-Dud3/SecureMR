<template>
    <div>
        <Sidemenumainpss/>
        <CreateDocumentDetails/>
    </div>
</template>

<script>
import Sidemenumainpss from '@/components/pss/Sidemenumainpss'
import CreateDocumentDetails from '@/components/common/CreateDocumentDetails'

export default {
    components:
    {
        Sidemenumainpss,
        CreateDocumentDetails
    },
    data(){
        return{
            title: "Seleccionar ARS",
            itemList: [{
                itemName: "Nombre",
                itemSubtitle1: "Subtitulo 1",
                itemSubtitle2: "Subtitulo 2"
            }]
        }
        
    }
}
</script>