import express from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js"
import authMidddleware from "../middleware/auth.js";
const cartRouter = express.Router();

cartRouter.post("/add",authMidddleware, addToCart)
cartRouter.post("/remove",authMidddleware, removeFromCart)
cartRouter.post("/get",authMidddleware, getCart)

export default cartRouter;