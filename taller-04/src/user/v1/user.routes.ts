import { Router, Request, Response } from "express";
import { readUsers } from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function GetUsers(request: Request, response: Response) {
  //const users = await readUsers();
  response.status(200).json({
    message: "Success",
    //users: users,
  });
}
async function GetHobbyUsers(request: Request, response: Response) {
  //const users = await readUsers();
  response.status(200).json({
    message: "Success",
    hobby: request.params.hobby
    //users: users,
  });
}

// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);
userRoutes.get("/hobby/:hobby", GetHobbyUsers);
userRoutes.get("/exists/:id", GetHobbyUsers);

// EXPORT ROUTES
export default userRoutes;
