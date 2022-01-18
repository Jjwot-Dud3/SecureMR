<template>
    <div>
        <v-container>
            <v-form>
                <v-row justify-sm="left">
                    <v-col cols="8">
                       <v-container>
                           <v-row>
                                <v-col>
                                    <v-text-field hint="Nombre" :value="item.name" persistent-hint readonly></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field hint="Edad" :value="item.age" persistent-hint readonly></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field hint="Cedula" :value="item.idNumber" persistent-hint readonly></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field hint="NSS" :value="item.ssn" persistent-hint readonly></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field hint="ARS" :value="item.ars" persistent-hint readonly></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container> 
                    </v-col>
                </v-row>
            </v-form>
        </v-container>
    </div>
</template>

<script>

export default ({
    name: 'PssBrowseDocumentsUserDetails',
    props: {item: Object}
})
</script>
