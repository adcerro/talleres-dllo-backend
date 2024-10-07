import { Router, Request, Response } from "express";
import { readUsers , existsUser, addUser} from "./user.controller";

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
  const users = await readUsers({hobbies:request.query.hobby});
  response.status(200).json({
    message: "Success",
    hobby: request.query.hobby,
    users: users,
  });
}

async function userExists(request:Request,response:Response){
  const exists = await existsUser(Number(request.query.id?.toString()));
  response.status(200).json({
    exists: exists
  })
}

async function teamExperience(request: Request, response: Response) {
  const members = await readUsers({team:request.query.team});
  const experience = members.reduce((total,mem)=>total+mem.years,0);
  response.status(200).json({
    message: "Success",
    team: request.query.team,
    experience: experience,
  });
}

async function GetFactionUsers(request: Request, response: Response) {
  const users = await readUsers({faction:request.query.faction});
  response.status(200).json({
    message: "Success",
    faction: request.query.faction,
    users: users,
  });
}

async function addUserT(request:Request,response:Response){
  addUser({
    id: request.body.id,
    name: request.body.name,
    carrera: request.body.carrera
  });
  response.status(200).json({
    id: request.body.id,
    name: request.body.name,
    carrera: request.body.carrera
  }
  )
}

// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);
// Punto 1
userRoutes.get("/hobby", GetHobbyUsers);
// Punto 2
userRoutes.get("/exists", userExists);
// Punto 3
userRoutes.get("/team-experience", teamExperience);
// Punto 4
userRoutes.get("/by-faction", GetFactionUsers);
// Punto 5 
userRoutes.post("/", addUserT);

// EXPORT ROUTES
export default userRoutes;
