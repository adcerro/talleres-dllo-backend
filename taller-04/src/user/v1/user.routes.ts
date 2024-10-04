import { Router, Request, Response } from "express";
import { readUsers , existsUser } from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function GetUsers(request: Request, response: Response) {
  const users = await readUsers();
  response.status(200).json({
    message: "Success",
    users: users,
  });
}
async function GetHobbyUsers(request: Request, response: Response) {
  const users = await readUsers({hobby:request.params.hobby});
  response.status(200).json({
    message: "Success",
    hobby: request.params.hobby,
    users: users,
  });
}

async function userExists(request:Request,response:Response){
  const exists = await existsUser(parseInt(request.params.id));
  response.status(200).json({
    exists: exists
  })
}

// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);
// Punto 1
userRoutes.get("/hobby/:hobby", GetHobbyUsers);
// Punto 2
userRoutes.get("/exists/:id", userExists);
userRoutes.get("/team-experience/:id", GetHobbyUsers);
userRoutes.get("/by-faction/:faction", GetHobbyUsers);

// EXPORT ROUTES
export default userRoutes;
