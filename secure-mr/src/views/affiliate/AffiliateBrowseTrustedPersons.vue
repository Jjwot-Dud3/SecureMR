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
            items: []
        }
        
    },
    
    created(){
        this.$http.get('/privacy/affiliate/trustedusers/get')
            .then(response => {
                this.items = response.data.data.concat(response.data.data);
            })
    }
}
</script>