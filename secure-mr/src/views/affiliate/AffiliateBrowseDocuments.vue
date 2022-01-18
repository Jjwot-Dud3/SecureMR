<template>
    <div>
        <v-container >
            <h1 class="p1--text pa-md-2 mx-lg-auto row justify-center align-center">
                Consultar Documentos
            </h1>
            <h2 class="p1--text pa-md-4 mx-lg-auto row">
                Resultados
            </h2>
            <AffiliateDocumentTable :documents="documents"/>
        </v-container>
    </div>
</template>

<script>
import AffiliateDocumentTable from '@/components/affiliate/AffiliateDocumentTable'
export default {
    components:{AffiliateDocumentTable},
    data() {
        return {
            documents: [
          {
            id: '#618c7cca5a79d572af8b722f',
            date: "11/01/21",
            emitter: "Centro Médico Moderno",
            description: "Tomografía de Tórax",
            state: "Listo para Visualizar",
            visualize: true,
          }
        ]
        }
    }
}
</script>