import { User } from "./model/user";
import { Product } from "./model/product/product";
import { ProductService } from "../src/service/productService";
import { UserService } from "../src/service/userService";
import { Laptop } from "./model/product/laptop";
import { Monitor } from "./model/product/monitor";
import { Phone } from "./model/product/phone";
import { TV } from "./model/product/tv";

export class Main {
    private userService = new UserService;
    private productService = new ProductService;

    checkAdmin(user: User) {
        return user.getUsername() === ("admin");
    }

    defaultData() {
        this.productService.add(new Laptop("HP G850", 2000, "HP", 32, "Core i9 13 Gen", "RTX4090", "512"));
        this.productService.add(new Laptop("HP G7", 550, "HP", 8, "Core i5 10 Gen", "GTX", "1024"));
        this.productService.add(new Laptop("MSI GF66", 1000, "MSI", 12, "Core i7 11 Gen", "RTX4090", "256"));
        this.productService.add(new Laptop("Dell AB4", 500, "Dell", 16, "Core i3 8Gen", "S90", "128"));
        this.productService.add(new Laptop("Lenovo", 650, "Lenovo", 24, "Core i7 8 Gen", "RTX4090", "512"));
    }

    signUp(name: string, username: string, password: string) {
        this.userService.signUp(name, username, password)
    }

    signIn(username: string, password: string) {
        let user = this.userService.signIn(username, password);
        if (user === null) throw new Error("User not found!");
    }

    displayProducts(products: Product[]) {
        if (products == null || products.length == 0) {
            throw new Error("No products in this category yet!");
        }

        let i = 1;
        for (const product of products) {
            console.log(`${i++}. ${product.toString()}`);
        }
    }

    // crateTv(){
    //     return new TV("Artel",20000,"http",1920,false,"amoled");
    // }

    // createLaptop(){
    //     return new Laptop("LAPTOP",20000,"https",12,"coreI5","45gb","256gb");
    // }

    // editSingleProduct(product: Product) {
    //     const update = new Product("TV", 120000, "drk");

    //     if(product instanceof Laptop){
    //         update : this.createLaptop();
    //     }
       
    // }





}
