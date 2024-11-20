import {Router} from "express"
import Controller from "../controllers/controller.js"

const controller = new Controller()
const routes = Router()

routes.get("/",controller.getAllFrase)
routes.post("/createPalabrasApi",controller.createPalabrasApi)
routes.post("/",controller.create)
routes.delete("/",controller.remove)


export default routes;