import { Router } from "express";
import { addItem, editItem } from "../controllers/todoController";
export const router = Router();

router.get("/", (req, res) => res.send("Api TodoList"));

router.get("/items", addItem);
router.put("/items/:id", editItem);
router.delete("/items/:id", editItem);
