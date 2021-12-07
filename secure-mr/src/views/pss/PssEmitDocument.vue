<template>
    <div>
        <!--<CreateDocumentDetails/>-->
        <!---->
        <PssCreateSelectListAffiliate :items="items"/>
    </div>
</template>

<script>
//import CreateDocumentDetails from '@/components/common/CreateDocumentDetails'
import PssCreateSelectListAffiliate from '@/components/pss/PssCreateSelectListAffiliate'
//import CreateSelectListArs from '@/components/common/CreateSelectListArs'

export default {
    components:
    {
        //CreateDocumentDetails,
        PssCreateSelectListAffiliate,
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