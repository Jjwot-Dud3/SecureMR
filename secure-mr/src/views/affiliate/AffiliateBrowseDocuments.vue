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
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Pendiente Descarga",
            visualize: false,
          },
          {
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Accesible",
            visualize: true,
          },
          {
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Accesible",
            visualize: true,
          },
          {
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Pendiente Descarga",
            visualize: false,
          },
          {
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Pendiente Descarga",
            visualize: false,
          },
          {
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Pendiente Descarga",
            visualize: false,
          },
          {
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Accesible",
            visualize: true,
          },
          {
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Accesible",
            visualize: true,
          },
          {
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Pendiente Descarga",
            visualize: false,
          },
          {
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Pendiente Descarga",
            visualize: false,
          },
        ]
        }
    }
}
</script>