import { Product } from "./product";
export class TV extends Product {
    constructor(public name:string,public price:number,public manufacturer:string,public displaySize:number,public isSmart:boolean,public displayType:string){
        super(name, price, manufacturer);
        this.displaySize = displaySize;
        this.isSmart = isSmart;
        this.displayType = displayType;
    
    }
    getDisplaySize(){
    return this.displaySize
    }
    setDisplaySize(displaySize:number){
        this.displaySize = displaySize
    }
    getSmart(){
        return this.isSmart
        }
        setSmart(isSmart:boolean){
            this.isSmart = isSmart
        }
        getDisplayType(){
            return this.displayType
        }
        setDisplayType(displayType:string){
        this.displayType = displayType;
            
        }
        
}