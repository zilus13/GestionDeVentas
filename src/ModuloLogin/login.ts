import { Jovo } from "jovo-framework";


export class Login {

     /**
      * Metodo que se encarga de hacer login con la cedula de un usuario
      */
     async ingresar(cedula: string, jovo: Jovo) {
          let speech = 'La cedula ingresada es: ';
          const reprompt = '';

          if (cedula === '21724118') {
               speech = 'Se ah enviado su codigo de confirmacion porfavor ingreselo aqui';
               jovo.ask(speech, reprompt);
          } else {
               speech = 'La cedula ingresada no es valida ';
               jovo.ask(speech, reprompt);
          }
     }

     /**
      * Metodo que se encarga de validar  la cedula de un usuario
      */
     async validar(codigoValidacion: string, jovo: Jovo) {
          let speech = 'La cedula ingresada es: ';
          let reprompt = '';

          if (codigoValidacion === '123') {
               speech = 'Bienvenido Usuario, Que desea hacer? consultar, Modificar, eliminar o registrar';
               reprompt = 'Necesita gestionar algo?';
               jovo.ask(speech, reprompt);
          } else {
               speech = 'error al authenticarse';
               reprompt = 'error al realizar login vuelva a intentar';
               jovo.ask(speech, reprompt);
          }
     }




}
