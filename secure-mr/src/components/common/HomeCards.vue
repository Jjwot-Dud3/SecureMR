<template>
    <div>
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
                                {{username}}
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
    </div>
</template>

<script>

export default {
    props:['username']
}
</script>