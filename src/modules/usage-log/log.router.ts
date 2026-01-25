import { Router } from "express";
import { logController } from "./log.controller";
import auth from "../../middleware/auth";
import { Role } from "../../generated/prisma/enums";



const logRouter = Router()

logRouter.post("/", auth(), logController.createUsagesLog)
logRouter.get("/", logController.getUsagesLog)
logRouter.patch("/:id", auth(), logController.updateUsageLog)


export default  logRouter