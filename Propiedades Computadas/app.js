const app = new Vue({
    el: '#app',
    data() {
        return {
            mensaje: 'holaa Miguel XD',
            contador: 0
        }
    },

    /*created:function() {
        setInterval( function(){
            var sef = this;
            console.log(sef)
        },100)
    },*/

    // computed : son datos conlogica que retornan algo.
    computed: {
        invertido: function(){
            return this.mensaje.split('').reverse().join('');
        },
        color: function(){
            return {
                'bg-success'    : this.contador <= 10,
                'bg-warning'    : this.contador > 10 && this.contador < 20,
                'bg-danger'     : this.contador >= 20
            }

        }
    },

});