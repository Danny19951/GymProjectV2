import { defineStore } from "pinia";
import {ref} from 'vue';

export const useRegistrarStore = defineStore('registrar', () => 
{
    const nombre = ref('');
    const email = ref('');

    const guardarRegistro = (nombreFrm, EmailFrm) =>
    {
        nombre.value = nombreFrm;
        email.value = EmailFrm;

    }
    return {nombre, email, guardarRegistro}
});