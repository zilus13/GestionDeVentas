import { Jovo } from "jovo-framework";
import { Ventas } from "../ModuloVentas/Ventas";

const ventas = new Ventas();
export class Consultar {

     /**
      * Metodo que se encarga de consultar una tabla
      */
     async consultar(tabla: string, jovo: Jovo) {
          let speech = ' ';
          let reprompt = '';

          if (tabla === 'ventas') {
               const respuesta = await ventas.consultar(jovo);


          } else if (tabla === 'clientes') {

               speech = 'Vas a consultar clientes';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'rutas') {

               speech = 'Vas a consultar rutas';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'inventarios') {

               speech = 'Vas a consultar inventarios';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'vendedores') {
               speech = 'Vas a consultar vendedores';
               reprompt = '?';
               jovo.ask(speech, reprompt);
          } else {
               speech = 'que va consultar';
               reprompt = '?';
               jovo.ask(speech, reprompt);
          }

     }



}
