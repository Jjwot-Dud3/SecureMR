<template>
    <div>
        <v-container>
                <v-form>
                    <v-card >
                        <v-row justify-sm="center">
                            <v-col cols=6>
                                <v-container>
                                    <v-row>
                                        <v-col>
                                            <h3>Titulo:</h3>
                                            <v-text-field
                                                color="p1"
                                                id="title"
                                                v-model="fields.title"
                                                :rules="rules"
                                                outlined
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    
                                    <v-row>
                                        <v-col>
                                            <h3>Tipo de Documento:</h3>
                                            <v-autocomplete
                                                v-model="fields.documentType"
                                                id="documentType"
                                                :items="types"
                                                :rules="rules"
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
                                                id="comments"
                                                v-model="fields.comments"
                                                outlined
                                                no-resize
                                                clearable
                                                color="p1"
                                                :rules="rules"
                                                name="input-7-1"
                                                placeholder="*Indica comentarios acerca del documento"
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
                                        v-model="fields.file"
                                        color="p2"
                                        counter
                                        label="Archivo"
                                        placeholder="Selecciona el archivo que deseas adjuntar"
                                        prepend-icon="mdi-paperclip"
                                        outlined
                                        :rules="fileRules"
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

                                        <!-- <span
                                            v-else-if="index === 2"
                                            class="text-overline grey--text text--darken-3 mx-2"
                                        >
                                            +{{ files.length - 2 }} File(s)
                                        </span> -->
                                        </template>
                                    </v-file-input>
                                
                            </v-col>
                            {{fields}}
                        </v-row>
                    </v-card>
                </v-form>
            
        </v-container>
            
        
    </div>    
</template>

<script>
export default {
    name: "CreateDocumentDetails",
    props:  {
        items: Array
    },
    data: () => ({
      files: null,
      types: ["Resultados","Resumen de Consulta","Receta","Licencias","Analísis Ortopedico"],
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      title: null,
      documentType: null,
      comments: null,
      rules: [
          value => !!value || 'Campo es Requerido',
      ],
      fileRules:[
          value => !!value || 'Archivo es Requerido',
      ],
      fields: {
          title: null,
          documentType: null,
          comments: null,
          file: null
      }
    }),

}
</script>