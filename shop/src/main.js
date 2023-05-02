"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var productService_1 = require("../src/service/productService");
var userService_1 = require("../src/service/userService");
var laptop_1 = require("./model/product/laptop");
var Main = /** @class */ (function () {
    function Main() {
        this.userService = new userService_1.UserService;
        this.productService = new productService_1.ProductService;
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
    Main.prototype.checkAdmin = function (user) {
        return user.getUsername() === ("admin");
    };
    Main.prototype.defaultData = function () {
        this.productService.add(new laptop_1.Laptop("HP G850", 2000, "HP", 32, "Core i9 13 Gen", "RTX4090", "512"));
        this.productService.add(new laptop_1.Laptop("HP G7", 550, "HP", 8, "Core i5 10 Gen", "GTX", "1024"));
        this.productService.add(new laptop_1.Laptop("MSI GF66", 1000, "MSI", 12, "Core i7 11 Gen", "RTX4090", "256"));
        this.productService.add(new laptop_1.Laptop("Dell AB4", 500, "Dell", 16, "Core i3 8Gen", "S90", "128"));
        this.productService.add(new laptop_1.Laptop("Lenovo", 650, "Lenovo", 24, "Core i7 8 Gen", "RTX4090", "512"));
    };
    Main.prototype.signUp = function (name, username, password) {
        this.userService.signUp(name, username, password);
    };
    Main.prototype.signIn = function (username, password) {
        var user = this.userService.signIn(username, password);
        if (user === null)
            throw new Error("User not found!");
    };
    Main.prototype.displayProducts = function (products) {
        if (products == null || products.length == 0) {
            throw new Error("No products in this category yet!");
        }
        var i = 1;
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            console.log("".concat(i++, ". ").concat(product.toString()));
        }
    };
    return Main;
}());
exports.Main = Main;
