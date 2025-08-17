<template>
    <div>
        <h2>Formulario De registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="Form">
                <label for="nombre">nombre</label>
                <Field type="text" id="nombre" name="nombre" v-model="nombre" placeholder="ingrese su nombre" />
                <error-message name="nombre"></error-message>
            </div>
            <div class="Form">
                <label for="email">Email</label>
                <Field type="email" id="email" name="email" v-model="email" placeholder="ingrese su email" />
                <error-message name="email"></error-message>
            </div>
            <div class="Form">
                <button type="submit">Registrar</button>
            </div>
            
        </Form>
    </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { schema } from '../Schemas/validationSchema';
import { useRegistrarStore } from '@/modules/Stores/registrarStore';
import {ref} from 'vue';

const registrarStore = useRegistrarStore();

const nombre = ref('');
const email = ref('');

const onSubmit = () => {
    registrarStore.guardarRegistro(nombre.value, email.value);
    console.log('Se ha enviado el formulario correctamente')
}
</script>

<style scoped>
.Form {
    margin-bottom: 10px;
}
</style>