class Model{
    juegos = [{"id":1,"nombre":"TEG","categoria":"estrategia","precio":20003.23,"cantidad":34},
        {"id":2,"nombre":"Pictionary","categoria":"familiar","precio":12010.04,"cantidad":10}
    ]
    ventas = []


    getJuegos = ()=>{
        return this.juegos;
    }

    createJuego = (juego)=>{
        const id = this.juegos[this.juegos.length-1].id + 1
        const obj = {id,juego}
        this.juegos.push(obj)
        return obj
    }

    createVenta = (id,cantidad)=>{
        try{
              if(id<=this.juegos.length){
                const juego = this.juegos.find((juego)=>juego.id===id)
                if(cantidad<=juego.cantidad){
                    juego.cantidad = juego.cantidad - cantidad
                    const obj = {"idJuego":id,"cantidad":cantidad}
                    this.ventas.push(obj)
                    return obj
                }else{
                    throw new Error("Los datos ingresados no son válidos")
                }
                
             }else{
              throw new Error("Los datos ingresados no son válidos")
             }
         }
         catch(error){
            throw error
         }
    }



}


export default Model