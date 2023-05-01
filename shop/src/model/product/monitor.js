"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitor = void 0;
var product_1 = require("./product");
var Monitor = /** @class */ (function (_super) {
    __extends(Monitor, _super);
    function Monitor(name, price, manufacturer, displaySize, HZ) {
        var _this = _super.call(this, name, price, manufacturer) || this;
        _this.name = name;
        _this.price = price;
        _this.manufacturer = manufacturer;
        _this.displaySize = displaySize;
        _this.HZ = HZ;
        return _this;
    }
    Monitor.prototype.getDisplaySize = function () {
        return this.displaySize;
    };
    Monitor.prototype.setDisplaySize = function (displaySize) {
        this.displaySize = displaySize;
    };
    Monitor.prototype.getHz = function () {
        return this.HZ;
    };
    Monitor.prototype.setHz = function (hz) {
        this.HZ = hz;
    };
    return Monitor;
}(product_1.Product));
exports.Monitor = Monitor;
