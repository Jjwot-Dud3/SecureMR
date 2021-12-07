<template>
    <div>
        <v-row class="my-auto">
                <v-col v-for="item in items" :key="item.title" cols="12" md="2">
                  <v-item>
                  <v-hover>
                      <template v-slot:default="{ hover }">
                        <v-card
                          class="mx-auto my-5"
                          max-width="244"
                        >
                          <v-layout row justify-center align-center>
                            <v-icon size="80" color="1">mdi-account-multiple</v-icon>
                            <v-card-text>
                              <h2 class="g3--text text-center">
                                {{item.value}}
                              </h2>
                              <p class="g3--text text-center ">
                                {{item.title}}
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
    props:{
        items: Object
    }
}
</script>