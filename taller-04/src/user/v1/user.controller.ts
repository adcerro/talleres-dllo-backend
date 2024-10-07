import { ObjectId } from "mongoose";
import existsUserAction from "./exists.user.action";
import readUserAction from "./read.user.action";
import addUserAction from "./add.user.action";
import { UserType, UserType1 } from "./user.model";

// DECLARE CONTROLLER FUNCTIONS
async function readUsers(filter:{}={}): Promise<UserType[]> {
  const users = await readUserAction(filter);
  return users;
}
async function existsUser(id:Number): Promise<Boolean> {
  return await existsUserAction(id);
}
async function addUser(user:UserType1): Promise<Boolean> {
  return await addUserAction(user);
}

// EXPORT CONTROLLER FUNCTIONS
export { readUsers ,existsUser,addUser};
