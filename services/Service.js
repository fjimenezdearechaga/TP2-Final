import Model from "../models/Model.js"
import { isAlphaNumeric } from "../utils/isAlphanumeric.js";
import {isNumber} from "../utils/isNumber.js"
import {isInt} from "../utils/isInt.js"
import {isString} from "../utils/isString.js"


class Service{
    model = new Model()

    getAllJuegosService = async ()=>{
        try {
            const data = this.model.getJuegos();
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    createJuegoService = async (nombre,categoria,precio,cantidad)=>{
        try {
            if(isAlphaNumeric(nombre) && isString(nombre) && isString(categoria) && isNumber(precio) && (precio>0) && isInt(cantidad) &&(cantidad>0)){
                const juego = {"nombre":nombre,"categoria":categoria,"precio":precio,"cantidad":cantidad}
                const juegoGuardado = this.model.createJuego(juego)
                return juegoGuardado;
            }else{
                throw new Error('Los datos ingresados no son válidos')
            }
            
        } catch (error) {
            throw error;
        }
    }

    createVentaService = async (id,cantidad)=>{
        try {
            if(isInt(id) && (id>0) && isInt(cantidad) &&(cantidad>0)){
                const ventaGuardada = this.model.createVenta(id,cantidad)
                return ventaGuardada;
            }else{
                throw new Error('Los datos ingresados no son válidos')
            }
            
        } catch (error) {
            throw error;
        }
    }


}

export default Service