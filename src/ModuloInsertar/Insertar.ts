import { Jovo } from "jovo-framework";


export class Insertar {

     /**
      * Metodo que se encarga de agregrar
      */
     async agregar(tabla: string, jovo: Jovo) {
          let speech = ' ';
          let reprompt = '';

          if (tabla === 'ventas') {

               speech = 'Vas a agregar ventas';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'clientes') {

               speech = 'Vas a agregar clientes';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'rutas') {

               speech = 'Vas a agregar rutas';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'inventarios') {

               speech = 'Vas a agregar inventarios';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'vendedores') {
               speech = 'Vas a agregar vendedores';
               reprompt = '?';
               jovo.ask(speech, reprompt);
          } else {
               speech = 'que va consultar';
               reprompt = '?';
               jovo.ask(speech, reprompt);
          }

     }



}
