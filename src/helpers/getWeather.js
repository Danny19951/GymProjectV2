
import axios from "axios";

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=4.6097&longitude=-74.0817&hourly=temperature_2m&timezone=auto';

export const getTemperatura = async () =>{
   const respuesta = await axios.get(API_URL);
   const naranjas = respuesta.filter(item => item.name === 'Naranja');
   const nuevaTemperatura = respuesta.data.hourly.temperature_2m;
   
   const nuevaTemperaturagrados = respuesta.data.hourly_units.temperature_2m[0];
   const primeratemp = nuevaTemperatura[0] + " " + nuevaTemperaturagrados;
   return primeratemp;
};
