<template>
  <v-app>
    <div>      
      <v-toolbar
        color="warning"        
      >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title> 
          Vuetify
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn color=" success" class="mx-2">
          ingreso
        </v-btn>
        <v-btn color=" error" class="mx-2">
          salir
        </v-btn>
      </v-toolbar>
    </div>
    <v-navigation-drawer 
      dark
      absolute
      temporary
      v-model="drawer"
    >
      <v-list class="mt-5">
        <v-list-item class="justify-center">
          <v-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png" class=" full-"></v-img>
          </v-avatar>          
        </v-list-item>

        <v-slide-item class="justify-center" >
          <v-list-item-content>
            Juanito Perez
          </v-list-item-content>
        </v-slide-item>
        <v-divider></v-divider>
      </v-list>
      <v-list class=" mt-3">
        <v-list-item>
          <v-btn block color="success" :to="{name:'Home'}">
            Home
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block color="success" :to="{name:'tareas-crud'}">
            Lista Tareas
          </v-btn>
        </v-list-item>
        
      </v-list>
        
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data(){
    return{
      drawer:true
    }
  }

  
};
</script>
