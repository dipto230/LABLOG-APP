import { Router } from 'express'
import userRouter from '../modules/user/user.route'
import equipmentRouter from '../modules/equipment/equipment.router'
import logRouter from '../modules/usage-log/log.router'


const routes = Router()
routes.use("/user", userRouter)
routes.use("/equipment", equipmentRouter)

routes.use("/usageLog", logRouter)


export default routes