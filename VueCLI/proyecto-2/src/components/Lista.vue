<template>
    <div><!-- no exite el iten.id es solo para quitar el error-->
        <ul class="list-group">
            <li 
                v-for=" (item, index) of arrayOrdenado" 
                :key="item.id"
                class="list-group-item d-flex justify-content-between align-items-center"
                @click="aumentar(index)"
            >
                {{index}} - {{item.nombre}}
                <span class="badge bg-primary rounded-pill">
                    {{item.cantidad}}
                </span>
            </li>
        </ul>
        <div class="d-grid pt-2">
            <button class=" btn btn-danger" @click="reiniciar"> Reiniciar</button>
        </div>
        
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
    name: 'Lista',
    
    computed:{
        
        ...mapState([
            'frutas' 
        ]),

        //cambiamos en nuetro template frutas por arrayOrdenado para que se puedan mostrar 
        //las frutas ordenadas de mayor a menor
        arrayOrdenado(){
            // a y b son punto de comparacion que se le pueden pasar a sort
            return this.frutas.sort( (a , b) => b.cantidad - a.cantidad)
        }
    },

    methods:{
        ...mapMutations([
            'aumentar',
            'reiniciar'
        ])
    }
}
</script>