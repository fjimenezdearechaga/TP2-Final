import express from "express"
import routes from "./routes/routes.js"

const app = express()


app.use(express.json())


app.use(routes)


const PORT = 8000

app.listen(PORT,()=>{
    console.log("Servidor express escuchando en puerto: ", PORT)
})