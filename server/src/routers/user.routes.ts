import express from "express";
export const Router = express.Router();
import { userControllers } from "../controllers/userControlers";

Router.get("/users", userControllers.findAll);
Router.post("/signup", userControllers.create);
Router.post("/login", userControllers.login);
Router.get("/user/id/:id", userControllers.findById);
Router.get("/user/:email", userControllers.findByEmail);
Router.put("/user/:id", userControllers.update);
Router.delete("/user/:id", userControllers.delete);
