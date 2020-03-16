import { Jovo } from "jovo-framework";


export class Modificar {

     /**
      * Metodo que se encarga de consultar una tabla
      */
     async cambiar(tabla: string, jovo: Jovo) {
          let speech = '';
          let reprompt = '';

          if (tabla === 'ventas') {

               speech = 'Vas a Modificar ventas';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'clientes') {

               speech = 'Vas a Modificar clientes';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'rutas') {

               speech = 'Vas a Modificar rutas';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'inventarios') {

               speech = 'Vas a Modificar inventarios';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'vendedores') {
               speech = 'Vas a Modificar vendedores';
               reprompt = '?';
               jovo.ask(speech, reprompt);
          } else {
               speech = 'que va Modificar';
               reprompt = '?';
               jovo.ask(speech, reprompt);
          }

     }



}
