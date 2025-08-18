
import axios from "axios";

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=4.6097&longitude=-74.0817&hourly=temperature_2m&timezone=auto';

export const getTempreatura = async ()=>
{
   const axiosWeatherResponse = await axios.get(API_URL);
   const nuevaTempratura = axiosWeatherResponse.hourly.temperature_2m[0];
   return nuevaTempratura;
}