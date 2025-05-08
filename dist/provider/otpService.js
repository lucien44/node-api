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
var Chance = require('chance');
var OTP = require("../entity/otp");
var User = require("../entity/user");
class OtpService {
    generateOTP(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            var chance = new Chance();
            var code = chance.string({ length: 4, pool: '0123456789' });
            console.log("le code est :" + code);
            try {
                console.log({ associatedPhoneNumber: phoneNumber });
                yield OTP.deleteMany({ associatedPhoneNumber: phoneNumber });
                const newOtp = new OTP({ code: code, associatedPhoneNumber: phoneNumber });
                newOtp.save().then((otp) => {
                    //sendSms(phoneNumber, `Bienvenue sur xxxx votre code est: ${code}`);
                    return otp;
                });
            }
            catch (error) {
                console.log(error);
                throw (error);
            }
        });
    }
    verifyOtp(code, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = yield OTP.find({ associatedPhoneNumber: phone, code: code });
            if (exist && exist.length) {
                yield OTP.deleteMany({ associatedPhoneNumber: phone });
                const filter = { phone: phone };
                const update = { active: 'active' };
                let doc = yield User.findOneAndUpdate(filter, update);
                return true;
            }
            return false;
        });
    }
}
exports.default = new OtpService();
