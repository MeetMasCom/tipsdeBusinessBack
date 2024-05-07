"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeCheckoutApi = void 0;
const stripe_1 = __importDefault(require("stripe"));
class StripeCheckoutApi {
    constructor(secretKey) {
        this.stripe = new stripe_1.default(secretKey);
    }
}
exports.StripeCheckoutApi = StripeCheckoutApi;
