<template>
    <div>
        <v-container >
            <h1 class="p1--text pa-md-2 mx-lg-auto row justify-center align-center">
                Consultar Documentos
            </h1>
            <h2 class="p1--text pa-md-4 mx-lg-auto row">
                Resultados
            </h2>
            <document-table :documents="documents">
            </document-table>
        </v-container>
    </div>
</template>

<script>
import DocumentTable from '@/components/affiliate/DocumentTable'
export default {
    components:{DocumentTable},
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