import { Laptop } from "../../model/product/laptop";
import { Monitor } from "../../model/product/monitor";
import { Phone } from "../../model/product/phone";
import { Product } from "../../model/product/product";
import { TV } from "../../model/product/tv";

export class ProductService{
    productList: Product[] = [];
    private idGenerator = 0;
    
    
    add(product : Product){
        product.setId(++this.idGenerator);
        this.productList.push(product);
        return true;
    }

    getById (id : number){
        for(let product of this.productList){
            if(product.getId() === id){
                return product;
            }
        }
        return null;
    }

    getProductsByType (type : string){
        const productsOfType : Product[] = [];

        switch(type){
            case "TV" : {
                for(const product of this.productList){
                    if(product instanceof TV){
                        productsOfType.push(product)
                    }
                }
                break;
            }

            case "Laptop" : {
                for(const product of this.productList){
                    if(product instanceof Laptop){
                        productsOfType.push(product)
                    }
                }
                break;
            }
            
            case "Phone" : {
                for(const product of this.productList){
                    if(product instanceof Phone){
                        productsOfType.push(product)
                    }
                }
                break;
            }

            case "Monitor" : {
                for(const product of this.productList){
                    if(product instanceof Monitor){
                        productsOfType.push(product)
                    }
                }
                break;
            }
        }
        return productsOfType;
    }
    edit(updatedProduct:Product){
        for (let i = 0; i < this.productList.length; i++) {
            if(this.productList[i].getId() === updatedProduct.getId()) {
                this.productList[i] = updatedProduct;
                return true
            }
        }
        return false;
    }

}
// 