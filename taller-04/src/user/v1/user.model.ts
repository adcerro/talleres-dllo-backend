import { model, Schema } from "mongoose";

// DECLARE MODEL TYPE
type UserType = {id:number,name:string,hobbies:string[],years:number,team:string,faction:string};
type UserType1 = {id:number,name:string,carrera:string};
// DECLARE MONGOOSE SCHEMA
const UserSchema = new Schema<UserType>({
    id: Number,
    name:String,
    hobbies: [String],
    years: Number,
    team: String,
    faction: String
});

// DECLARE MONGO MODEL
const UserModel = model<UserType>("User", UserSchema);

// EXPORT ALL
export { UserModel, UserSchema, UserType ,UserType1};
