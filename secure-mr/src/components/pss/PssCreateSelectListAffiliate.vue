<template>
    <div>
        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
        ></v-text-field>
        <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        :single-select="true"
        item-key="name"
        show-select
        class="elevation-1"
        :items-per-page="10"
        :search="search"
        >
            <template v-slot:top>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    name: "PssCreateSelectListAffiliate",
    props:{
        items: Object
    },
    data () {
      return {
        selected: [],
        search: '',
        headers: [
          {
            text: 'Nombre',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Correo', value: 'email', sortable:false},
        ]
      }
    },
    watch: {
        selected: {
            deep: true,
            handler () {
                this.$emit('affiliateSelected',this.selected);
            }

        }
    }
}
</script>