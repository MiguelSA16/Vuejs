<template>
    <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-date-picker 
                            v-model="fecha"
                            full-width
                            Locale="es-es"
                            :min="minimo"
                            :max="maximo"
                            @change="getDolar(fecha)"
                        >

                        </v-date-picker>
                    </v-card>
                    <v-card 
                        color="error" 
                        dark
                    >
                        <v-card-text 
                            class="text-h4 text-center" 
                        >                            
                            {{valor}}
                        </v-card-text>
                       
                    </v-card>
                </v-col>
                
            </v-row>
        </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations} from "vuex"

export default {
    data(){
        return{
            fecha:new Date().toISOString().substr(0,10),
            minimo:'1984',
            maximo:new Date().toISOString().substr(0,10),
            valor:null
        }
    },

    methods:{

        ...mapMutations([
            'mostrarLoading',
            'ocultarLoading'
        ]),

        async getDolar(dia){         

            let ddmmyy = dia.split('-').reverse().join('-')

            try {

                this.mostrarLoading({
                    titulo:'Accediendo a informacion',
                    color: 'secondary'
                })

                let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)
                
                if(datos.data.serie.length > 0){
                    this.valor= await datos.data.serie[0].valor
                }else{
                    this.valor='Sin resultados'
                }

                
                
            } catch (error) {
                console.log('error')
            }
            finally{
                this.ocultarLoading()
            }
            
        }
    },

    created(){
        this.getDolar(this.fecha)
    }

}
</script>