import { Product } from "./product";

export class Monitor extends Product{
    constructor(public name : string, public price : number, public manufacturer : string, public displaySize : number, public HZ : number){
        super(name, price,manufacturer);
    }

    getDisplaySize(){
        return this.displaySize
    }

    setDisplaySize(displaySize: number){
        this.displaySize = displaySize 
    }

    getHz(){
        return this.HZ
    }

    setHz(hz: number){
        this.HZ = hz
    }
}