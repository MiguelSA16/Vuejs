<template>
  <v-container>
    <v-row>
      <v-col class="primary" sm="8" md="6">
        <h1>8</h1>
      </v-col>
      <v-col class=" secondary" sm="4" md="6">
        <h1>4</h1>
      </v-col>
    </v-row>

    <v-row class=" pt-5" align="center" justify="space-around">
      <v-btn >
        texto
      </v-btn>
      <v-btn color=" primary">
        texto
      </v-btn>
      <v-btn color=" blue">
        texto
      </v-btn>

      <v-btn color=" blue" text>
        sin fondo
      </v-btn>

      <v-btn color=" warning" large>
        Largo
      </v-btn>
      <v-btn color=" warning" small>
        Largo
      </v-btn>

      <v-btn color=" warning" large disabled>
        Largo
      </v-btn> 
    </v-row>

    <v-row justify="space-around" align="center" class="pt-5">
      <v-btn color=" info" depressed>
        Boton
      </v-btn>

      <v-btn
        icon
        color="pink"
      >
        <v-icon>
          mdi-heart
        </v-icon>
      </v-btn>

      <v-btn
        color="info"
      >
        <v-icon>
          mdi-home
        </v-icon>
      </v-btn>

       <v-btn
        icon
        color="info"
      >
        <v-icon>
          mdi-forum
        </v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>

export default {
  
}
</script>
