Vue.component('padre', {
    template:
    `
        <div class="p-5 bg-dark text-white">
            <h2> Componente padre: {{numeroPadre}}</h2>
            <button @click="numeroPadre++" class=" btn  btn-danger my-3"> + </button>
            {{nombrePadre}}
            <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
        </div>
    `,
    data() {
        return {
            numeroPadre:0,
            nombrePadre: ''
        }
    }
})