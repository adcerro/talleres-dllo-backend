import { UserType1 } from "./user.model";

let users:UserType1[] =[]

async function addUserAction(user:UserType1): Promise<Boolean>{
    let before_length = users.length;
    users.push(user);
    if(users.length == before_length+1){
        console.log(users);
        return true;
    }else{
        return false;
    }
}
export default addUserAction