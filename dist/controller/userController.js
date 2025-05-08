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
const otpService_1 = __importDefault(require("../provider/otpService"));
const jwtservice_1 = __importDefault(require("../provider/jwtservice"));
class UsserController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const otp = yield otpService_1.default.generateOTP(req.body.phone);
                const token = jwtservice_1.default.sign({ phone: req.body.phone });
                const exist = yield user_1.default.find({ phone: req.body.phone });
                if (exist && !exist.length) {
                    const newUser = new user_1.default({ active: 'pending', phone: req.body.phone });
                    newUser.save().then((user) => {
                        res.status(201).send({
                            success: true, message: 'Successfully created.', idUser: user._id, token: token,
                        });
                    });
                    return;
                }
                else {
                    const filter = { phone: req.body.phone };
                    const update = { active: 'pending' };
                    let doc = yield user_1.default.findOneAndUpdate(filter, update);
                    res.status(201).send({
                        success: true, message: 'Successfully created.', idUser: exist[0]._id, token: token,
                    });
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).send(error);
            }
        });
    }
    static verifyCode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("the OTP code:" + req.body.code);
            try {
                const verification = yield otpService_1.default.verifyOtp(req.body.code, req.phone);
                if (verification) {
                    res.send({ success: true, message: 'Successfully verified.' });
                }
                else
                    res.status(401).send({ success: false, message: 'verification error' });
            }
            catch (error) {
                console.log(error);
                res.status(500).send(error);
            }
        });
    }
    static refreshToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = jwtservice_1.default.sign({ phone: req.phone });
            res.status(201).send({
                success: true,
                message: 'Successfully created.',
                token,
            });
        });
    }
}
exports.default = UsserController;
