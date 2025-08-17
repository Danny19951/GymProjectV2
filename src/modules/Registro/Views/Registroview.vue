<template>
    <div>
        <h2>Formulario De registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="Form">
                <label for="nombre">nombre</label>
                <Field type="text" id="nombre" name="nombre" placeholder="ingrese su nombre" />
                <error-message name="nombre"></error-message>
            </div>
            <div class="Form">
                <label for="email">Email</label>
                <Field type="email" id="email" name="email" placeholder="ingrese su email" />
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
const onSubmit = () => {
    console.log('Se ha enviado el formulario correctamente')
}
</script>

<style scoped>
.Form {
    margin-bottom: 10px;
}
</style>