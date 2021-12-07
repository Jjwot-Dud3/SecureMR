<template>
    <div>
        <!--<CreateDocumentDetails/>-->
        <!---->
        <CreateSelectListAffiliate :items="items"/>
    </div>
</template>

<script>
//import CreateDocumentDetails from '@/components/common/CreateDocumentDetails'
import CreateSelectListAffiliate from '@/components/pss/CreateSelectListAffiliate'
//import CreateSelectListArs from '@/components/common/CreateSelectListArs'

export default {
    components:
    {
        //CreateDocumentDetails,
        CreateSelectListAffiliate,
        //CreateSelectListArs
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