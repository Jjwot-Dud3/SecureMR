<template>
    <nav>
        <v-toolbar color="white">
            <v-img position="left center" max-height="60" max-width="60" :src="require('@/assets/secure-mr-logo.png')"></v-img>

            <v-toolbar-title >
                <span class="font-weight-light">SecureMR</span>    
            </v-toolbar-title>
            
            <v-spacer></v-spacer>

            <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="grey darken=1" v-bind="attrs" v-on="on" icon>
                        <v-icon>mdi-account-outline</v-icon>
                        <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-avatar>
                                <img
                                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                                    alt="John"
                                >
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>John Leider</v-list-item-title>
                                <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-btn
                                    :class="fav ? 'red--text' : ''"
                                    icon
                                    @click="fav = !fav" q
                                >
                                    <v-icon>mdi-heart</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>

            </v-menu>
            

            <v-btn class="mx-2" small fab color="grey darken-1" icon>
                <v-icon>mdi-bell-badge-outline</v-icon>
            </v-btn>
            <v-btn class="mx-2" small fab color="grey darken-1" icon>
                <v-icon>mdi-cog-outline</v-icon>
            </v-btn>
        </v-toolbar>
        
    </nav>
    
</template>    

<script>

export default {
    
}
</script>