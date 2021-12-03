<template>
    <div>
        <Sidemenumainpss/>
        <CreateSelectListArs :itemList='itemList'/>
    </div>
</template>

<script>
import Sidemenumainpss from '@/components/pss/Sidemenumainpss'
import CreateSelectListArs from '@/components/common/CreateSelectListArs'

export default {
    components:
    {
        Sidemenumainpss,
        CreateSelectListArs
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