<template>
    <div>
        <v-container >
          <v-card class="my-10 pa-10">
            <h1 class="p1--text pa-md-2 mx-lg-auto row justify-center align-center">
                Consultar Documentos
            </h1>
            <h2 class="p1--text pa-md-4 mx-lg-auto row">
                Información General del Paciente
            </h2>
            <PssBrowseDocumentsUserDetails :item="details"/>
            <h2 class="p1--text pa-md-4 mx-lg-auto row">
                Resultados
            </h2>
            <PssDocumentTable :documents="documents"/>
          </v-card>
        </v-container>
    </div>
</template>

<script>
import PssDocumentTable from '@/components/pss/PssDocumentTable'
import PssBrowseDocumentsUserDetails from '@/components/pss/PssBrowseDocumentsUserDetails'
export default {
    components:{PssDocumentTable, PssBrowseDocumentsUserDetails},
    data() {
        return {
            details: {
                name:"Gabriel Santana",
                id:"402-1730883-8",
                age:18,
                NSS:1088976104,
                ars: "Humano Ars"
            },
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