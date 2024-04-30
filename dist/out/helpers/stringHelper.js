"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
class StringHelper {
    hideEmail(email) {
        const data = email.split("@");
        return data[0] + "@" + "xxxxx";
    }
    generateRandomSixDigitNumber() {
        const min = 100000;
        const max = 999999;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
exports.StringHelper = StringHelper;
