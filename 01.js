const app = new Vue({
    el: '#app',
    data: {
        titulo: 'hola desde Vue',
        frutas: ['manzana','pera','platano'],
        frutas2:[
            {
                "nombre": "manzana",
                "cantidad":10
            },
            {
                "nombre": "pera",
                "cantidad":0
            },
            {
                "nombre": "platano",
                "cantidad":4
            }
        ],
        nuevaFruta: '',
        totalFrutas: 0
    },

    methods: {
        agregarFruta () {

            //para fruta
            this.frutas.push(this.nuevaFruta)

            //para fruta2
            this.frutas2.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            })

            this.nuevaFruta=''
        }    
    },
    
    computed: {
        sumarFrutas (){
            this.totalFrutas = 0;
            for(fruta of this.frutas2){
                this.totalFrutas = this.totalFrutas + fruta.cantidad;
            }
            return this.totalFrutas; 
        }
    }
})