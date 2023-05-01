export class Basket{
    constructor(public id: number, public productId: number, public userId : number, public amount : number){}

    getId(){
        return this.id;
    }

    setId(id : number){
        this.id = id;
    }

    getProductId(){
        return this.productId;
    }

    setProductId(productId : number){
        this.productId = productId;
    }

    getAmount(){
        return this.amount;
    }

    setAmount(amount : number){
        this.amount = amount;
    }

}