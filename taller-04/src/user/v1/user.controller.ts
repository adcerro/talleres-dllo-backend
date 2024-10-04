import { ObjectId } from "mongoose";
import existsUserAction from "./exists.user.action";
import readUserAction from "./read.user.action";
import { UserType } from "./user.model";

// DECLARE CONTROLLER FUNCTIONS
async function readUsers(filter:{}={}): Promise<UserType[]> {
  const users = await readUserAction(filter);

  return users;
}
async function existsUser(id:Number): Promise<Boolean> {
  return await existsUserAction(id);
}

// EXPORT CONTROLLER FUNCTIONS
export { readUsers ,existsUser};
