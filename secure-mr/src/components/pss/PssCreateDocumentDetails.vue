<template>
    <div>
        <v-container>
            <v-card class="my-10 pa-10">            
                <v-form>
                    <v-card >
                        <h1 class="text-center py-7">Emisión de Documentos</h1>
                        <v-row justify-sm="center">
                            <v-col cols=6>
                                <v-container>
                                    <v-row>
                                        <v-col>
                                            <h3>Titulo:</h3>
                                            <v-text-field
                                                color="p1"
                                                outlined
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    
                                    <v-row>
                                        <v-col>
                                            <h3>Tipo de Documento:</h3>
                                            <v-autocomplete
                                                v-model="value"
                                                :items="items"
                                                dense
                                                outlined
                                                color="p1"
                                                placeholder="Escoge un tipo de documento"
                                            ></v-autocomplete>
                                        </v-col>
                                    </v-row>
                                    
                                    <v-row>
                                        <v-col>
                                            <h3>Comentarios:</h3>
                                            <v-textarea
                                                outlined
                                                no-resize
                                                clearable
                                                color="p1"
                                                name="input-7-1"
                                                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                                                hint="*Indica comentarios acerca del documento"
                                            ></v-textarea>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-col>
                            <v-col cols=3>
                                <h3>Fecha:</h3>
                                <v-date-picker color="p2" text-color="white" v-model="picker"></v-date-picker>
                            </v-col>
                        </v-row>
                    </v-card>
                    <v-card class="my-10">
                        <v-row justify="center">
                            <v-col cols=6>
                                
                                    <v-file-input
                                        v-model="files"
                                        color="p2"
                                        counter
                                        label="Lista de archivos"
                                        placeholder="Selecciona los archivos que deseas adjuntar"
                                        prepend-icon="mdi-paperclip"
                                        outlined
                                        :show-size="1000"
                                    >
                                        <template v-slot:selection="{ index, text }">
                                        <v-chip
                                            v-if="index < 2"
                                            color="p2"
                                            dark
                                            label
                                            small
                                        >
                                            {{ text }}
                                        </v-chip>

                                        <span
                                            v-else-if="index === 2"
                                            class="text-overline grey--text text--darken-3 mx-2"
                                        >
                                            +{{ files.length - 2 }} File(s)
                                        </span>
                                        </template>
                                    </v-file-input>
                                
                            </v-col>
                        </v-row>
                    </v-card>
                </v-form>
            </v-card>
        </v-container>
            
        
    </div>    
</template>

<script>
export default {
    name: "CreateDocumentDetails",
    props:  {
        itemList: Array
    },
    data: () => ({
      files: [],
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }),
}
</script>