class Model{
    data = [{'id':1,"palabra":"perro"},{'id':2,"palabra":"compu"}]

    getFrase = ()=>{
        return this.data;
    }

    create = (palabra)=>{
        const id = this.data[this.data.length-1].id + 1
        const obj = {id,palabra}
        this.data.push(obj)
        return "ok"
    }

    createBulk = (palabras)=>{
        console.log(palabras)
        palabras.forEach(palabra => {
            const id = this.data[this.data.length-1].id + 1
            const obj = {id,palabra}
            console.log(obj)
            this.data.push(obj)
        });

        return "ok"
    }

    remove = (palabra)=>{
        const dataFiltrada = this.data.filter((p) => p.palabra!=palabra)
        if(this.data.length>dataFiltrada.length){
            this.data = dataFiltrada
            return palabra
        }else{
            throw new Error('palabra no encontrada')
        }
    
    }

}


export default Model