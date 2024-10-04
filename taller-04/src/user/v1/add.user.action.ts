let users:Object[] =[]

async function addUserAction(user:Object): Promise<Boolean>{
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