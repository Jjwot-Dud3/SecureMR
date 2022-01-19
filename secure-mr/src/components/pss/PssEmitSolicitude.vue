<template>
    <div>
        <v-container>
            <v-card class="my-10 pa-10">            
                <v-form>
                    <v-card >
                        <h1 class="text-center py-7">Emisión de Solicitud</h1>
                        <v-row justify-sm="center">
                            <v-col cols=6>
                                <v-container>
                                    <v-row>
                                        <v-col>
                                            <h3>Paciente:</h3>
                                            <v-text-field
                                                color="p1"
                                                outlined
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <h3>Cédula:</h3>
                                              <v-text-field
                                                color="p1"
                                                outlined
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    
                                    <v-row>
                                        <v-col>
                                            <h3>Solicitud:</h3>
                                            <v-textarea
                                                outlined
                                                no-resize
                                                clearable
                                                color="p1"
                                                name="input-7-1"
                                                hint="*Indicar la solicitud del documento"
                                            ></v-textarea>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-card>
                    <v-card class="my-10">
                        <v-row justify="center">
                          <v-col cols= 1>
                        <v-btn class="text-center ma-1"
                            large color="purple darken-2"
                            Rounded
                            x-large
                            dark
                            >
                            Crear
                        </v-btn>
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
    name: "EmitSolicitude",
    props:{
      source: String
    },
};
</script>