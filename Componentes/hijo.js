Vue.component('hijo',{

    template:
    `
        <div class=" py-5 bg-success">
            <h4>Componete hijo: {{numero}} </h4>
            <h4>Nombre: {{nombre}}</h4>
        </div>
    `,

    // metodo por el cual los hijos puede recivir datos
    props:['numero'],

    data() {
        return {
            nombre:'Miguel'
        }
    },

    //El metodo mounted se aplica cuando la data ya es leida por le navegador
    mounted() {
        this.$emit('nombreHijo',this.nombre);
    },
})