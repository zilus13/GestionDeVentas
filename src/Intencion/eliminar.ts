import { Jovo } from "jovo-framework";


export class Eliminar {

     /**
      * Metodo que se encarga de consultar una tabla
      */
     async suprimir(tabla: string, jovo: Jovo) {
          let speech = '';
          let reprompt = '';

          if (tabla === 'ventas') {

               speech = 'Vas a Eliminar ventas';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'clientes') {

               speech = 'Vas a Eliminar clientes';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'rutas') {

               speech = 'Vas a Eliminar rutas';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'inventarios') {

               speech = 'Vas a Eliminar inventarios';
               reprompt = '?';
               jovo.ask(speech, reprompt);

          } else if (tabla === 'vendedores') {
               speech = 'Vas a Eliminar vendedores';
               reprompt = '?';
               jovo.ask(speech, reprompt);
          } else {
               speech = 'que va Eliminar';
               reprompt = '?';
               jovo.ask(speech, reprompt);
          }

     }



}
