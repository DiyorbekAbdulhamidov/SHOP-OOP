"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var user_1 = require("../model/user");
var UserService = /** @class */ (function () {
    function UserService() {
        this.userList = [];
        this.idGenerator = 0;
    }
    UserService.prototype.checkUserName = function (username) {
        for (var i = 0; i < username.length; i++) {
            if (this.userList[i].getUsername() === username) {
                return true;
            }
        }
        return false;
    };
    UserService.prototype.getList = function () {
        return this.userList;
    };
    UserService.prototype.setList = function (list) {
        this.userList = list;
    };
    UserService.prototype.add = function (user) {
        if (this.checkUserName(user.getUsername())) {
            return false;
        }
        user.setId(this.idGenerator++);
        this.userList.push(user);
        return true;
    };
    UserService.prototype.signIn = function (username, password) {
        for (var _i = 0, _a = this.userList; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.getUsername() === username && user.getPassword() === password) {
                return user;
            }
        }
        return null;
    };
    UserService.prototype.signUp = function (name, username, password) {
        if (this.checkUserName(username)) {
            throw new Error("user ".concat(username, " already exists"));
        }
        var newUser = new user_1.User(name, username, password, 10000);
        this.add(newUser);
    };
    return UserService;
}());
exports.UserService = UserService;
