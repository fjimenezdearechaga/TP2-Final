import {Router} from "express"
import Controller from "../controllers/controller.js"

const controller = new Controller()
const routes = Router()

routes.get("/juegos",controller.getAllJuegos)
routes.post("/juegos",controller.createJuego)
routes.post("/ventas",controller.createVenta)


export default routes;