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
exports.HotelService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
class HotelService {
    constructor() {
        this.save = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.save(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAll();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getHotels = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getHotels();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getByIdUser = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getByIdUser(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.update = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validHotel = yield this.repo.getById(id);
                if (!validHotel)
                    throw new Error("El hotel no existe.");
                if (validHotel)
                    payload = Object.assign({ state: 1 }, payload);
                yield this.repo.update(id, payload);
                return "Datos actualizados";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.decline = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validHotel = yield this.repo.getById(id);
                if (!validHotel)
                    throw new Error("El hotel no existe.");
                if (validHotel)
                    payload = Object.assign({ state: 2 }, payload);
                console.log(payload);
                yield this.repo.update(id, payload);
                return "Datos actualizados";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.commentdecline = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updateComment(id, payload);
                return "Datos actualizados";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.commentPolicies = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.commentPolicies(id, payload);
                return "Datos actualizados";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getHotelNotVerified = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getHotelNotVerified();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getHotelVerified = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getHotelVerified();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateServices = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("id", id);
                console.log("data", payload);
                const validHotel = yield this.repo.getById(id);
                if (!validHotel)
                    throw new Error("El Hotel no existe.");
                yield this.repo.updateServices(id, payload);
                return "Servicio Agregado";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.updatePolicies = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validHotel = yield this.repo.getById(id);
                if (!validHotel)
                    throw new Error("El Hotel no existe.");
                yield this.repo.updatePolicies(id, payload);
                return "Politica Agregada";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getByIdServices = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getByIdServices(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateHotel = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updateHotel(id, payload);
                return "Datos actualizados";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.savePolicies = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.savePolicies(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getByIdPolicies = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getByIdPolicies(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.verifyPolicies = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.verifyPolicies(id, payload);
                return "Datos actualizados";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.updatePoliciesHotel = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updatePoliciesHotel(id, payload);
                return "Politica Agregada";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.updateState = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updateState(id, payload);
                return "Datos actualizados";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.repo = new repository_1.HotelRepository();
    }
}
exports.HotelService = HotelService;
