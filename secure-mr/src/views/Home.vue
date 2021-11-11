<template>
  <div >
    
    <Sidemenumainpss/>
    <v-container>
          <template>
          <v-card>
          <v-item-group>
            <v-container>
              <h2 class="p1--text pa-md-4 mx-lg-auto">
                General
              </h2>
              <v-row class="my-auto">
                <v-col v-for="n in 3" :key="n" cols="12" md="2">
                  <v-item>
                  <v-hover>
                      <template v-slot:default="{ hover }">
                        <v-card
                          class="mx-auto"
                          max-width="244"
                        >
                          <v-layout row justify-center align-center>
                            <v-icon size="80" color="1">mdi-account-multiple</v-icon>
                            <v-card-text>
                              <h2 class="g3--text text-center">
                                32
                              </h2>
                              <p class="g3--text text-center ">
                                Afiliados que te concedieron acceso
                              </p>
                            </v-card-text>
                          </v-layout>
                          

                          <v-fade-transition>
                            <v-overlay
                              v-if="hover"
                              opacity=0.70
                              absolute
                              color="p1"
                            >
                              <v-btn>See more info</v-btn>
                            </v-overlay>
                          </v-fade-transition>
                        </v-card>
                        
                      </template>
                    </v-hover>
                  </v-item>
                </v-col>
              </v-row>
              <h2 class="p1--text pa-md-4 mx-lg-auto">
              Archivos
              </h2>
              <v-row class="my-auto">
                <v-col v-for="n in 2" :key="n" cols="12" md="2">
                  <v-item>
                  <v-hover>
                      <template v-slot:default="{ hover }">
                        <v-card
                          class="mx-auto"
                          max-width="244"
                        >
                          <v-layout row justify-center align-center>
                            <v-icon size="75" class="my-3" color="1">mdi-file-document-multiple-outline</v-icon>
                            <v-card-text>
                              <h2 class="g3--text text-center">
                                32
                              </h2>
                              <p class="g3--text text-center">
                                Emitir documentos
                              </p>
                            </v-card-text>
                          </v-layout>
                          

                          <v-fade-transition>
                            <v-overlay
                              v-if="hover"
                              opacity=0.70
                              absolute
                              color="p1"
                            >
                              <v-btn>See more info</v-btn>
                            </v-overlay>
                          </v-fade-transition>
                        </v-card>
                        
                      </template>
                    </v-hover>
                  </v-item>
                </v-col>
              </v-row>

            </v-container>
          </v-item-group>
          
          </v-card>
        </template>
    </v-container>
  </div>
  
</template>

<script>
import Sidemenumainpss from '@/components/pss/Sidemenumainpss'
export default {
    components:{Sidemenumainpss}
}
</script>
