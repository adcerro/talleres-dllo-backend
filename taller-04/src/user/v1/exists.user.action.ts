import { UserModel, UserType } from "./user.model";

const mongoose = require('mongoose');

// DECLARE ACTION FUNCTION
async function existsUserAction(id:Number): Promise<Boolean> {
  const result = await UserModel.exists({_id:new mongoose.Types.ObjectId(id)})
  if(result!==null){
    return true;
  }
  return false;
}

// EXPORT ACTION FUNCTION
export default existsUserAction;
