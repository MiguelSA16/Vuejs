<template>
    <div>
        <h1> Formulario</h1>
        <b-row>
            <b-col md="6">
                <b-form-input 
                    type="text" 
                    v-model="texto"
                    :state="comprobar"
                >
                </b-form-input>
                <small>minimo 3 caracteres</small>
                <p>Text: {{texto}}</p>
            </b-col>

            <b-col md="6">
                <b-form-select
                    v-model="selected" 
                    :options="options"
                >
                </b-form-select>
                <p>Seleccion: {{selected}}</p>
            </b-col>

            <b-col md="6">
                <b-form-radio-group
                    v-model="radio"
                    :options="animalesRadio"
                >
                </b-form-radio-group>
                <p>Radio: {{radio}}</p>
            </b-col>

            <b-col md="6">
                <b-form-checkbox-group
                    v-model="check"
                    :options="animalesRadio"
                >
                </b-form-checkbox-group>
                <p>Multiple:{{check}}</p>
            </b-col>
            
        </b-row>
        
        
    </div>
</template>

<script>
export default {
    name: 'Form',
    data(){
        return{
            texto:'',
            selected: null,
            radio: null,
            check: [],
            options:[
                {value: null, text: 'Seleccione un animal'},
                {value: 'perro', text: 'Guau '},
                {value: 'gato', text: 'Miau'},
                {value: 'pato', text: 'Cuack'}
            ],
            animalesRadio:[
                {value: 'perro', text: 'Guau '},
                {value: 'gato', text: 'Miau'},
                {value: 'pato', text: 'Cuack'}
            ]

        }
    },
    computed:{
        comprobar(){
            return this.texto.length > 2 ? true : false
        }
    }
}
</script>