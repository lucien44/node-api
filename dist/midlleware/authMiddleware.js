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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../entity/user"));
const jwtservice_1 = __importDefault(require("../provider/jwtservice"));
class AuthMiddleware {
    validateUserToken(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
                const decodedToken = jwtservice_1.default.verify(token);
                req.phone = decodedToken.phone;
                const exist = yield user_1.default.find({ phone: decodedToken.phone, active: 'active' });
                console.log(exist.length);
                if (!exist || !exist.length) {
                    res.status(401).send({ error: 'token invalid.' });
                    return;
                }
                req.userID = exist[0]._id;
                let now = Math.floor(Date.now() / 1000);
                if (now >= (decodedToken.iat + decodedToken.expiresIn)) {
                    res.status(401).send({ error: 'expired token', code: 1 });
                    return;
                }
                next();
            }
            catch (error) {
                console.log(error);
                res.status(401).send({ error: 'token invalid' });
            }
        });
    }
}
exports.default = new AuthMiddleware();
