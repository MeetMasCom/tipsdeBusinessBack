"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
var StringHelper = /** @class */ (function () {
    function StringHelper() {
    }
    StringHelper.prototype.hideEmail = function (email) {
        var data = email.split("@");
        return data[0] + "@" + "xxxxx";
    };
    StringHelper.prototype.generateRandomSixDigitNumber = function () {
        var min = 100000;
        var max = 999999;
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return StringHelper;
}());
exports.StringHelper = StringHelper;
