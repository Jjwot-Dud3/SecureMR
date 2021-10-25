<template>
  <div class="home">
    <h1>Homepage</h1>
    <!--<v-btn class="pink white--text">Click</v-btn>
    <v-btn dark color="pink">Click</v-btn>
    <v-btn depressed dark color="pink">Click</v-btn>-->
    <v-btn text color="purple">Click me</v-btn> <!--text is equivalent to flat in previous version-->

     <v-btn
      dark
      small
      color="primary"
    >
      <v-icon left dark>
        mdi-minus
      </v-icon>
      <span>Minus</span>
    </v-btn>
     <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>

    <v-btn outlined small fab dark color="purple">
      <v-icon>mdi-monitor-star</v-icon> <!--Has to have mdi first to use the icon-->
    </v-btn>
  </div>
</template>

<script>
  

export default {
  


}
</script>
