import { UserModel, UserType } from "./user.model";

const mongoose = require('mongoose');

// DECLARE ACTION FUNCTION
async function existsUserAction(id:Number): Promise<Boolean> {
  const result = await UserModel.exists({id:id})
  if(result!==null){
    return true;
  }
  return false;
}

// EXPORT ACTION FUNCTION
export default existsUserAction;
