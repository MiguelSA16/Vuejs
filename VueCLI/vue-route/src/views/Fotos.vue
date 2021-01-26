<template>
    <div>
        <h1>Galeria de Fotos</h1>
        <div>
            <router-link 
                :to="{ name:'fotos', params:{id:item}}" 
                v-for="(item, index) of fotosArreglo" 
                :key="index"
            >
                <button class=" btn btn-warning mx-2">
                    Foto {{item}}
                </button>
            </router-link>
        </div>
        
        <Foto/>

        <div>
            <button @click="anterior" class=" btn btn-dark mx-2"> Anterior</button>
            <button @click="volverHome" class=" btn btn-dark mx-2"> Volver a Home</button>
            <button @click="siguiente" class=" btn btn-dark mx-2"> Siguiente</button>
        </div>
    </div>
</template>

<script>
import Foto from "@/components/Fotografia.vue"

export default {
    name:'Fotos',
    components:{
        Foto 
    }, 
    data(){
        return{
            fotosArreglo:[1,2,3]
        }        
    },
    methods:{
        volverHome(){
            this.$router.push('/')
        },
        anterior(){
            this.$router.go('-1')
        },
        siguiente(){
            this.$router.go('1')
        }
    }
}
</script>