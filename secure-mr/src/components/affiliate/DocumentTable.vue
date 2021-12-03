<template>
  <v-data-table
    :headers="headers"
    :items="items"
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
        <v-btn color="p1" v-if="item.visualize" dark>
            <v-icon
                left
                dark
            >
                mdi-eye
            </v-icon>
            Visualizar
        </v-btn>
        <v-btn color="p1" v-else dark>
            <v-icon
                left
                dark
            >
                mdi-cloud-download
            </v-icon>
            Descargar
        </v-btn>
    </template>
  
  </v-data-table>
</template>

<script>
  export default {
    props: ['items'],
    data () {
      return {
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
        // items: [
        //   {
        //     id: '#2458-asgt',
        //     date: "03/03/12 22:43",
        //     emitter: "Darrell Williamson",
        //     description: "Análisis ABC",
        //     state: "Pendiente Descarga",
        //     visualize: false,
        //   },
        //   {
        //     id: '#2458-asgt',
        //     date: "03/03/12 22:43",
        //     emitter: "Darrell Williamson",
        //     description: "Análisis ABC",
        //     state: "Accesible",
        //     visualize: true,
        //   },
        //   {
        //     id: '#2458-asgt',
        //     date: "03/03/12 22:43",
        //     emitter: "Darrell Williamson",
        //     description: "Análisis ABC",
        //     state: "Accesible",
        //     visualize: true,
        //   },
        //   {
        //     id: '#2458-asgt',
        //     date: "03/03/12 22:43",
        //     emitter: "Darrell Williamson",
        //     description: "Análisis ABC",
        //     state: "Pendiente Descarga",
        //     visualize: false,
        //   },
        //   {
        //     id: '#2458-asgt',
        //     date: "03/03/12 22:43",
        //     emitter: "Darrell Williamson",
        //     description: "Análisis ABC",
        //     state: "Pendiente Descarga",
        //     visualize: false,
        //   },
        //   {
        //     id: '#2458-asgt',
        //     date: "03/03/12 22:43",
        //     emitter: "Darrell Williamson",
        //     description: "Análisis ABC",
        //     state: "Pendiente Descarga",
        //     visualize: false,
        //   },
        //   {
        //     id: '#2458-asgt',
        //     date: "03/03/12 22:43",
        //     emitter: "Darrell Williamson",
        //     description: "Análisis ABC",
        //     state: "Accesible",
        //     visualize: true,
        //   },
        //   {
        //     id: '#2458-asgt',
        //     date: "03/03/12 22:43",
        //     emitter: "Darrell Williamson",
        //     description: "Análisis ABC",
        //     state: "Accesible",
        //     visualize: true,
        //   },
        //   {
        //     id: '#2458-asgt',
        //     date: "03/03/12 22:43",
        //     emitter: "Darrell Williamson",
        //     description: "Análisis ABC",
        //     state: "Pendiente Descarga",
        //     visualize: false,
        //   },
        //   {
        //     id: '#2458-asgt',
        //     date: "03/03/12 22:43",
        //     emitter: "Darrell Williamson",
        //     description: "Análisis ABC",
        //     state: "Pendiente Descarga",
        //     visualize: false,
        //   },
        // ],
      }
    },
    methods: {
      getColor (state) {
        if (state == "Accesible") return 'green'
        else if (state == "Pendiente Descarga") return 'orange'
      },
    },
  }
</script>