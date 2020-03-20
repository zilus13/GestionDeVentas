import { App } from 'jovo-framework';
import { Alexa } from 'jovo-platform-alexa';
import { JovoDebugger } from 'jovo-plugin-debugger';
import { FileDb } from 'jovo-db-filedb';
import { GoogleAssistant } from 'jovo-platform-googleassistant';
import { Login } from './Intencion/login';
import { Consultar } from './Intencion/consultar';
import { Insertar } from './Intencion/Insertar';
import { Modificar } from './Intencion/modificar';
import { Eliminar } from './Intencion/eliminar';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const app = new App();
const login = new Login();
const consultar = new Consultar();
const insertar = new Insertar();
const modificar = new Modificar();
const eliminar = new Eliminar();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb(),
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        const speech = 'Gestion de Ventas activa, cual es su cedula registrada';
        const reprompt = 'Cual es su cedula';
        this.ask(speech, reprompt);
    },


    ///--------- Intenciones Generales----------
    LoginIntent() {
        const cedula = this.$inputs.cedula.value;
        login.ingresar(cedula, this);
    },

    ValidarIntent() {
        const codigoValidacion = this.$inputs.codigo.value;
        login.validar(codigoValidacion, this);
    },
    ConsultarIntent() {
        const tabla = this.$inputs.tabla.value;
        consultar.consultar(tabla, this);
    },
    AgregarIntent() {
        const tabla = this.$inputs.tabla.value;
        insertar.agregar(tabla, this);
    },
    ModificarIntent() {
        const tabla = this.$inputs.tabla.value;
        modificar.cambiar(tabla, this);
    },
    EliminarIntent() {
        const tabla = this.$inputs.tabla.value;
        eliminar.suprimir(tabla, this);

    },
    ///-------------- Intenciones de ventas------
    // Estas Intenciones son especificas del modulo de ventas

    ConsultarVentasIntent() { },
    ModificarVentasConParametrosIntent() { },
    EliminarVentasIntent() { },
    InsertarVentasConParametrosIntent() { },
    ConsultarVentasParametrosIntent() { },



    Unhandled() {
        this.toIntent('LAUNCH');
    },

});

export { app };
