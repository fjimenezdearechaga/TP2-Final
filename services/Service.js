import Model from "../models/Model.js"
import { isAlphaNumeric } from "../utils/isAlphanumeric.js";

class Service{
    model = new Model()

    getAllFraseService = async ()=>{
        try {
            const data = this.model.getFrase();
            const frase = data.map((obj)=>obj.palabra).join(' ')
            return frase;
        } catch (error) {
            throw error;
        }
    }

    createPalabrasApi = async(cantidad)=>{
        try{
            const api = await fetch(`https://texto.deno.dev/palabras?cantidad=${cantidad}`)
            const data  = await api.json()
            const palabras = data.palabras
            const respuesta = this.model.createBulk(palabras)
            return respuesta;
        }catch(error){
            console.error(error)
        }
    }

    createService = async (palabra)=>{
        try {
            if(isAlphaNumeric(palabra)){
                console.log(palabra)
                const palabraGuardada = this.model.create(palabra)
                return palabraGuardada;
            }else{
                throw new Error('no valida')
            }
            
        } catch (error) {
            throw error;
        }
    }

    removeService = async (palabra)=>{
        try {
            if(isAlphaNumeric(palabra)){
                const palabraEliminada = this.model.remove(palabra)
                return palabraEliminada;
            }else{
                throw new Error('no valida')
            }
            
        } catch (error) {
            throw error;
        }
    }

}

export default Service