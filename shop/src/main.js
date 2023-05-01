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
    return Main;
}());
exports.Main = Main;
