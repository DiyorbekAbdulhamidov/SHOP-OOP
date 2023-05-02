"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var laptop_1 = require("../model/product/laptop");
var monitor_1 = require("../model/product/monitor");
var phone_1 = require("../model/product/phone");
var tv_1 = require("../model/product/tv");
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.productList = [];
        this.idGenerator = 0;
    }
    ProductService.prototype.getList = function () {
        return this.productList;
    };
    ProductService.prototype.setList = function (productList) {
        if (productList === void 0) { productList = []; }
        this.productList = productList;
    };
    ProductService.prototype.add = function (product) {
        product.setId(++this.idGenerator);
        this.productList.push(product);
        return true;
    };
    ProductService.prototype.getById = function (id) {
        for (var _i = 0, _a = this.productList; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.getId() === id) {
                return product;
            }
        }
        return null;
    };
    ProductService.prototype.getProductsByType = function (type) {
        var productsOfType = [];
        switch (type) {
            case "TV": {
                for (var _i = 0, _a = this.productList; _i < _a.length; _i++) {
                    var product = _a[_i];
                    if (product instanceof tv_1.TV) {
                        productsOfType.push(product);
                    }
                }
                break;
            }
            case "Laptop": {
                for (var _b = 0, _c = this.productList; _b < _c.length; _b++) {
                    var product = _c[_b];
                    if (product instanceof laptop_1.Laptop) {
                        productsOfType.push(product);
                    }
                }
                break;
            }
            case "Phone": {
                for (var _d = 0, _e = this.productList; _d < _e.length; _d++) {
                    var product = _e[_d];
                    if (product instanceof phone_1.Phone) {
                        productsOfType.push(product);
                    }
                }
                break;
            }
            case "Monitor": {
                for (var _f = 0, _g = this.productList; _f < _g.length; _f++) {
                    var product = _g[_f];
                    if (product instanceof monitor_1.Monitor) {
                        productsOfType.push(product);
                    }
                }
                break;
            }
        }
        return productsOfType;
    };
    ProductService.prototype.edit = function (updatedProduct) {
        for (var i = 0; i < this.productList.length; i++) {
            if (this.productList[i].getId() === updatedProduct.getId()) {
                this.productList[i] = updatedProduct;
                return true;
            }
        }
        return false;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
// 
