import { model, Schema } from "mongoose";

// DECLARE MODEL TYPE
type UserType = {id:Number,name:String,carrera:String,hobby:String};

// DECLARE MONGOOSE SCHEMA
const UserSchema = new Schema<UserType>({
    name:String,
    carrera:String,
    hobby: String,
});

// DECLARE MONGO MODEL
const UserModel = model<UserType>("User", UserSchema);

// EXPORT ALL
export { UserModel, UserSchema, UserType };
