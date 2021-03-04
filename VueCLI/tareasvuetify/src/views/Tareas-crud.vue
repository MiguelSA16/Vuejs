<template>
    <v-container>
        <v-row>
            <v-col md="6">
                <v-card class=" mb-3" v-for="(item,index) in listaTareas" :key="index">
                    <v-card-title>
                        <v-chip color="pink" label text-color="white">
                            <v-icon left>
                                mdi-label
                            </v-icon>
                            {{item.titulo}}
                        </v-chip>
                    </v-card-title>                    

                    <v-card-text>
                        {{item.descripcion}}
                    </v-card-text>

                    <v-card-actions>
                        <v-btn class=" warning" @click="editar(index)">
                            editar
                        </v-btn>
                        <v-btn class=" error" @click="eliminarTarea(item.id)" >
                            eliminar
                        </v-btn>
                    </v-card-actions>                    
                </v-card>

            </v-col>
            
            <v-col md="6" v-if="formAgregar">
                <v-card class=" mb-3 pa-3">
                    <v-form @submit.prevent="agregarTarea">
                        <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>
                        <v-textarea label="Descripcion de tarea"  v-model="descripcion"></v-textarea>
                        <v-btn color="success" block type="submit">
                            Agregar tarea
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>

             <v-col md="6" v-if="!formAgregar">
                <v-card class=" mb-3 pa-3">
                    <v-form @submit.prevent="editarTarea">
                        <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>
                        <v-textarea label="Descripcion de tarea"  v-model="descripcion"></v-textarea>
                        <v-btn color="warning" block type="submit">
                            Editar tarea
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>

        <v-snackbar
            v-model="snackbar"
        >
            {{ mensaje }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    cerrar
                </v-btn>
            </template>
        </v-snackbar>
        
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            titulo:'',
            descripcion:'',
            listaTareas:[
                {
                    id: 1,
                    titulo: 'titulo tarea #1',
                    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda maxime. Reprehenderit ex aliquam aperiam quae repellat ratione neque dolorem suscipit iste sunt magnam totam sit ipsum, minima commodi fugit?'
                },
                {
                    id: 2,
                    titulo: 'titulo tarea #2',
                    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda maxime. Reprehenderit ex aliquam aperiam quae repellat ratione neque dolorem suscipit iste sunt magnam totam sit ipsum, minima commodi fugit?'
                }
            ],
            snackbar: false,
            mensaje: '',
            formAgregar: true,
            indexTarea:''
        }
    },
    methods:{
        agregarTarea(){
            console.log(this.titulo, this.descripcion);
            if(this.titulo === '' || this.descripcion === '' ){
                this.snackbar =  true
                this.mensaje = 'Llena todos los campos'
            }else{
                this.listaTareas.push({
                    id: Date.now(),
                    titulo: this.titulo,
                    descripcion: this.descripcion
                })            
            
            this.titulo = ''
            this.descripcion = ''
            this.snackbar = true
            this.mensaje = 'Tarea Agregada!'

            }
        },
        eliminarTarea(id){
            this.listaTareas = this.listaTareas.filter(e => e.id != id )
        },

        editar(index){
            this.formAgregar=false
            this.titulo = this.listaTareas[index].titulo
            this.descripcion = this.listaTareas[index].descripcion
            this.indexTarea = index

        },
        editarTarea(){
            this.listaTareas[this.indexTarea].titulo = this.titulo
            this.listaTareas[this.indexTarea].descripcion = this.descripcion
            this.formAgregar = true
            this.titulo = ''
            this.descripcion = ''
        }
    }
}
</script>