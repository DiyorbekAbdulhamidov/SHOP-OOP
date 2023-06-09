import { User } from "../model/user";

export class UserService{
    private userList: User[] = [];
    private idGenerator: number = 0;

    checkUserName(username: string){
        for(let i = 0; i < username.length; i++){
            if(this.userList[i].getUsername() === username){
                return true
            }
        }
        return false
    }

    getList(){
        return this.userList;
    }

    setList(list:[]){
        this.userList = list;
    }

    add(user: User){
        if(this.checkUserName(user.getUsername())){
            return false
        }
        user.setId(this.idGenerator++);
        this.userList.push(user);
        return true
    }

    signIn(username : string, password : string){
        for(let user of this.userList){
            if(user.getUsername() === username && user.getPassword() === password){
                return user
            }
        }
        return null;
    }

    signUp(name : string, username : string, password : string){
        if(this.checkUserName(username)){
            throw new Error(`user ${username} already exists`)
        }
        let newUser = new User(name,username,password,10000);
        this.add(newUser);
    }
    
}
