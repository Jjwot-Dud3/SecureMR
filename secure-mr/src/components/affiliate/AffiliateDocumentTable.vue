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
        window.open("https://storage.googleapis.com/securemr-api-storage/de248e56-4024-4061-850a-3bea7a902fc3.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=securemr-api%40securemr-backend.iam.gserviceaccount.com%2F20220119%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20220119T025114Z&X-Goog-Expires=432001&X-Goog-SignedHeaders=host&X-Goog-Signature=64ef4f91354ba5de0994231c6d19ee44cb2c772e627afe55f6afef8848f893ddb4def6c55d60d4ae06041362542e6d83032945c3ae9ebd9d296d27825b827a1a98a725b6727695986500647297a36692ac8505c3cd1ded28cdb042824cd569b1c4da5c244ec798149e60b1929992780ab5c293aa0b0452ae2966e9f34a0cd584116db006ac1a0c3a9f5db50b04108dde2b310a5d16c583bbd96a47b34fe4c83abc23ec88c71d5a0bf8ba26d725be41fc2c9e4db73acfaab610f382bd096b32958fc486ef369755b1ddd77bdd5fdedd3bd36f6e8af36b6c30b487ef45ee051bdf489bbba01c26af8c5c73e5107659268859f58818bed59112c5df4027fc0df221");
      },
      
    },

  }
</script>