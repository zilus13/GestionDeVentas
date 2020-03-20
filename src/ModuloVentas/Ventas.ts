import { Jovo } from "jovo-framework";

const axios = require('axios');


export class Ventas {


     /**
      * Metodo que se encarga de consultar una tabla
      */
     async consultar() {

          const resp = await axios.get(`http://localhost:3000/curso/`);
          console.log('Respuesta:::');
          console.log(JSON.stringify(resp));

          return "resp.data";
     }
}