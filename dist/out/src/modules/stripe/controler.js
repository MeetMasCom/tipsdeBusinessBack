"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStripeSessionController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const create_checkout_api_1 = require("./api/create-checkout.api");
const create_checkout_stripe_service_1 = require("./services/create-checkout-stripe.service");
const createStripeSessionController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        let stripe = new create_checkout_api_1.StripeCreateCheckoutApi(process.env.STRIPE_SECRET_KEY || "");
        let rechargeStripeService = new create_checkout_stripe_service_1.CreateCheckoutStripeService(stripe);
        let result = yield rechargeStripeService.execute(payload.amount, payload.username);
        return (0, responseHelper_1.serviceResponse)({
            data: result,
            res: resp,
            req: req,
        });
    }
    catch (error) {
        return (0, responseHelper_1.serviceResponse)({
            message: error.message,
            res: resp,
            statusCode: 400,
            req: req,
        });
    }
});
exports.createStripeSessionController = createStripeSessionController;
