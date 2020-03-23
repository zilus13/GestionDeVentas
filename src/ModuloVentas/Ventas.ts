import { Jovo } from "jovo-framework";

const axios = require('axios');


export class Ventas {


     /**
      * Metodo que se encarga de consultar una tabla
      */
     async consultar(jovo: Jovo): Promise<any> {
          const yourConfig = {
               headers: {
                    Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW9FbGVjdHJvbmljbyI6Imx1aXNnZXJtZW5oZXJAZ21haWwuY29tIiwiaWF0IjoxNTg0OTg5OTUxLCJleHAiOjE1ODQ5OTM1NTF9.ZL0mNimD1tLKq3wPutY6Exi_Zh_h8AZ0DGXWjub_7wA"
               }
          };

          const resp = await axios.get(`http://localhost:4000/curso/`, yourConfig)
               .then((res: { data: any; }) => {
                    const profile = res.data;
                    console.log('profile isss:', res.data);
                    const speech = 'respuesta';
                    const reprompt = 'esta es la respuesta';
                    return jovo.ask(speech, reprompt);
               }).catch((error: any) => console.log(error));

     }
}