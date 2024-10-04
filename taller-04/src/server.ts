import { Request, Response } from "express";
import cors from "cors";
import express from "express";

// API ROUTES IMPORTS
import userRoutes from "./user/v1/user.routes";

// MIDDLEWARES
const app = express();

app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

// ROUTES
app.use("/users", userRoutes);

// FALLBACKS
function routeNotFound(request: Request, response: Response) {
  response.status(404).json({
    message: "Route not found.",
  });
}

app.use(routeNotFound);

// START SERVER
app.listen(8080, () => {
  console.log("Server listening to port 8080.");
});
