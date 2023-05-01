export class User{
    private id: number = 0;

    constructor(public name : string, public username : string, public password : string,public balance : number){}

    getId(){
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }

    getName(){
        return this.name
    }

    setName(name : string){
        this.name = name;
    }

    getUsername(){
        return this.username;
    }

    setUsername(username : string){
        this.username = username;
    }

    getPassword(){
        return this.password;
    }

    setPassword(password : string){
        this.password = password;
    }

    getBalance(){
        return this.balance;
    }

    setBalance(balance : number){
        this.balance = balance;
    }
}