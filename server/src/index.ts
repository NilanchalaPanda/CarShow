import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "reflect-metadata";
import { AppDataSource } from "./database/config";
import { Router as userRouter } from "./routers/user.routes";
import { Router as carRouter } from "./routers/car.routes";

dotenv.config();
const app = express();
const port = process.env.PORT || 8002;

// CORS is enabled for the selected origins
let corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());

// Test route -
app.use("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", userRouter);
app.use("/api/v1", carRouter);
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
