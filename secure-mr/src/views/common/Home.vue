<template>
    <div v-if="role == 'affiliate'">
        <AffiliateHome/>
    </div>
    <div v-else-if="role == 'pss'">
        <PssHome/>
    </div>
</template>
<script>
import PssHome from '@/views/pss/PssHome'
import AffiliateHome from '@/views/affiliate/AffiliateHome'


export default ({
    data:() => ({
      role: localStorage.role
    }),
    components:{PssHome, AffiliateHome},
})
</script>
