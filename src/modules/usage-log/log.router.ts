import { Router } from "express";
import { logController } from "./log.controller";



const logRouter = Router()

logRouter.post("/", logController.createUsagesLog)
logRouter.get("/", logController.getUsagesLog)


export default  logRouter