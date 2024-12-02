import Service from "../services/Service.js"


class Controller{

    service = new Service()

    getAllJuegos = async(req,res) =>{
        try{
            const data = await this.service.getAllJuegosService()
            res
                .status(200)
                .send({success:true,message:data})

        }catch(error){
            res.status(400).send({success:false,errorMsg:error.message})
        }
    }


    createJuego = async(req,res)=>{
        try{
            const {nombre} = req.body
            const{categoria} = req.body
            const{precio} = req.body
            const{cantidad} = req.body
            const data = await this.service.createJuegoService(nombre,categoria,precio,cantidad)
            res
                .status(200)
                .send({success:true,message:data})

        }catch(error){
            res.status(422).send({success:false,errorMsg:error.message})
        }
    }

    createVenta = async(req,res)=>{
        try{
            const {id} = req.body
            const{cantidad} = req.body
            const data = await this.service.createVentaService(id,cantidad)
            res
                .status(200)
                .send({success:true,message:data})

        }catch(error){
            res.status(422).send({success:false,errorMsg:error.message})
        }
    }


}


export default Controller