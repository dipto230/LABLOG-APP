import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createUsagesLog:RequestHandler = async (req, res) => {
    try {
        const payload = req.body;
        const log = await prisma.usageLog.create({
            data:payload
        })
        res.send({message:"log added", data:log})
    } catch (error) {
        res.send({message:"log creation", error})
    }
}


const getUsagesLog:RequestHandler = async (req, res) => {
    try {
        
        const log = await prisma.usageLog.findMany({
            include: {
                user: true,
                equipment:true
            }
        })
        res.send({message:"logs", data:log})
    } catch (error) {
        res.send({message:"log getting error", error})
    }
}

export const logController = {
    createUsagesLog,
    getUsagesLog
}










