"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var productService_1 = require("../src/service/productService");
var userService_1 = require("../src/service/userService");
var laptop_1 = require("./model/product/laptop");
var Main = /** @class */ (function () {
    function Main() {
        this.userService = new userService_1.UserService();
        this.productService = new productService_1.ProductService();
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
    Main.prototype.addProduct = function () {
        var product = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            product[_i] = arguments[_i];
        }
        for (var _a = 0, product_1 = product; _a < product_1.length; _a++) {
            var prod = product_1[_a];
            this.productService.add(prod);
        }
    };
    Main.prototype.getProductList = function () {
        return this.productService.getList();
    };
    Main.prototype.getUserList = function () {
        return this.userService.getList();
    };
    Main.prototype.addUserList = function () {
        var user = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            user[_i] = arguments[_i];
        }
        for (var _a = 0, user_1 = user; _a < user_1.length; _a++) {
            var userr = user_1[_a];
            this.userService.add(userr);
        }
    };
    Main.prototype.showProduct = function (type) {
        return this.productService.getProductsByType(type);
    };
    return Main;
}());
exports.Main = Main;
