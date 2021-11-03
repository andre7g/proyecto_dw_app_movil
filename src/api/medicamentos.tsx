import axios from "axios";

const clinicaDB = axios.create({
    baseURL: 'http://10.0.2.2:17157/apiconsume/obtener?endpoint=api'
    //baseURL: 'https://192.168.1.26:44398/api'
}); 

export default clinicaDB;