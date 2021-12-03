<template>
    <div>
        <Sidemenumainpss/>
        <v-container >
            <h2 class="p1--text pa-md-4 mx-lg-auto">
                Consultar Documentos
            </h2>
            <document-table>
            </document-table>
        </v-container>
    </div>
</template>

<script>
import DocumentTable from '@/components/affiliate/DocumentTable'
import Sidemenumainpss from '@/components/pss/Sidemenumainpss'
export default {
    components:{DocumentTable, Sidemenumainpss}
}
</script>