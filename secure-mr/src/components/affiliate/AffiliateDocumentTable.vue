<template>
  <v-data-table
    :headers="headers"
    :items="documents"
    :items-per-page="10"
    class="elevation-1"
  >
    <template v-slot:[`item.state`] ="{ item }">
      <v-chip
        :color="getColor(item.state)"
        dark
      >
        {{ item.state }}
      </v-chip>
    </template>

    <template v-slot:[`item.visualize`] ="{ item }">
        <v-btn color="p1" v-if="item.visualize" dark @click.stop="openPDF">
            <v-icon
                left
                dark
            >
                mdi-eye
            </v-icon>
            Visualizar
        </v-btn>
    </template>
  
    <!-- <template v-slot:[`item.download`]>
        <v-btn color="p1" dark href="https://storage.googleapis.com/securemr-api-storage/Asignacion_Correlacion_SPSS_A_mano.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=securemr-api%40securemr-backend.iam.gserviceaccount.com%2F20220118%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20220118T041155Z&X-Goog-Expires=432001&X-Goog-SignedHeaders=host&X-Goog-Signature=3dc4c7e922d6d6e8465f651bd851a27f2d1866aa8d040cceb08d3f77347ca019e82658034379b699371378a2a833145c55128830d4f726832b16bf8c695d51e6a9b8abdd01fd9f6d9d75b154d5e3734a56c117dcf23710ca5e2baec583d2997e38be553799d3949be102b53eaae8cc1b0e0d0c89c2db7b40e313e098cbf31a01c8b4a32d48c570a5f73a569c9f8da9a8a9d9cbf78d84e10cf9baa2f9ad558a29cdaa22307883fe1421ca912e33dc58b1ddfea7be0452eeef8cc56224da5b6627a6215fd960dfb345f46b3b5d5122625cfd050eed9a16d92ce6c4e131a9626f18c33e03953b08515a27a79335f91ac47d808415b4036b85c2095fc09cfa1f737e" download>
            <v-icon
                left
                dark
            >
                mdi-cloud-download
            </v-icon>
            Descargar
        </v-btn>
    </template> -->


  </v-data-table>
</template>

<script>
  export default {
    props: ['documents'],
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Fecha', value: 'date' },
          { text: 'Emisor', value: 'emitter' },
          { text: 'Descripción', value: 'description' },
          { text: 'Estado', value: 'state' },
          { text: 'Visualizar', value: 'visualize' },
        ],
      }
    },
    methods: {
      getColor (state) {
        if (state == "Accesible") return 'green'
        else if (state == "Listo para Visualizar") return 'green'
      },
      visualizeFile(){
        this.$router.push('/visualize/name')
      },
      openPDF(){
        window.open("https://storage.googleapis.com/securemr-api-storage/Asignacion_Correlacion_SPSS_A_mano.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=securemr-api%40securemr-backend.iam.gserviceaccount.com%2F20220118%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20220118T041155Z&X-Goog-Expires=432001&X-Goog-SignedHeaders=host&X-Goog-Signature=3dc4c7e922d6d6e8465f651bd851a27f2d1866aa8d040cceb08d3f77347ca019e82658034379b699371378a2a833145c55128830d4f726832b16bf8c695d51e6a9b8abdd01fd9f6d9d75b154d5e3734a56c117dcf23710ca5e2baec583d2997e38be553799d3949be102b53eaae8cc1b0e0d0c89c2db7b40e313e098cbf31a01c8b4a32d48c570a5f73a569c9f8da9a8a9d9cbf78d84e10cf9baa2f9ad558a29cdaa22307883fe1421ca912e33dc58b1ddfea7be0452eeef8cc56224da5b6627a6215fd960dfb345f46b3b5d5122625cfd050eed9a16d92ce6c4e131a9626f18c33e03953b08515a27a79335f91ac47d808415b4036b85c2095fc09cfa1f737e");
      },
      
    },

  }
</script>