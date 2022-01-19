<template>
    <div>
        <EmitSolicitude/>
        <!---->
        <!--<PssCreateSelectListAffiliate :items="items"/>-->
    </div>
</template>

<script>
import EmitSolicitude from '@/components/pss/PssEmitSolicitude'
//import PssCreateSelectListAffiliate from '@/components/pss/PssCreateSelectListAffiliate'
//import CreateSelectListArs from '@/components/common/CreateSelectListArs'

export default {
    components:
    {
        EmitSolicitude,
        //PssCreateSelectListAffiliate,
        //CreateSelectListArs
    },
    data(){
        return{
            items: [{
                itemName: "Paciente",
                itemSubtitle1: "Cedula",
                itemSubtitle2: "Solicitud"
            }]
        }
        
    }
}
</script>