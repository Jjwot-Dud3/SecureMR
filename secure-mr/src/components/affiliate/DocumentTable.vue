<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
  export default {
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
        items: [
          {
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Placeholder",
            visualize: 'Placeholder',
          },
          {
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Placeholder",
            visualize: 'Placeholder',
          },
          {
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Placeholder",
            visualize: 'Placeholder',
          },
          {
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Placeholder",
            visualize: 'Placeholder',
          },
          {
            id: '#2458-asgt',
            date: "03/03/12 22:43",
            emitter: "Darrell Williamson",
            description: "Análisis ABC",
            state: "Placeholder",
            visualize: 'Placeholder',
          },
        ],
      }
    },
  }
</script>