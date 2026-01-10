import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const register: RequestHandler = async (req, res) => {
    const payload = req.body;

    const hashPassword = await bcrypt.hash(payload.password, 10);

    const user = await prisma.user.create({
        data: {
            ...payload,
          password:hashPassword
            
        }
    });
    res.send({ message: "registered successfully", data: user });
};

const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const matchPass = await bcrypt.compare(password, user.password);

  if (!matchPass) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    "very secret",
    { expiresIn: "7d" }
  );

  res.json({
    message: "Logged in successfully",
    token,
  });
};


export const userController = {
    register,
    login
}